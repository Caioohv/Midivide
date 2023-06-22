<template>
  <boxComponentVue class="box" widths="75" heights="85">
    <logo1Component />

    <div class="textBox">
      <textTitleComponent content="Encontre sua república pelo código!" />
    </div>

    <div class="searchInput">
      <InputSearchTextComponent  width='100' height='60'/>
    </div>

    <republicBoxComponent title="Republica DNA" addres="Av. Henrrique Givisiez, 312, Givisiez"/>
    
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
import buttonToogleComponent from "@/components/buttonToogleComponent.vue";
import textSubTitleComponent from "@/components/textSubTitleComponent.vue";
import InputSearchTextComponent from "@/components/InputSearchTextComponent.vue";
import republicBoxComponent from "@/components/republicBoxComponent.vue";

export default {
  components: {
    boxComponentVue,
    logo1Component,
    textTitleComponent,
    buttonToogleComponent,
    textSubTitleComponent,
    InputSearchTextComponent,
    republicBoxComponent,
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
  row-gap: 10px;
}

.searchInput {
  width: 30%;
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
  .searchInput {
    width: 70% !important;
  }
  .textTitle {
    padding: 0px;
  }
  .textBox {
    margin: 10px;
  }
}
@media (max-width: 500px) {
  .box {
    width: 90% !important;
  }
  .searchInput {
    width: 100% !important;
  }
}
</style>
