<template>
  <div class="body">
    <headerComponent />

    <div class="sections">
      <boxComponent class="box-component" widths="40" heights="85">
        <TextTitleComponent content="Minha República" size="24" color="#333333" height="2"/>
        <textBodyComponent content="Código: HEB-01" />
        <div class="form">
            <form>
                <textSubTitleComponent content="Nome da República" size="15" color="#333333" height="initial"/>
                <textInputComponent placeholder="Nome da República"/> 
                <textSubTitleComponent content="Rua" size="15" color="#333333" height="initial"/>
                <textInputComponent placeholder="Nome da Rua" />
                <textSubTitleComponent content="Bairro" size="15" color="#333333" height="initial"/>
                <textInputComponent placeholder="Nome do Bairro" />
                <textSubTitleComponent content="Cidade" size="15" color="#333333" height="initial"/>
                <textInputComponent placeholder="Nome da Cidade" />
                <textSubTitleComponent content="Número" size="15" color="#333333" height="initial"/>
                <textInputComponent placeholder="Número da Casa" />
                <textSubTitleComponent content="Vagas" size="15" color="#333333" height="initial"/>
                <textInputComponent placeholder="Número de Vagas" />
                <textSubTitleComponent content="Ofertar vagas publicamente?" size="18" color="#333333" height="initial" id="largerText"/>
                <inputSelectBinary/>

            </form>
        </div>
        <div class="register-new">
          <buttonComponent
            value="Editar"
            @click="nameFunction($event)"
            bgc="#9E76DB"
            border="1px solid #a9a1a1"
            color="#fff"
            id="1"
          />
        </div>
        
      </boxComponent>
    </div>
  </div>
</template>

<script>
import boxComponent from "@/components/boxComponent.vue";
import headerComponent from "@/components/headerComponent.vue";
import TextTitleComponent from "@/components/textTitleComponent.vue";
import textSubTitleComponent from "@/components/textSubTitleComponent.vue";
import buttonComponent from "@/components/buttonComponent.vue";
import textBodyComponent from "@/components/linkComponent.vue";
import textInputComponent from "@/components/InputTextComponent.vue";
import inputSelectBinary from "@/components/inputSelectBinaryComponent.vue";

export default {
  components: {
    boxComponent,   
    headerComponent,
    TextTitleComponent,
    buttonComponent,
    textBodyComponent,
    textInputComponent,
    inputSelectBinary,
    textSubTitleComponent,
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
  display: flex;
  flex-direction: column;
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

.link-component{
    margin-top: 10px;
    margin-bottom: 10px;
}

.form form{
    display: flex;
    flex-direction: column;
    align-items: center;
}

form div{
  margin-bottom: 15px;
  width: 60%;
}


@media (max-width: 370px) {
  #largerText{
    font-size: 8px;
  }
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