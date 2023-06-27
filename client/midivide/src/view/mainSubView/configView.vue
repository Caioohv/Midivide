<template>
  <div>
    <boxComponent class="configBody">
      <textTitleComponent content="Configurações" class="title" />

      <div class="themeBox">
        <textSubTitleComponent content="Tema:" />
        <buttonToogleComponent />
      </div>
      <div class="quitBox">
        <buttonComponent
          @click="quitHouse"
          value="Sair da moradia!"
          bgc="#DB2955"
          color="#FFF"
        />
      </div>
    </boxComponent>
  </div>
</template>

<script>
import boxComponent from "@/components/boxComponent.vue";
import buttonToogleComponent from "@/components/buttonToogleComponent.vue";
import textSubTitleComponent from "@/components/textSubTitleComponent.vue";
import buttonComponent from "@/components/buttonComponent.vue";
import textTitleComponent from "@/components/textTitleComponent.vue";

import { mapGetters } from "vuex";

export default {
  components: {
    boxComponent,
    buttonToogleComponent,
    textSubTitleComponent,
    buttonComponent,
    textTitleComponent,
  },

  computed: {
    ...mapGetters({
      token: "getToken",
    }),
  },

  methods: {
    quitHouse() {
      if (
        window.confirm(
          "Você ser removido da moradia, caso seja o criador a moradia vai ser deletada! Deseja Continuar?"
        )
      ) {
        const API = require("../../config");

        const axios = require("axios");
        let data = "";

        let config = {
          method: "delete",
          maxBodyLength: Infinity,
          url: `${API.url}/house`,
          headers: {
            Authorization: this.token,
          },
          data: data,
        };

        axios
          .request(config)
          .then((response) => {
            console.log(response);
            this.$store.commit("setHouse", null);
            this.$router.push("/norep");
          })
          .catch((error) => {
            console.log(error);
          });
      }
    },
  },
};
</script>

<style>
.configBody {
  padding: 35px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  row-gap: 30px;
}

.themeBox {
  display: flex;
  justify-content: center;
  align-items: center;
  column-gap: 8px;
}

.title {
  line-height: 10px;
}
</style>
