<template>
  <boxComponent class="body" widths="35" heights="85">
    <textTitleComponent content="Cadastro de Moradia" class="title" />

    <div class="formBox">
      <div class="inputBox">
        <textSubTitleComponent content="Nome e Vagas" />
        <div>
          <InputTextComponent placeholder="Nome da moradia" class="nameInput" />
          <InputTextComponent
            placeholder="Vagas"
            type="number"
            class="vacInput"
          />
        </div>
      </div>
      <div class="inputBox">
        <textSubTitleComponent content="Estado" />
        <inputOptionComponent
          @change="cityFilter"
          placeholder="Estados"
          :itens="states"
          class="stateInput"
        />
      </div>
      <div class="inputBox">
        <textSubTitleComponent content="Cidade e Bairro" />
        <div>
          <inputOptionComponent
            :itens="cities"
            class="cityInput"
            placeholder="Cidades"
          />
          <InputTextComponent placeholder="Bairro" class="hoodInput" />
        </div>
      </div>
      <div class="inputBox">
        <textSubTitleComponent content="Rua e Nº da Casa" />
        <div>
          <InputTextComponent placeholder="Rua" class="streetInput" />
          <InputTextComponent placeholder="Nº" class="numberInput" />
        </div>
      </div>
    </div>

    <buttonComponent
      @click="concluded = true"
      value="Criar Moradia"
      class="button"
      bgc="#35FF69"
    />

    <boxComponent v-if="concluded" class="publicBox" widths="35" heights="85">
      <textTitleComponent content="Tornar pública?" class="title" />
      <textSubTitleComponent
        content="Ao tornar sua moradia pública ela ficara visivel para todos usuário que procuram uma moradia (você pode mudar essa opção depois)"
      />
      <div class="buttonBox">
        <buttonComponent
          value="Sim"
          @click="createHouse($event)"
          bgc="#35FF69"
          id="1"
        />
        <buttonComponent
          value="Não"
          @click="createHouse($event)"
          bgc="#DB2955"
          id="0"
        />
      </div>

      <linkComponent
        @click="concluded = false"
        content="Editar moradia!"
        class="back"
      />
    </boxComponent>
  </boxComponent>
</template>

<script>
import boxComponent from "@/components/boxComponent.vue";
import textTitleComponent from "@/components/textTitleComponent.vue";
import textSubTitleComponent from "@/components/textSubTitleComponent.vue";
import InputTextComponent from "@/components/InputTextComponent.vue";
import buttonComponent from "@/components/buttonComponent.vue";
import inputOptionComponent from "@/components/inputOptionComponent.vue";
import linkComponent from "@/components/linkComponent.vue";

import axios from "axios";
import { mapGetters } from "vuex";
import { mapMutations } from "vuex";
import router from "../routes";

export default {
  components: {
    boxComponent,
    textTitleComponent,
    textSubTitleComponent,
    InputTextComponent,
    buttonComponent,
    inputOptionComponent,
    linkComponent,
  },

  data() {
    return {
      states: [],
      cities: [],
      concluded: false,
    };
  },

  computed: {
    ...mapGetters({
      token: "getToken",
    }),
  },

  created() {
    axios
      .get("https://servicodados.ibge.gov.br/api/v1/localidades/estados")
      .then((response) => {
        this.states = response.data.sort((a, b) =>
          a.nome.localeCompare(b.nome)
        );
      })
      .catch((error) => {
        console.error(error);
      });
  },

  methods: {
    ...mapMutations(["setHouse"]),

    cityFilter() {
      var UF = document.querySelector(".stateInput").value;

      axios
        .get(
          `https://servicodados.ibge.gov.br/api/v1/localidades/estados/${UF}/municipios`
        )
        .then((response) => {
          this.cities = response.data;
        })
        .catch((error) => {
          console.error(error);
        });
    },

    createHouse(e) {
      if (
        document.querySelector(".nameInput").childNodes[0].childNodes[0]
          .value != "" &&
        document.querySelector(".vacInput").childNodes[0].childNodes[0].value !=
          "" &&
        document.querySelector(".hoodInput").childNodes[0].childNodes[0]
          .value != "" &&
        document.querySelector(".streetInput").childNodes[0].childNodes[0]
          .value != "" &&
        document.querySelector(".numberInput").childNodes[0].childNodes[0]
          .value != ""
      ) {
        var obj = {
          public: e.target.id,
          name: document.querySelector(".nameInput").childNodes[0].childNodes[0]
            .value,
          vac: document.querySelector(".vacInput").childNodes[0].childNodes[0]
            .value,
          state:
            this.states[document.querySelector(".stateInput").selectedIndex - 1]
              .sigla,
          city: this.cities[
            document.querySelector(".cityInput").selectedIndex - 1
          ].nome.toUpperCase(),
          hood: document
            .querySelector(".hoodInput")
            .childNodes[0].childNodes[0].value.toUpperCase(),
          street: document
            .querySelector(".streetInput")
            .childNodes[0].childNodes[0].value.toUpperCase(),
          number: document
            .querySelector(".numberInput")
            .childNodes[0].childNodes[0].value.toUpperCase(),
        };

        const API = require("../config");

        const axios = require("axios");
        let data = JSON.stringify({
          name: obj.name,
          isPublic: obj.public,
          vacancies: obj.vac,
          address: {
            state: obj.state,
            city: obj.city,
            neighborhood: obj.hood,
            street: obj.street,
            number: obj.number,
          },
        });

        let config = {
          method: "post",
          maxBodyLength: Infinity,
          url: `${API.url}/house`,
          headers: {
            Authorization: this.token,
            "Content-Type": "application/json",
          },
          data: data,
        };

        axios
          .request(config)
          .then((response) => {
            this.setHouse(response.data.house_code);
            window.alert("Moradia criada com sucesso!");
            router.push("/");
          })
          .catch((error) => {
            console.log(error);
          });
      } else {
        window.alert("Algum campo do cadastro foi deixado em branco!");
      }
    },
  },
};
</script>

<style scoped>
.body {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  row-gap: 20px;
  padding: 10px;
}

.inputBox,
.formBox {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

.formBox {
  row-gap: 10px;
}

.inputBox {
  row-gap: 5px;
}

.inputBox div {
  display: flex;
  justify-content: center;
  align-items: center;
  column-gap: 2px;
}

.stateInput {
  width: 140%;
}

.streetInput,
.nameInput {
  flex: 0.55;
  min-width: 130px;
  max-width: 130px;
}

.numberInput,
.vacInput {
  flex: 0.25;
}

.cityInput {
  flex: 0.45;
  min-width: 120px;
  max-width: 120px;
}

.hoodInput {
  flex: 0.3;
}

.button {
  margin-top: 10px;
}

.title {
  margin: -15px;
}

.publicBox {
  position: absolute;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  padding: 10px 30px 10px 30px;
  row-gap: 40px;
}

.buttonBox {
  display: flex;
  justify-content: center;
  align-items: center;
  column-gap: 30px;
}

@media (max-width: 1100px) {
  .body {
    height: 70% !important;
    width: 70% !important;
  }

  .publicBox {
    height: 70% !important;
    width: 70% !important;
  }

  .inputBox span {
    font-size: 18px;
  }

  .stateInput {
    width: 155%;
  }
}
</style>
