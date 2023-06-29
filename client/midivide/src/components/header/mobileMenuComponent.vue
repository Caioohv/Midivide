<template>
  <boxComponent class="menuBody" @click="$emit('closeMobileMenu')">
    <headreLinkComponent content="Inico" target="/main" />
    <headreLinkComponent content="Avisos" target="/main" />
    <headreLinkComponent content="Tarefas" target="/task" />
    <headreLinkComponent content="Contas" target="/bill" />
    <headreLinkComponent content="Eventos" target="/main" />
    <headreLinkComponent content="Membros" target="/members" />
    <headreLinkComponent content="Minha Moradia" target="/myrep" />
  </boxComponent>
</template>

<script>
import boxComponent from "../boxComponent.vue";
import headreLinkComponent from "./headerLinkComponent.vue";

export default {
  components: {
    boxComponent,
    headreLinkComponent
  },
};
</script>

<style scoped>
.menuBody {
  display: flex;
  flex-direction: column;
  text-align: left;
  position: absolute;
  right: 0;
  margin-top: 340px;
  padding: 30px;
  row-gap: 12px;
  width: fit-content;
}
</style>
