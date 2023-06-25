import { createStore } from "vuex";
import router from "./routes";

const store = createStore({
  state: {
    theme: "light",
    user: {
      token: "",
      logged: false,
      id: null,
      email: "",
      name: "",
      verified: null,
      house: null,
      phone: "",
      admin: false
    },
    waitingHouse: false,
    registerEmail: "",
  },

  getters: {
    getTheme(state) {
      return state.theme;
    },

    getToken(state) {
      return state.user.token;
    },

    getUser(state) {
      return state.user;
    },

    getRegisterEmail(state) {
      return state.registerEmail;
    },
  },

  mutations: {
    setThemeDark(state) {
      state.theme = "dark";
    },

    setThemeLight(state) {
      state.theme = "light";
    },

    tryLogin(state, info) {
      const API = require("./config");

      const axios = require("axios");
      let data = JSON.stringify({
        email: info.username,
        password: info.password,
      });

      let config = {
        method: "post",
        maxBodyLength: Infinity,
        url: `${API.url}/auth/login`,
        headers: {
          "Content-Type": "application/json",
        },
        data: data,
      };

      axios
        .request(config)
        .then((response) => {
          state.user.token = response.data.token;
          state.user.logged = true;
          state.waitingHouse = response.data.isWaiting;

          let config = {
            method: "get",
            maxBodyLength: Infinity,
            url: `${API.url}/user`,
            headers: {
              Authorization: state.user.token,
            },
          };

          axios
            .request(config)
            .then((response) => {
              state.user.id = response.data.id;
              state.user.email = response.data.email;
              state.user.name = response.data.name;
              state.user.verified = response.data.verified;
              state.user.house = response.data.house;
              state.user.phone = response.data.phone;
              state.user.admin = response.data.admin;

              if (!state.user.verified) {
                router.push("/verify");
              } else if (state.waitingHouse) {
                router.push("/waitingrep");
              } else if (!state.user.house) {
                router.push("/norep");
              } else {
                router.push("/main");
              }
            })
            .catch((error) => {
              console.log(error);
            });
        })
        .catch((error) => {
          console.log(error);
          window.alert("Algo deu errado!");
        });
    },

    setRegisterEmail(state, email) {
      state.registerEmail = email;
    },

    setHouse(state, house) {
      state.user.house = house;
    },
  },
});

export default store;
