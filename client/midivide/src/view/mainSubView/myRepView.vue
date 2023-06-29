<template>
  <boxComponent class="myHomeBody">
    <textTitleComponent content="Minha Moradia" />
    <div class="formBox">
      <div class="inputBox">
        <textSubTitleComponent content="Nome e Vagas" class="subTitle"/>
        <div>
          <InputTextComponent
            class="nameInput"
            :readonly="!user.admin"
            :value="user.house.name"
          />
          <InputTextComponent
            type="number"
            class="vacInput"
            :readonly="!user.admin"
            :value="user.house.vacancies"
          />
        </div>
      </div>
      <div class="inputBox">
        <textSubTitleComponent content="Estado" class="subTitle"/>
        <inputOptionComponent
          v-if="user.admin"
          @change="cityFilter"
          placeholder="Estados"
          :itens="states"
          class="stateInput"
        />
        <InputTextComponent
          v-else
          class="stateInput"
          :readonly="!user.admin"
          :value="user.house.state"
        />
      </div>
      <div class="inputBox">
        <textSubTitleComponent content="Cidade e Bairro" class="subTitle"/>
        <div>
          <inputOptionComponent
            v-if="user.admin"
            :itens="cities"
            class="cityInput"
            placeholder="Cidades"
          />
          <InputTextComponent
            v-else
            class="cityInput"
            :readonly="!user.admin"
            :value="user.house.city"
          />
          <InputTextComponent
            placeholder="Bairro"
            class="hoodInput"
            :readonly="!user.admin"
            :value="user.house.neighborhood"
          />
        </div>
      </div>
      <div class="inputBox">
        <textSubTitleComponent content="Rua e Nº da Casa" class="subTitle"/>
        <div>
          <InputTextComponent
            placeholder="Rua"
            class="streetInput"
            :readonly="!user.admin"
            :value="user.house.street"
          />
          <InputTextComponent
            placeholder="Nº"
            class="numberInput"
            :readonly="!user.admin"
            :value="user.house.number"
          />
        </div>
      </div>
      <div class="inputBox">
        <div>
          <input
            type="checkbox"
            :checked="user.house.is_public"
            class="publicInput"
          />
          <textSubTitleComponent content="Publico" class="subTitle"/>
        </div>
      </div>
    </div>

    <buttonComponent
      @click="editHouse"
      value="Editar"
      bgc="#9E76DB"
      color="#FFF"
      height="10"
      v-if="user.admin"
    />
  </boxComponent>
</template>

<script>
import boxComponent from "@/components/boxComponent.vue";
import textTitleComponent from "@/components/textTitleComponent.vue";
import InputTextComponent from "@/components/InputTextComponent.vue";
import textSubTitleComponent from "@/components/textSubTitleComponent.vue";
import buttonComponent from "@/components/buttonComponent.vue";
import inputOptionComponent from "@/components/inputOptionComponent.vue";

import { mapGetters } from "vuex";

import axios from "axios";

export default {
  components: {
    boxComponent,
    textTitleComponent,
    InputTextComponent,
    textSubTitleComponent,
    buttonComponent,
    inputOptionComponent,
  },

  data() {
    return {
      states: [],
      cities: [],
    };
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

    editHouse() {
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
          .value != "" &&
        document.querySelector(".stateInput").selectedIndex != 0 &&
        document.querySelector(".cityInput").selectedIndex != 0
      ) {
        var obj = {
          public: document.querySelector(".publicInput").checked,
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

        const API = require("../../config");

        const axios = require("axios");
        let data = JSON.stringify({
          name: obj.name,
          is_public: obj.public,
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
          method: "put",
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
            console.log(JSON.stringify(response.data));
            window.alert("Alterado com sucesso!");
          })
          .catch((error) => {
            console.log(error);
          });
      } else {
        window.alert("Algum campo está em branco!");
      }
    },
  },

  computed: {
    ...mapGetters({
      user: "getUser",
    }),
  },
};
</script>

<style scoped>
.myHomeBody {
  padding: 20px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-top: 20%;
}

.inputBox,
.formBox {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

.subTitle{
  font-size: 15px;
  line-height: 15px;
}

.formBox {
  row-gap: 10px;
  margin-bottom: 20px;
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
  min-width: 210px;
  max-width: 210px;
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
</style>
