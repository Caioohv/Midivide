<template>
  <boxComponent class="body" widths="100" heights="10">
    <logo1Component class="logo"/>
    <linksBoxComponent class="links">
      <headreLinkComponent content="Inico" target="/main" />
      <textSubTitleComponent content="|" />
      <headreLinkComponent content="Avisos" target="/notice" />
      <textSubTitleComponent content="|" />
      <headreLinkComponent content="Tarefas" target="/task" />
      <textSubTitleComponent content="|" />
      <headreLinkComponent content="Contas" target="/bill" />
      <textSubTitleComponent content="|" />
      <headreLinkComponent content="Membros" target="/members" />
      <textSubTitleComponent content="|" />
      <headreLinkComponent content="Minha Moradia" target="/myrep" />
    </linksBoxComponent>

    <linksBoxComponent class="userBox">
      <userIconComponent />
      <div class="userInfo">
        <textSubTitleComponent :content="user.name" />
        <textSubTitleComponent class="houseName" :content="user.house.name" />
      </div>
        <configIconComponent @click="this.$router.push('/config')"/>
    </linksBoxComponent>

    <i class="fas fa-bars menu" @click="showMobileMenu = !showMobileMenu"></i>

    <mobileMenuComponent @closeMobileMenu="showMobileMenu = !showMobileMenu" class="mobileMenu" v-if="showMobileMenu"/>

  </boxComponent>
</template>

<script>
import boxComponent from "../boxComponent.vue";
import logo1Component from "../logo1Component.vue";
import linksBoxComponent from "./linksBoxComponent.vue";
import headreLinkComponent from "./headerLinkComponent.vue";
import textSubTitleComponent from "../textSubTitleComponent.vue";
import userIconComponent from "./userIconComponent.vue";
import configIconComponent from "./configIconComponent.vue";
import mobileMenuComponent from './mobileMenuComponent.vue';

import { mapGetters } from "vuex";


export default {
  components: {
    boxComponent,
    logo1Component,
    linksBoxComponent,
    headreLinkComponent,
    textSubTitleComponent,
    userIconComponent,
    configIconComponent,
    mobileMenuComponent
  },


  data(){
    return{
      showMobileMenu: false
    }
  },

  computed: {
    ...mapGetters({
      user: "getUser",
      token: "getToken",
    }),
  },

};
</script>

<style scoped>
.body {
  top: 0;
  left: 0;
  position: absolute;
  min-width: 100% !important;
  border-radius: 0px;
  padding: 10px 0px 10px 0px;
  display: flex;
  align-items: center;
  justify-content: center;
  column-gap: 80px;
}

.userBox {
  padding: 2px;
}

.logo{
  max-width: 60px;
}

.userInfo {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: left;
  min-width: fit-content;
  max-width: 120px;
}

.userInfo > :first-child{
  display: inline-block;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    max-width: 120px;
    font-size: 15px;
}

.houseName {
  margin-top: -8px;
  font-size: 10px;
}

.menu{
  display: none;
}

@media (max-width: 500px) {
  .links{
    display: none;
  }

  .body{
    column-gap: 20px;
  }

  .menu{
    display: contents;
    font-size: 35px;
    color: #B7B7B7;
    cursor: pointer;
  }

}

</style>
