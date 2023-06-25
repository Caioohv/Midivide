<template>
  <div class="body">
    <headerComponent />

    <div class="sections">
      <boxComponent class="box-component" widths="40" heights="85">
        <textTitleComponent content="Cadastro de Moradia" class="title" color="#000" />
        <div class="formBox">
          <div class="inputBox">
            <textSubTitleComponent content="Nome e Vagas" color="#000"/>
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
            <textSubTitleComponent content="Estado" color="#000"/>
            <inputOptionComponent
              @change="cityFilter"
              placeholder="Estados"
              :itens="states"
              class="stateInput"
            />
          </div>
          <div class="inputBox">
            <textSubTitleComponent content="Cidade e Bairro" color="#000"/>
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
            <textSubTitleComponent content="Rua e Nº da Casa" color="#000"/>
            <div>
              <InputTextComponent placeholder="Rua" class="streetInput" />
              <InputTextComponent placeholder="Nº" class="numberInput" />
            </div>
          </div>

          <div class="inputBox">
            <textSubTitleComponent content="Exbir publicamente?" color="#000"/>
            <inputSelectBinary/>
          </div>
        </div>

        <buttonComponent
          @click="concluded = true"
          value="Criar Moradia"
          class="button"
          bgc="#35FF69"
        />
        
      </boxComponent>
    </div>
  </div>
</template>

<script>
import boxComponent from "@/components/boxComponent.vue";
import textTitleComponent from "@/components/textTitleComponent.vue";
import textSubTitleComponent from "@/components/textSubTitleComponent.vue";
import InputTextComponent from "@/components/InputTextComponent.vue";
import buttonComponent from "@/components/buttonComponent.vue";
import inputOptionComponent from "@/components/inputOptionComponent.vue";
import inputSelectBinary from "@/components/inputSelectBinaryComponent.vue";

import axios from "axios";
import { mapGetters } from "vuex";
import { mapMutations } from "vuex";
import router from "../routes";
import headerComponent from '../components/headerComponent.vue';

export default {
  components: {
    boxComponent,
    textTitleComponent,
    textSubTitleComponent,
    InputTextComponent,
    buttonComponent,
    inputOptionComponent,
    inputSelectBinary,
    headerComponent
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
.body{
  width: 100%;
}

.sections{
  position: absolute;
  top: 120px;
  display: flex;
  width: 100%;
  justify-content: center;
  align-items: center;
  height: 80%
}

.box-component{
  position: relative;
  background-color: #F4F7F5;
  text-align: center;
  padding: 30px;
  overflow: auto;
  border-top-right-radius: 0px !important;
  border-bottom-right-radius: 0px !important;
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

.box-component::-webkit-scrollbar {
  width: 8px;
  background-color: transparent;
  flex: 0;
  position: absolute;
}

.box-component::-webkit-scrollbar-track {
  background-color: transparent;
}

.box-component::-webkit-scrollbar-thumb {
  background-color: #888;
  border-radius: 4px;
}

.box-component::-webkit-scrollbar-thumb:hover {
  background-color: #555;
}

.checkbox-container{
  width:100%
}

@media (max-width: 1100px) {
  .publicBox {
    height: 70% !important;
    width: 70% !important;
  }

  .sections{
    top: 150px;
  }

  .inputBox span {
    font-size: 18px;
  }

  .stateInput {
    width: 155%;
  }
}

@media (max-width: 700px) {
  .box-component{
    width: 90% !important;
  }

}
@media (max-width: 400px) {
  .inputBox div {
    width: 150%;
  }
}
</style>
