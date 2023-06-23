<template>
  <boxComponentVue class="box" widths="75" heights="85">
    <logo1Component />

    <div class="textBox">
      <textTitleComponent content="Encontre sua república pelo código!" />
    </div>

    <div class="searchInput">
      <InputSearchTextComponent
        @searhIconActive="searchCode"
        width="100"
        height="60"
      />
    </div>

    <republicBoxComponent
      @showHouseDetailsActive="showDetails = true"
      v-if="codeIsValid"
      :title="title"
      :addres="addres"
    />

    <entryRequest
      @closeDetails="showDetails = false"
      :code="showDetailsCode"
      v-if="showDetails"
    />

    <div class="toogleBox">
      <textSubTitleComponent content="Tema Escuro:" />
      <buttonToogleComponent />
    </div>
  </boxComponentVue>
</template>

<script>
import boxComponentVue from "@/components/boxComponent.vue";
import logo1Component from "@/components/logo1Component.vue";
import textTitleComponent from "@/components/textTitleComponent.vue";
import buttonToogleComponent from "@/components/buttonToogleComponent.vue";
import textSubTitleComponent from "@/components/textSubTitleComponent.vue";
import InputSearchTextComponent from "@/components/InputSearchTextComponent.vue";
import republicBoxComponent from "@/components/republicBoxComponent.vue";
import entryRequest from "@/components/entryRequest.vue";

import { mapGetters } from "vuex";

export default {
  components: {
    boxComponentVue,
    logo1Component,
    textTitleComponent,
    buttonToogleComponent,
    textSubTitleComponent,
    InputSearchTextComponent,
    republicBoxComponent,
    entryRequest,
  },

  data() {
    return {
      codeIsValid: false,
      showDetails: false,
      showDetailsCode: "",
      title: "",
      addres: "",
    };
  },

  computed: {
    ...mapGetters({
      token: "getToken",
      user: "getUser",
    }),
  },

  methods: {
    searchCode() {
      const API = require("../config");

      const axios = require("axios");
      let data = "";

      this.showDetailsCode =
        document.querySelector(".searchInput").children[0].children[0].value;

      let config = {
        method: "get",
        maxBodyLength: Infinity,
        url: `${API.url}/houses/${
          document.querySelector(".searchInput").children[0].children[0].value
        }`,
        headers: {
          Authorization: this.token,
        },
        data: data,
      };

      axios
        .request(config)
        .then((response) => {
          this.title = response.data.name;
          this.addres = `${response.data.street}, ${response.data.number}, ${response.data.city}`;
          this.codeIsValid = true;
        })
        .catch((error) => {
          console.log(error);
        });
    },
  },
};
</script>

<style scoped>
.box {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 20px;
  text-align: center;
  row-gap: 10px;
}

.searchInput {
  width: 30%;
}

.textBox {
  margin-top: 30px;
  margin-bottom: 30px;
  display: flex;
  justify-content: center;
  align-items: center;
}

.buttonBox {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  row-gap: 20px;
  margin-bottom: 30px;
}

.buttonBox button {
  height: 60px !important;
}

.toogleBox {
  display: flex;
  justify-content: center;
  align-items: center;
  column-gap: 10px;
}

@media (max-width: 1100px) {
  .box {
    width: 70% !important;
  }
  .searchInput {
    width: 70% !important;
  }
  .textTitle {
    padding: 0px;
  }
  .textBox {
    margin: 10px;
  }
}
@media (max-width: 500px) {
  .box {
    width: 80% !important;
  }
  .searchInput {
    width: 100% !important;
  }
}
</style>
