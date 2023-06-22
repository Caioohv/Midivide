import { createStore } from "vuex";
import router from "./routes";

const store = createStore({
  state: {
    theme: "dark",
    user: {
      token: "",
      logged: true,
      id: null,
      email: "",
      name: "",
      verified: null,
      house: null
    },
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
    
              state.user.id = response.data.id
              state.user.email = response.data.email
              state.user.name = response.data.name
              state.user.verified = response.data.verified
              state.user.house = response.data.house;
    
              if(response.data.verified == 0){
                router.push('/verify')
              }else if(response.data.house == null){
                router.push('/norep')
              }else{
                router.push('/')
              }
            })
            .catch((error) => {
              console.log(error);
            });
        })
        .catch((error) => {
          console.log(error);
        });
    },

    setRegisterEmail(state, email) {
      state.registerEmail = email;
    },

    setHouse(state, house){
      state.user.house = house
    }

  },
});

export default store;
