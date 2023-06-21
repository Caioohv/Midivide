import { createStore } from "vuex";
import router from "./routes";

const store = createStore({
    state: {
        theme: 'dark',
        user:{
            token: '',
            logged: true,
        },
        registerEmail: '',
    },

    getters: {

        getTheme(state){
            return state.theme;
        },

        getToken(state){
            return state.user.token;
        },

        getRegisterEmail(state){
          return state.registerEmail;
        }

    },

    mutations: {

        setThemeDark(state){
            state.theme = "dark";
        },

        setThemeLight(state){
            state.theme = "light";
        },

        tryLogin(state, info){

            const API = require('./config');

            const axios = require('axios');
            let data = JSON.stringify({
              "email": info.username,
              "password": info.password
            });
            
            let config = {
              method: 'post',
              maxBodyLength: Infinity,
              url: `${API.url}/auth/login`,
              headers: { 
                'Content-Type': 'application/json',
              },
              data : data
            };
            
            axios.request(config)
            .then((response) => {
              state.user.token = response.data.token
              state.user.logged = true;
              router.push('/norep');
            })
            .catch((error) => {
              console.log(error);
            }); 

        },

        setRegisterEmail(state, email){

          state.registerEmail = email;

        }

    },

})

export default store;