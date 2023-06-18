<template>
  <boxComponent heights="60" widths="45" class="body">
    <logo1Component />

    <div class="textBox">
      <textTitleComponent
        content="Eviamos um código de verificação para seu email!"
      />
      <textSubTitleComponent
        content="Digite o código recebido por email abaixo:"
      />
    </div>

    <InputTextComponent placeholder="Código" id="code"/>
    <buttonComponent value="Verificar" bgc="#35FF69" color="#001011" @click="sendCode" />
  </boxComponent>
</template>

<script>
import boxComponent from "../components/boxComponent.vue";
import textTitleComponent from "@/components/textTitleComponent.vue";
import textSubTitleComponent from "@/components/textSubTitleComponent.vue";
import InputTextComponent from "@/components/InputTextComponent.vue";
import logo1Component from "@/components/logo1Component.vue";
import buttonComponent from "@/components/buttonComponent.vue";

import { mapGetters } from "vuex";
import router from "@/routes";

export default {
  components: {
    boxComponent,
    textTitleComponent,
    textSubTitleComponent,
    InputTextComponent,
    logo1Component,
    buttonComponent,
  },

  computed:{
    ...mapGetters({
                email: 'getRegisterEmail'
    }),
  },

  methods: {
    sendCode() {

    console.log(document.querySelector("#code").childNodes[0].childNodes[0].value);
    console.log(this.email);

      const API = require('../config');

      const axios = require("axios");
      let data = JSON.stringify({
        code: document.querySelector("#code").childNodes[0].childNodes[0].value,
      });

      let config = {
        method: "post",
        maxBodyLength: Infinity,
        url: `${API.url}/auth/register/confirm`,
        headers: {
          "x-registration-target": this.email,
          "Content-Type": "application/json",
        },
        data: data,
      };

      axios
        .request(config)
        .then((response) => {
          console.log(JSON.stringify(response.data));
          router.push('/');
        })
        .catch((error) => {
          console.log(error);
        });
    },
  },
};
</script>

<style scoped>
.body {
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  flex-direction: column;
  row-gap: 20px;
  padding: 30px 10px 30px 10px;
}

.textBox {
  margin-top: -10px;
  margin-bottom: 20px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

@media (max-width: 1100px) {
  .body {
    width: 70% !important;
  }
}
</style>
