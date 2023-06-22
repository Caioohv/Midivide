<template>
  <boxComponentVue class="box" widths="35" heights="85">
    <logo1Component />

    <div class="textBox">
      <textTitleComponent content="Vimos que você não está em uma moradia :/" />
    </div>

    <div class="buttonBox">
      <router-link to="/repNear">
        <buttonComponent
          bgc="#35FF69"
          color="#001011"
          height="100"
          width="100"
          value="Encontrar uma moradia"
        />
      </router-link>
      <router-link to="/createrep">
        <buttonComponent
          bgc="#9E76DB"
          color="#E8E8E8"
          height="100"
          width="100"
          value="Criar uma moradia"
        />
      </router-link>
       
      <router-link to="/searchRep">
        <textBodyComponent content="Já tem um código? Entre direto na sua república" />
      </router-link>
    </div>
   

    <div class="toogleBox">
      <textSubTitleComponent content="Tema Escuro:" />
      <buttonToogleComponent />
    </div>
  </boxComponentVue>
</template>

<script>
import boxComponentVue from "@/components/boxComponent.vue";
import logo1Component from "@/components/logo1Component.vue";
import textTitleComponent from "@/components/textTitleComponent.vue";
import buttonComponent from "@/components/buttonComponent.vue";
import buttonToogleComponent from "@/components/buttonToogleComponent.vue";
import textSubTitleComponent from "@/components/textSubTitleComponent.vue";
import textBodyComponent from "@/components/linkComponent.vue";

export default {
  components: {
    boxComponentVue,
    logo1Component,
    textTitleComponent,
    buttonComponent,
    buttonToogleComponent,
    textSubTitleComponent,
    textBodyComponent,
  },
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
}

.textBox {
  margin-top: 30px;
  margin-bottom: 30px;
  display: flex;
  justify-content: center;
  align-items: center;
}

.buttonBox {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  row-gap: 20px;
  margin-bottom: 30px;
}

.buttonBox button {
  height: 60px !important;
  width: 250px !important;
}

.toogleBox {
  display: flex;
  justify-content: center;
  align-items: center;
  column-gap: 10px;
}


@media (max-width: 1100px) {
  .box {
    width: 70% !important;
  }

}
</style>
