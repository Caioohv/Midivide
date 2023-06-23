<template>
  <boxComponentVue class="box" widths="75" heights="85">

    <boxComponentVue v-if="localChoose" class="localBox box" widths="75" heights="85">
      <div class="box">
        <textTitleComponent content="Escolha a localização!" />
        <textSubTitleComponent content="Para filtrar por cidade, deixe bairro em branco!" />
      </div>
      <div class="box">
        <inputOptionComponent
          @change="cityFilter"
          placeholder="Estados"
          :itens="states"
          :itemtype="false"
          class="stateInput optionInput"
        />
        <inputOptionComponent
            :itens="cities"
            class="cityInput optionInput"
            placeholder="Cidades"
            :itemtype="true"
          />
        <InputTextComponent placeholder="Bairro" class="hoodInput optionInput" />
      </div>

        <buttonComponent @click="filter" value="Filtrar" bgc="#35FF69"/>
    </boxComponentVue>

    <div class="textBox">
      <textTitleComponent content="Essas são as repúblicas próximas à você!" />
    </div>

    <div class="republics">
        <republicBoxComponent :key="house.identifier"  v-for="house in houses" :title="house.name" :addres="`${house.street}, ${house.number}, ${house.neighborhood}`"/>
    </div>

    <buttonComponent @click="localChoose=true" value="Trocar localização" bgc="#9E76DB" color="#FFF"/>
    
  </boxComponentVue>
</template>

<script>
import boxComponentVue from "@/components/boxComponent.vue";
import textTitleComponent from "@/components/textTitleComponent.vue";
import republicBoxComponent from "@/components/republicBoxComponent.vue";
import textSubTitleComponent from "@/components/textSubTitleComponent.vue";
import inputOptionComponent from '../components/inputOptionComponent.vue';
import InputTextComponent from "@/components/InputTextComponent.vue";
import buttonComponent from "@/components/buttonComponent.vue";

import axios from "axios";
import { mapGetters } from "vuex";

export default {
  components: {
    boxComponentVue,
    textTitleComponent,
    republicBoxComponent,
    textSubTitleComponent,
    inputOptionComponent,
    InputTextComponent,
    buttonComponent,
  },

  data(){
    return{
      localChoose: true,
      states: [],
      cities: [],
      houses: []
    }
  },

  computed:{
    ...mapGetters({
      token: 'getToken'
    })
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

  methods:{
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

    filter(){

      if(document.querySelector(".cityInput").selectedIndex!=0){

        var city = this.cities[document.querySelector(".cityInput").selectedIndex - 1].nome;
        var hood = document.querySelector(".hoodInput").childNodes[0].childNodes[0].value;

        const API = require("../config");

        if(hood != ""){
          var urlRequest = `${API.url}/houses?city=${city}&neighborhood=${hood}`;
        }else{
          urlRequest = `${API.url}/houses?city=${city}`;
        }

        const axios = require('axios');
        let data = '';

        let config = {
          method: 'get',
          maxBodyLength: Infinity,
          url: urlRequest,
          headers: { 
            'Authorization': this.token
          },
          data : data
        };

        axios.request(config)
        .then((response) => {
          console.log(JSON.stringify(response.data));
          if(response.data.length > 0){
            this.houses = response.data;
            this.localChoose = false;
          }else{
            window.alert("A cidade ou bairro não possui moradias cadastradas em nosso sistema :(");
          }
        })
        .catch((error) => {
          console.log(error);
        });

      }else{
        window.alert("Nenhuma cidade selecionada!");
      }

    }

  }

};
</script>

<style scoped>
.box {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 20px;
  text-align: center;
  row-gap: 10px;
}

.localBox{
  position: absolute;
}

.optionInput{
  width: 300px;
  max-width: 300px;
}

.body {
  margin-bottom: 10px;
  max-width: 70% !important;

}

.textBox {
  display: flex;
  justify-content: center;
  align-items: center;
}

.textTitle {
    padding: 0px;
}

.republics {
  overflow-y: auto;
  height: auto;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
}

.republics::-webkit-scrollbar {
  width: 8px;
  background-color: transparent;
  flex: 0;
  position: absolute;
}

.republics::-webkit-scrollbar-track {
  background-color: transparent;
}

.republics::-webkit-scrollbar-thumb {
  background-color: #888;
  border-radius: 4px;
}

.republics::-webkit-scrollbar-thumb:hover {
  background-color: #555;
}

@media (max-width: 1100px) {
  .box {
    width: 70% !important;
  }
  .textBox {
    margin: 10px;
  }
}
@media (max-width: 500px) {
  .box {
    width: 80% !important;
  }
  .optionInput{
    width: 100%;
  }
}
</style>
