<template>
  <div class="noticeBody">
    <boxComponent class="leftBox" v-if="!dash && user.admin">
      <textTitleComponent content="Criar Aviso" class="title" />

      <InputTextComponent placeholder="Aviso" class="contentInput" />

      <buttonComponent
        @click="registerNotice"
        value="Cadastrar"
        bgc="#9E76DB"
        color="#FFF"
      />
    </boxComponent>

    <boxComponent class="rightBox" v-if="notices.length > 0">
      <textTitleComponent content="Avisos" class="title" />
      <div class="noticeList">
        <div class="notice" v-for="notice in notices" :key="notice.id">
          <textSubTitleComponent class="noticeInfo" :content="notice.content" />
          <textSubTitleComponent
            class="noticeInfo"
            :content="`Avsio cirado em: ${formatData(notice.createdAt)}`"
          />
          <div class="buttonBox">
            <buttonComponent
              v-if="user.admin"
              @click="deleteNotice(notice.id)"
              value="Deletar"
              bgc="#DB2955"
              height="100"
              color="#FFF"
            />
          </div>
        </div>
      </div>
    </boxComponent>

    <textTitleComponent v-else-if="!dash" content="Nenhum avsido por aqui!" class="title" />

  </div>
</template>

<script>
import boxComponent from "@/components/boxComponent.vue";
import textTitleComponent from "@/components/textTitleComponent.vue";
import InputTextComponent from "@/components/InputTextComponent.vue";
import buttonComponent from "@/components/buttonComponent.vue";
import textSubTitleComponent from "@/components/textSubTitleComponent.vue";

import { mapGetters } from "vuex";

export default {
  components: {
    boxComponent,
    textTitleComponent,
    InputTextComponent,
    buttonComponent,
    textSubTitleComponent,
  },

  props: {
    dash: Boolean,
  },

  data() {
    return {
      notices: [],
    };
  },

  computed: {
    ...mapGetters({
      token: "getToken",
      user: "getUser",
    }),
  },

  beforeMount() {
    this.bringNotices();
  },

  methods: {
    registerNotice() {

      var content = document.querySelector(".contentInput").childNodes[0].childNodes[0].value;

      const API = require("../../config");

      const axios = require("axios");
      let data = JSON.stringify({
        content: content,
      });

      let config = {
        method: "post",
        maxBodyLength: Infinity,
        url: `${API.url}/notices`,
        headers: {
          Authorization: this.token,
          "Content-Type": "application/json",
        },
        data: data,
      };

      axios
        .request(config)
        .then((response) => {
          console.log(JSON.stringify(response.data));
          this.bringNotices();
        })
        .catch((error) => {
          console.log(error);
        });
    },

    formatData(dataString) {
      const data = new Date(dataString);

      const dia = String(data.getDate()).padStart(2, "0");
      const mes = String(data.getMonth() + 1).padStart(2, "0");
      const ano = data.getFullYear();

      return `${dia}/${mes}/${ano}`;
    },

    bringNotices() {
      const API = require("../../config");

      const axios = require("axios");
      let data = "";

      let config = {
        method: "get",
        maxBodyLength: Infinity,
        url: `${API.url}/notices`,
        headers: {
          Authorization: this.token,
        },
        data: data,
      };

      axios
        .request(config)
        .then((response) => {
          console.log(JSON.stringify(response.data));
          this.notices = response.data;
        })
        .catch((error) => {
          console.log(error);
        });
    },

    deleteNotice(id) {
      const API = require("../../config");
      const axios = require("axios");
      let data = JSON.stringify({
        id: id,
      });

      let config = {
        method: "delete",
        maxBodyLength: Infinity,
        url: `${API.url}/notices`,
        headers: {
          Authorization: this.token,
          "Content-Type": "application/json",
        },
        data: data,
      };

      axios
        .request(config)
        .then((response) => {
          console.log(JSON.stringify(response.data));
          this.bringNotices();
        })
        .catch((error) => {
          console.log(error);
        });
    },
  },
};
</script>

<style scoped>
.noticeBody {
  display: flex;
  column-gap: 15px;
  margin-top: 60px;
  justify-content: center;
  align-items: center;
}

.leftBox,
.rightBox {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 20px;
  row-gap: 15px;
  height: fit-content;
}

.title {
  line-height: 20px;
}

.noticeList {
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  overflow-y: auto;
  overflow-x: hidden;
  row-gap: 15px;
  max-height: 125px;
  padding: 5px;
}

.noticeInfo {
  font-size: 15px;
  line-height: 15px;
}

.notice {
  display: flex;
  text-align: center;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border-radius: 20px;
  border: #9e76db 2px solid;
  padding: 12px 15px 12px 15px;
  row-gap: 5px;
}

.buttonBox {
  margin-top: 10px;
}

.noticeList::-webkit-scrollbar {
  width: 8px;
  background-color: transparent;
  flex: 0;
}

.noticeList::-webkit-scrollbar-track {
  background-color: transparent;
}

.noticeList::-webkit-scrollbar-thumb {
  background-color: #888;
  border-radius: 4px;
}

.noticeList::-webkit-scrollbar-thumb:hover {
  background-color: #555;
}

@media (max-width: 500px){
  .noticeBody{
    flex-direction: column;
  }

  .rightBox, .leftBox{
    width: 97%;
  }
}
</style>
