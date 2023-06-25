<template>
  <div class="body">
    <headerComponent />

    <div class="sections">
      <boxComponent class="box-component" widths="40" heights="85">
        <TextTitleComponent content="Todos as contas" size="24" color="#333333" height="2"/>
        <div class="register-new">
          <buttonComponent
            value="Cadastrar"
            @click="nameFunction($event)"
            bgc="#F4F7F5"
            border="1px solid #a9a1a1;"
            id="1"
          />
        </div>
        <div class="events">
          <checkBoxEventsWithDataComponent keyCheckbox="1" content="Supermercado Semanal" dataEvent="R$33,50"></checkBoxEventsWithDataComponent>
          <checkBoxEventsWithDataComponent keyCheckbox="2" content="Bebida pro evento" dataEvent="R$42,75"></checkBoxEventsWithDataComponent>
        </div>
        
      </boxComponent>
    </div>
  </div>
</template>

<script>
import boxComponent from "@/components/boxComponent.vue";
import headerComponent from "@/components/headerComponent.vue";
import TextTitleComponent from "@/components/textTitleComponent.vue";
import checkBoxEventsWithDataComponent from "@/components/checkBoxEventsWithDataComponent.vue";
import buttonComponent from "@/components/buttonComponent.vue";

export default {
  components: {
    boxComponent,   
    headerComponent,
    TextTitleComponent,
    checkBoxEventsWithDataComponent,
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

.register-new {
  margin-top: 20px;
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