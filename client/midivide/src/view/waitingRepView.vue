<template>
  <boxComponent class="body" heights="50" widths="50">
    <div class="textBox">
      <textTitleComponent content="Aguardando uma resposta" />
      <textSubTitleComponent
        :content="`Você solicitou a entrada na moradia ${house.name}`"
      />
    </div>

    <buttonComponent
      @click="deletRequest"
      value="Cancelar Solicitação"
      bgc="#35FF69"
    />
  </boxComponent>
</template>

<script>
import boxComponent from "@/components/boxComponent.vue";
import textTitleComponent from "@/components/textTitleComponent.vue";
import textSubTitleComponent from "@/components/textSubTitleComponent.vue";
import buttonComponent from "@/components/buttonComponent.vue";

import { mapGetters } from "vuex";
import router from "@/routes";

export default {
  data() {
    return {
      house: {},
    };
  },

  computed: {
    ...mapGetters({
      token: "getToken",
    }),
  },

  created() {
    const API = require("../config");

    const axios = require("axios");
    let data = "";

    let config = {
      method: "get",
      maxBodyLength: Infinity,
      url: `${API.url}/my-request`,
      headers: {
        Authorization: this.token,
      },
      data: data,
    };

    axios
      .request(config)
      .then((response) => {
        this.house = response.data.house;
      })
      .catch((error) => {
        console.log(error);
      });
  },

  methods: {
    deletRequest() {
      const API = require("../config");

      const axios = require("axios");
      let data = JSON.stringify({
        house: "CNCN92",
      });

      let config = {
        method: "delete",
        maxBodyLength: Infinity,
        url: `${API.url}/my-request`,
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
          router.push("/norep");
        })
        .catch((error) => {
          console.log(error);
        });
    },
  },

  components: {
    boxComponent,
    textTitleComponent,
    textSubTitleComponent,
    buttonComponent,
  },
};
</script>

<style scoped>
.body {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  row-gap: 30px;
}

.textBox {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
}

@media (max-width: 500px) {
  .body {
    width: 80% !important;
  }
}
</style>
