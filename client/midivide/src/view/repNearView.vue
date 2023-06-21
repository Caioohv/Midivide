<template>
  <boxComponentVue class="box" widths="75" heights="85">
    <div class="textBox">
      <textTitleComponent content="Essas são as repúblicas próximas à você!" />
    </div>

    <div class="searchInput">
      <InputSearchTextComponent  width='100' height='60'/>
    </div>

    <div class="republics">
        <republicBoxComponent title="Republica DNA" addres="Av. Henrrique Givisiez, 312, Givisiez"/>
        <republicBoxComponent title="Republica DNA" addres="Av. Henrrique Givisiez, 312, Givisiez"/>
        <republicBoxComponent title="Republica DNA" addres="Av. Henrrique Givisiez, 312, Givisiez"/>
        <republicBoxComponent title="Republica DNA" addres="Av. Henrrique Givisiez, 312, Givisiez"/>
        <republicBoxComponent title="Republica DNA" addres="Av. Henrrique Givisiez, 312, Givisiez"/>
        <republicBoxComponent title="Republica DNA" addres="Av. Henrrique Givisiez, 312, Givisiez"/>
        <republicBoxComponent title="Republica DNA" addres="Av. Henrrique Givisiez, 312, Givisiez"/>
    </div>
    
  </boxComponentVue>
</template>

<script>
import boxComponentVue from "@/components/boxComponent.vue";
import textTitleComponent from "@/components/textTitleComponent.vue";
import InputSearchTextComponent from "@/components/InputSearchTextComponent.vue";
import republicBoxComponent from "@/components/republicBoxComponent.vue";

export default {
  components: {
    boxComponentVue,
    textTitleComponent,
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

.body {
  margin-bottom: 10px;
  max-width: 70% !important;

}

.searchInput {
  width: 30%;
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
  /* width: 100%; */
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
  .searchInput {
    width: 70% !important;
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
