<template>
  <div class="body">
    <headerComponent />

    <div class="sections">
      <boxComponent class="box-component" widths="40" heights="85">
        <TextTitleComponent content="Cadastrar Conta" size="24" color="#333333" height="2"/>
        <div class="row margin-top-20">
            <div class="col-md-6">
                <textSubTitleComponent content="Nome da Conta" size="14" color="#333333" height="2"/>
                <InputTextComponent placeholder="Nome da Conta" class="nameBill margin-top-10" bgc="rgba(0, 0, 0, 0)" border="1px solid #a9a1a1" borderRadius="10"/>
            </div>
            <div class="col-md-6">
                <textSubTitleComponent content="Valor" size="14" color="#333333" height="2"/>
                <InputTextComponent placeholder="Valor da Conta" class="valueBill margin-top-10"  bgc="rgba(0, 0, 0, 0)" border="1px solid #a9a1a1" borderRadius="10"/>
            </div>
        </div>
        <div class="row margin-top-10">
            <div class="col-md-6">
                <textSubTitleComponent content="Dividir com" size="14" color="#333333" height="2" />
                <div class="row margin-top-10">
                  <inputSelect />
                </div>
            </div>
            <div class="col-md-6">
                <textSubTitleComponent content="Descrição da Conta" size="14" color="#333333" height="2"/>
                <textAreaComp class="margin-top-10"/>
            </div>
        </div>

        <buttonComponent value="Cadastrar"
          @click="nameFunction($event)"
          bgc="#F4F7F5"
          border="1px solid #a9a1a1"
          id="1" 
          class="margin-top-20"
        />
        
      </boxComponent>
    </div>
  </div>
</template>

<script>
import boxComponent from "@/components/boxComponent.vue";
import headerComponent from "@/components/headerComponent.vue";
import TextTitleComponent from "@/components/textTitleComponent.vue";
import InputTextComponent from "@/components/InputTextComponent.vue";
import textSubTitleComponent from "@/components/textSubTitleComponent.vue";
import inputSelect from "@/components/inputSelectMultipleComponent.vue";
import textAreaComp from "@/components/textAreaComponent.vue";
import buttonComponent from "@/components/buttonComponent.vue";

export default {
  components: {
    boxComponent,
    headerComponent,
    TextTitleComponent,
    InputTextComponent,
    textSubTitleComponent,
    inputSelect,
    textAreaComp,
    buttonComponent
  }
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

.row{
    display: flex;
}

.col-md-6{
    width: 50%;
}

.margin-top-20 {
    margin-top: 20px;
}

.margin-top-10 {
    margin-top: 10px;
}

.valueBill{
    margin-left: 20px;  
}

@media (max-width: 700px) {
  .box-component{
    width: 80% !important;
  }
}

@media (max-width: 700px) {
  .box-component{
    width: 90% !important;
    padding: 5px !important;
  }
}
</style>