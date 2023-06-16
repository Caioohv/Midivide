<template>
  <boxComponent heights="85" widths="45" class="body">
    <div class="leftSize">
      <div class="logoBox">
        <logo1Component />
      </div>

      <div class="titleBox">
        <titleTextComponent content="Bem vindo" height="0" />
        <titleTextComponent content="de volta!" height="0" />
      </div>

      <div class="inputBox">
        <textInputComponent placeholder="Seu usuário" id="user"/>
        <textInputComponent placeholder="Sua senha" type="password" id="pass"/>
      </div>

      <div class="buttonBox">
        <router-link to="/">
          <buttonComponent
            @click="login"
            value="Entrar"
            bgc="#35FF69"
            color="#001011"
            width="100"
            height="100"
          />
        </router-link>
      </div>

      <div class="forgetBox">
        <textBodyComponent content="Esqueci minha senha!" />
      </div>

      <div class="buttonBoxMobile">
        <router-link to="/register">
          <textBodyComponent content="Não possui conta? Crie sua conta aqui!" />
        </router-link>
      </div>

      <div class="toogleBox toogleBoxMobile">
        <textSubTitleComponent content="Tema Escuro:" height="30" size="20" />
        <buttonToogleComponent />
      </div>
    </div>
    <div class="rightSize">
      <div class="merchanBox">
        <TextTitleComponent
          content="O sistema que"
          size="24"
          color="#333333"
          height="2"
        />
        <TextTitleComponent
          content="organiza sua"
          size="24"
          color="#333333"
          height="2"
        />
        <TextTitleComponent
          content="moradia"
          size="24"
          color="#333333"
          height="2"
        />
        <textSubTitleComponent
          content="E facilita sua vida!"
          color="#333333"
          height="35"
          size="20"
        />
      </div>

      <div class="buttonBox">
        <router-link to="/register">
          <buttonComponent
            value="Crie sua conta!"
            bgc="#9E76DB"
            color="#F4F7F5"
            width="100"
            height="100"
          />
        </router-link>
      </div>

      <div class="toogleBox">
        <textSubTitleComponent
          content="Tema Escuro:"
          color="#333333"
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
import textInputComponent from "@/components/InputTextComponent.vue";
import titleTextComponent from "@/components/textTitleComponent.vue";
import logo1Component from "@/components/logo1Component.vue";
import buttonComponent from "@/components/buttonComponent.vue";
import textBodyComponent from "@/components/linkComponent.vue";
import textSubTitleComponent from "@/components/textSubTitleComponent.vue";
import TextTitleComponent from "@/components/textTitleComponent.vue";
import buttonToogleComponent from "@/components/buttonToogleComponent.vue";

import { mapMutations } from "vuex";

export default {
  components: {
    boxComponent,
    textInputComponent,
    titleTextComponent,
    logo1Component,
    buttonComponent,
    textBodyComponent,
    textSubTitleComponent,
    TextTitleComponent,
    buttonToogleComponent,
  },


  methods:{
    ...mapMutations(['tryLogin']),

    login(){
      var username = document.querySelector("#user").childNodes[0].childNodes[0].value;
      var password = document.querySelector("#pass").childNodes[0].childNodes[0].value;

      var info = {username, password};

      this.tryLogin(info);

    }
  }



};
</script>

<style scoped>
.logoBox {
  margin-bottom: 40px;
}

.titleBox {
  margin-bottom: 45px;
  display: flex;
  flex-direction: column;
  align-items: center;
}

.inputBox {
  display: flex;
  flex-direction: column;
  row-gap: 15px;
  margin-bottom: 10px;
}

.buttonBox {
  margin-top: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
}
.forgetBox {
  margin-top: 9.5px;
}

.merchanBox {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

.toogleBox {
  display: flex;
  flex-direction: column;
  align-items: center;
  position: absolute;
  margin-top: 65vh;
}

.leftSize {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 60%;
  height: 100%;
}

.rightSize {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 40%;
  height: 100%;
  background-color: #35ff69;
  border-radius: 0px 16px 16px 0px;
}

.buttonBoxMobile {
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
    padding: 0px 20px 0px 20px;
    width: 40% !important;
  }
  .leftSize {
    width: 60%;
  }
}
@media (max-width: 500px) {
  .body {
    width: 90% !important;
  }
  .rightSize {
    display: none;
  }
  .leftSize {
    width: 100%;
    padding: 50px;
    align-items: center;
    row-gap: 0px;
  }

  .inputBox {
    margin-top: -20px;
    width: 90%;
  }

  .buttonBox {
    margin-top: 10px;
  }

  .buttonBoxMobile {
    display: flex;
    margin-top: 15px;
    margin-bottom: 60px;
  }
  .buttonBoxMobile a {
    text-decoration: none !important;
  }

  .toogleBoxMobile {
    margin-top: 62vh;
    display: flex;
  }
}
</style>
