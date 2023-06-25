<template>
  <div class="body">
    <headerComponent />

    <div class="sections">
      <boxComponent class="box-component" widths="40" heights="85">
        <TextTitleComponent content="Todos os eventos" size="24" color="#333333" height="2"/>
        <checkBoxEventsWithDataComponent keyCheckbox="1" content="Rockzinho" dataEvent="20/08/2023"></checkBoxEventsWithDataComponent>
        <checkBoxEventsWithDataComponent keyCheckbox="1" content="Rockzinho" dataEvent="20/08/2023"></checkBoxEventsWithDataComponent>
        <checkBoxEventsWithDataComponent keyCheckbox="1" content="Rockzinho" dataEvent="20/08/2023"></checkBoxEventsWithDataComponent>
        <checkBoxEventsWithDataComponent keyCheckbox="1" content="Rockzinho" dataEvent="20/08/2023"></checkBoxEventsWithDataComponent>
        <checkBoxEventsWithDataComponent keyCheckbox="1" content="Rockzinho" dataEvent="20/08/2023"></checkBoxEventsWithDataComponent>
        <checkBoxEventsWithDataComponent keyCheckbox="1" content="Rockzinho" dataEvent="20/08/2023"></checkBoxEventsWithDataComponent>
        <checkBoxEventsWithDataComponent keyCheckbox="1" content="Rockzinho" dataEvent="20/08/2023"></checkBoxEventsWithDataComponent>
        <checkBoxEventsWithDataComponent keyCheckbox="1" content="Rockzinho" dataEvent="20/08/2023"></checkBoxEventsWithDataComponent>
        <checkBoxEventsWithDataComponent keyCheckbox="1" content="Rockzinho" dataEvent="20/08/2023"></checkBoxEventsWithDataComponent>
        <checkBoxEventsWithDataComponent keyCheckbox="1" content="Rockzinho" dataEvent="20/08/2023"></checkBoxEventsWithDataComponent>
        <checkBoxEventsWithDataComponent keyCheckbox="1" content="Rockzinho" dataEvent="20/08/2023"></checkBoxEventsWithDataComponent>
        <checkBoxEventsWithDataComponent keyCheckbox="1" content="Rockzinho" dataEvent="20/08/2023"></checkBoxEventsWithDataComponent>
      </boxComponent>
    </div>
  </div>
</template>

<script>
import boxComponent from "@/components/boxComponent.vue";
import headerComponent from "@/components/headerComponent.vue";
import TextTitleComponent from "@/components/textTitleComponent.vue";
import checkBoxEventsWithDataComponent from "@/components/checkBoxEventsWithDataComponent.vue";

export default {
  components: {
    boxComponent,
    headerComponent,
    TextTitleComponent,
    checkBoxEventsWithDataComponent
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
  height: 80%
}

.box-component{
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