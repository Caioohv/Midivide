<template>
  <boxComponent class="body" heights="60" widths="30">
    <textTitleComponent class="title" :content="name" />

    <div class="infoBox">
      <div class="textBox">
        <textSubTitleComponent content="Código:" />
        <textSubTitleComponent :content="code" />
      </div>

      <div class="textBox">
        <textSubTitleComponent content="Endereço:" />
        <textSubTitleComponent :content="addres" />
      </div>

      <div class="textBox">
        <textSubTitleComponent content="Vagas disponiveis:" />
        <textSubTitleComponent :content="vacancies" />
      </div>

      <div class="textBox">
        <textSubTitleComponent content="Nº de moradores:" />
        <textSubTitleComponent :content="occupied" />
      </div>
    </div>

    <div class="buttonBox">
      <buttonComponent
        @click="entryRequest"
        value="Solicitar entrada"
        bgc="#35FF69"
      />
      <linkComponent
        @click="emitSinal"
        content="Voltar para seleção de moradias"
      />
    </div>
  </boxComponent>
</template>

<script>
import boxComponent from "./boxComponent.vue";
import textTitleComponent from "./textTitleComponent.vue";
import textSubTitleComponent from "./textSubTitleComponent.vue";
import buttonComponent from "./buttonComponent.vue";
import linkComponent from "./linkComponent.vue";

import { mapGetters } from "vuex";
import router from "@/routes";

export default {
  props: {
    code: String,
  },

  data() {
    return {
      name: "",
      addres: "",
      vacancies: "",
      occupied: "",
    };
  },

  computed: {
    ...mapGetters({
      token: "getToken",
    }),
  },

  methods: {
    emitSinal() {
      this.$emit("closeDetails");
    },
    entryRequest() {
      const API = require("../config");

      const axios = require("axios");
      let data = JSON.stringify({
        house: this.code,
      });

      let config = {
        method: "post",
        maxBodyLength: Infinity,
        url: `${API.url}/house/request`,
        headers: {
          Authorization: this.token,
          "Content-Type": "application/json",
        },
        data: data,
      };

      axios
        .request(config)
        .then((response) => {
          console.log(response);
          window.alert("Requisição Enviada");
          router.push("/waitingrep");
        })
        .catch((error) => {
          console.log(error);
        });
    },
  },

  created() {
    const API = require("../config");

    const axios = require("axios");
    let data = "";

    let config = {
      method: "get",
      maxBodyLength: Infinity,
      url: `${API.url}/houses/${this.code}`,
      headers: {
        Authorization: this.token,
      },
      data: data,
    };

    axios
      .request(config)
      .then((response) => {
        this.name = response.data.name;
        this.addres = `${response.data.street}, ${response.data.number}, ${response.data.neighborhood}`;
        this.vacancies = `${response.data.vacancies - response.data.occupied}`;
        this.occupied = `${response.data.occupied}`;
      })
      .catch((error) => {
        console.log(error);
      });
  },

  components: {
    boxComponent,
    textTitleComponent,
    textSubTitleComponent,
    buttonComponent,
    linkComponent,
  },
};
</script>

<style scoped>
.body {
  position: absolute;
  box-shadow: -1px -8px 12px rgba(0, 0, 0, 0.082),
    1px 8px 12px rgba(0, 0, 0, 0.082);
  padding: 10px 30px 10px 30px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  row-gap: 20px;
}

.title {
  margin: -15px;
}

.infoBox {
  display: flex;
  flex-direction: column;
  row-gap: 8px;
  align-items: flex-start;
  text-align: left;
}

.buttonBox {
  display: flex;
  flex-direction: column;
  row-gap: 12px;
}

.textBox > :first-child {
  margin-right: 6px;
}

@media (max-width: 500px) {
  .body {
    height: 60% !important;
    width: 80% !important;
  }
}
</style>
