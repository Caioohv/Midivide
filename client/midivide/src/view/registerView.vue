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
        <InputTextComponent placeholder="Seu CPF" />
        <InputTextComponent placeholder="Seu Email" />
        <InputTextComponent placeholder="Seu Nome" />
        <InputTextComponent placeholder="Sua Senha" type="password" />
      </div>

      <div class="buttonBox">
        <buttonComponent
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
  row-gap: 15px;
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
    width: 90%;
  }
  .buttonBoxCelular {
    display: flex;
  }
  .buttonBoxCelular a {
    text-decoration: none !important;
  }

  .toogleBoxMobile {
    margin-top: 70vh;
    display: flex;
  }
  .buttonBoxCelular {
    margin-top: 10px;
    margin-bottom: 60px;
  }
}
</style>
