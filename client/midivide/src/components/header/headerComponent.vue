<template>
  <boxComponent class="body" widths="100" heights="10">
    <logo1Component />
    <linksBoxComponent>
      <headreLinkComponent content="Inico" target="/main" />
      <textSubTitleComponent content="|" />
      <headreLinkComponent content="Avisos" target="/main" />
      <textSubTitleComponent content="|" />
      <headreLinkComponent content="Tarefas" target="/main" />
      <textSubTitleComponent content="|" />
      <headreLinkComponent content="Contas" target="/main" />
      <textSubTitleComponent content="|" />
      <headreLinkComponent content="Eventos" target="/main" />
      <textSubTitleComponent content="|" />
      <headreLinkComponent content="Membros" target="/members" />
      <textSubTitleComponent content="|" />
      <headreLinkComponent content="Minha Moradia" target="/main" />
    </linksBoxComponent>

    <linksBoxComponent class="userBox">
      <userIconComponent />
      <div class="userInfo">
        <textSubTitleComponent :content="user.name" />
        <textSubTitleComponent class="houseName" :content="houseName" />
      </div>
      <configIconComponent />
    </linksBoxComponent>
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
  },

  data() {
    return {
      houseName: "",
    };
  },

  computed: {
    ...mapGetters({
      user: "getUser",
      token: "getToken",
    }),
  },

  beforeMount(){
      const API = require("../../config");

      const axios = require("axios");
      let data = "";

      let config = {
        method: "get",
        maxBodyLength: Infinity,
        url: `${API.url}/houses/${this.user.house}`,
        headers: {
          Authorization: this.token,
        },
        data: data,
      };

      axios
        .request(config)
        .then((response) => {
            this.houseName = response.data.name;
        })
        .catch((error) => {
          console.log(error);
        });
  }

};
</script>

<style scoped>
.body {
  top: 0;
  left: 0;
  position: absolute;
  min-width: 100% !important;
  border-radius: 0px;
  padding: 10px 20px 10px 20px;
  display: flex;
  align-items: center;
  justify-content: center;
  column-gap: 80px;
}

.userBox {
  padding: 2px;
}

.userInfo {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: left;
}

.houseName {
  margin-top: -8px;
  font-size: 10px;
}
</style>
