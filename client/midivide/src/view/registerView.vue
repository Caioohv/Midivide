<template>
  <boxComponent heights="85" widths="45" class="body">
    <div class="leftSize">
      <router-link to="/">
        <div class="logoBox">
          <logo1Component />
        </div>
      </router-link>

      <div class="mensageBox">
        <textTitleComponent content="É um prazer" height="0" />
        <textTitleComponent content="tê-lo aqui!" height="0" />
      </div>

      <div class="inputBox">
        <InputTextComponent placeholder="Seu Nome" id="name" />
        <InputTextComponent placeholder="Seu Email" id="email"/>
        <InputTextComponent placeholder="Sua Senha" type="password" id="password"/>
      </div>

      <div class="buttonBox">
        <buttonComponent
          @click="startRegistration"
          value="Registar"
          bgc="#9E76DB"
          color="#E8E8E8"
          width="100"
          height="100"
        />
      </div>

      <div class="buttonBoxCelular">
        <router-link to="/">
          <textBodyComponent
            content="Já possui conta? Entre na sua conta aqui!"
          />
        </router-link>
      </div>

      <div class="toogleBox toogleBoxMobile">
        <textSubTitleComponent content="Tema Escuro:" height="30" size="20" />
        <buttonToogleComponent />
      </div>
    </div>
    <div class="rightSize">
      <div class="mensageBox">
        <textTitleComponent content="Já possui" color="#E8E8E8" height="0" />
        <textTitleComponent content="conta?" color="#E8E8E8" height="0" />
      </div>

      <div class="buttonBox">
        <router-link to="/">
          <buttonComponent
            value="Entrar"
            bgc="#35FF69"
            color="#262626"
            width="100"
            height="100"
          />
        </router-link>
      </div>
      <div class="toogleBox">
        <textSubTitleComponent
          content="Tema Escuro:"
          color="#E8E8E8"
          height="30"
          size="20"
        />
        <buttonToogleComponent />
      </div>
    </div>
  </boxComponent>
</template>

<script>
import boxComponent from "@/components/boxComponent.vue";
import logo1Component from "@/components/logo1Component.vue";
import textTitleComponent from "@/components/textTitleComponent.vue";
import textSubTitleComponent from "@/components/textSubTitleComponent.vue";
import InputTextComponent from "@/components/InputTextComponent.vue";
import buttonComponent from "@/components/buttonComponent.vue";
import buttonToogleComponent from "@/components/buttonToogleComponent.vue";
import textBodyComponent from "@/components/linkComponent.vue";

import { mapMutations } from "vuex";
import router from '../routes';

export default {
  components: {
    boxComponent,
    logo1Component,
    textTitleComponent,
    InputTextComponent,
    buttonComponent,
    buttonToogleComponent,
    textBodyComponent,
    textSubTitleComponent,
  },

  methods: {

    ...mapMutations(['setRegisterEmail']),

    startRegistration() {

      var nameInput = document.querySelector("#name").childNodes[0].childNodes[0].value;
      var emailInput = document.querySelector("#email").childNodes[0].childNodes[0].value;
      var passwordInput = document.querySelector("#password").childNodes[0].childNodes[0].value;


      if(nameInput != '' && emailInput != '' && passwordInput != ''){

        const API = require("../config");

        const axios = require("axios");
        let data = JSON.stringify({
          name: nameInput,
          email: emailInput,
          password: passwordInput,
        });

        let config = {
          method: "post",
          maxBodyLength: Infinity,
          url: `${API.url}/auth/register/start`,
          headers: {
            "Content-Type": "application/json",
          },
          data: data,
        };

        axios
          .request(config)
          .then((response) => {
            console.log(JSON.stringify(response.data));
            router.push("/verify");
            this.setRegisterEmail(emailInput);
          })
          .catch((error) => {
            console.log(error);
          });
      }
    }
  },
};
</script>

<style scoped>
.leftSize {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 60%;
  height: 100%;
  row-gap: 5px;
}

.rightSize {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 40%;
  height: 100%;
  background-color: #9e76db;
  border-radius: 0px 16px 16px 0px;
}

.logoBox {
  margin-bottom: 30px;
}

.mensageBox {
  margin-bottom: 20px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

.inputBox {
  margin-bottom: 28px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  row-gap: 10px;
}

.toogleBox {
  display: flex;
  flex-direction: column;
  align-items: center;
  position: absolute;
  margin-top: 65vh;
}

.buttonBox {
  display: flex;
  justify-content: center;
  align-items: center;
}

.buttonBoxCelular {
  display: none;
}

.toogleBoxMobile {
  display: none;
}

.logoBox {
  height: 71px;
  width: 71px;
}

/* Responsividade */
@media (max-width: 1100px) {
  .body {
    width: 70% !important;
  }
}
@media (max-width: 870px) {
  .body {
    width: 70% !important;
  }

  .rightSize {
    width: 40% !important;
  }
}
@media (max-width: 700px) {
  .body {
    width: 90% !important;
  }

  .rightSize {
    width: 40% !important;
  }
  .leftSize {
    width: 60%;
  }
}
@media (max-width: 500px) {
  .body {
    text-align: center;
    width: 90% !important;
  }

  .rightSize {
    display: none;
  }
  .leftSize {
    width: 100%;
    align-items: center;
    padding: 50px;
  }
  .inputBox {
    margin-bottom: 10px;
  }
  .buttonBoxCelular {
    display: flex;
  }
  .buttonBoxCelular a {
    text-decoration: none !important;
  }

  .toogleBoxMobile {
    margin-top: 62vh;
    display: flex;
  }
  .buttonBoxCelular {
    margin-top: 10px;
    margin-bottom: 60px;
  }
}
</style>
