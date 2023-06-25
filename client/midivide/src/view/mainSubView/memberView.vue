<template>
  <div class="box">
    <boxComponent
      class="leftBox"
      widths="40"
      v-if="atualUser.admin && requests.length > 0"
    >
      <textTitleComponent content="Solicitações" />

      <div class="requestList">
        <div class="requestBody" v-for="request in requests" :key="request.id">
          <textSubTitleComponent
            :content="`Nome: ${request.request.requester.name}`"
          />
          <textSubTitleComponent
            :content="`Tel: ${request.request.requester.phone}`"
          />
          <textSubTitleComponent
            :content="`${request.request.requester.email}`"
          />
          <div class="buttonBox">
            <buttonComponent
            @click="requestAnswer('decline', request.request.id)"
              value="Excluir"
              bgc="#DB2955"
              height="10"
              color="#FFF"
            />
            <buttonComponent
            @click="requestAnswer('accept', request.request.id)"
              value="Aceitar"
              bgc="#35FF69"
              height="10"
              color="#FFF"
            />
          </div>
        </div>
      </div>
    </boxComponent>
    <boxComponent class="rightBox">
      <textTitleComponent content="Todos Membros" />
      <div class="userList">
        <div class="users" v-for="user in users" :key="user.id">
          <i
            class="fas fa-remove"
            v-if="atualUser.admin && atualUser.id != user.id"
            @click="removeMember(user.id)"
          ></i>
          <i
            class="fas fa-remove atualMember"
            v-else
          ></i>
          <textSubTitleComponent :content="user.name" class="userName" />
          <textSubTitleComponent content="|" />
          <textSubTitleComponent :content="user.phone" />
        </div>
      </div>
    </boxComponent>
  </div>
</template>

<script>
import boxComponent from "../../components/boxComponent.vue";
import textSubTitleComponent from "../../components/textSubTitleComponent.vue";
import textTitleComponent from "../../components/textTitleComponent.vue";
import buttonComponent from "@/components/buttonComponent.vue";

import { mapGetters } from "vuex";


export default {
  components: {
    boxComponent,
    textTitleComponent,
    textSubTitleComponent,
    buttonComponent,
  },

  data() {
    return {
      users: [],
      requests: [],
    };
  },

  computed: {
    ...mapGetters({
      token: "getToken",
      atualUser: "getUser",
    }),
  },

  methods: {
    removeMember(id) {
      const API = require("../../config");

      const axios = require("axios");
      let data = "";

      let config = {
        method: "delete",
        maxBodyLength: Infinity,
        url: `${API.url}/house/members/${id}`,
        headers: {
          Authorization: this.token,
        },
        data: data,
      };

      axios
        .request(config)
        .then((response) => {
          console.log(JSON.stringify(response.data));
          window.alert("Usuário Removido");
          this.$router.replace({ path: '/main' });
        })
        .catch((error) => {
          console.log(error);
        });
    },

    requestAnswer(awnser, id) {
    const API = require("../../config");

      const axios = require("axios");
      let data = "";

      let config = {
        method: "put",
        maxBodyLength: Infinity,
        url: `${API.url}/house/request/${id}/${awnser}`,
        headers: {
          Authorization: this.token,
        },
        data: data,
      };

      axios
        .request(config)
        .then((response) => {
          console.log(JSON.stringify(response.data));
          if(awnser == "accept"){
            window.alert("Pedido aceito!");
          }else{
            window.alert("Pedido negado!");
          }
          this.$router.replace({ path: '/main' });
        })
        .catch((error) => {
          console.log(error);
        });
    },
  },

  beforeMount() {
    const API = require("../../config");

    const axios = require("axios");
    let data = "";

    let config;

    config = {
      method: "get",
      maxBodyLength: Infinity,
      url: `${API.url}/house/members`,
      headers: {
        Authorization: this.token,
      },
      data: data,
    };

    axios
      .request(config)
      .then((response) => {
        this.users = response.data;
      })
      .catch((error) => {
        console.log(error);
      });

    config = {
      method: "get",
      maxBodyLength: Infinity,
      url: `${API.url}/house/request`,
      headers: {
        Authorization: this.token,
      },
      data: data,
    };

    axios
      .request(config)
      .then((response) => {
        this.requests = response.data;
      })
      .catch((error) => {
        console.log(error);
      });
  },
};
</script>

<style scoped>
.box {
  display: flex;
  column-gap: 10px;
}

.leftBox,
.rightBox {
  padding: 20px;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  text-align: center;
  height: fit-content;
}

.requestList {
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  overflow-y: auto;
  overflow-x: hidden;
  text-align: left;
  row-gap: 15px;
  max-height: 200px;
}

.requestBody {
  display: flex;
  flex-direction: column;
  border-radius: 20px;
  border: #9e76db 2px solid;
  padding: 10px;
  row-gap: 5px;
}

.buttonBox {
  display: flex;
  column-gap: 8px;
}
.userList {
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  overflow-y: auto;
  overflow-x: hidden;
  row-gap: 10px;
  max-height: 300px;
}

.userList::-webkit-scrollbar,
.requestList::-webkit-scrollbar {
  width: 8px;
  background-color: transparent;
  flex: 0;
  position: absolute;
}

.userList::-webkit-scrollbar-track,
.requestList::-webkit-scrollbar-track {
  background-color: transparent;
}

.userList::-webkit-scrollbar-thumb,
.requestList::-webkit-scrollbar-thumb {
  background-color: #888;
  border-radius: 4px;
}

.userList::-webkit-scrollbar-thumb:hover,
.requestList::-webkit-scrollbar-thumb:hover {
  background-color: #555;
}

.users {
  display: flex;
  column-gap: 30px;
  justify-content: center;
  align-items: center;
  text-align: center;
}

.fas {
  color: #db2955;
  cursor: pointer;
  margin-right: -25px;
}

.userName {
  min-width: 180px;
  max-width: 180px;
}

.atualMember{
    color: grey !important;
    cursor: auto;
}
</style>
