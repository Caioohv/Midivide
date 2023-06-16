import { createStore } from "vuex";

const store = createStore({
    state: {
        theme: 'dark',
        user:{
            token: ''
        }
    },

    getters: {

        getTheme(state){
            return state.theme;
        },

        getToken(state){
            return state.user.token;
        }

    },

    mutations: {

        setThemeDark(state){
            state.theme = "dark";
        },

        setThemeLight(state){
            state.theme = "light";
        },

        tryLogin(info){

            const axios = require('axios');
            let data = JSON.stringify({
              "email": info.username,
              "password": info.password
            });
            
            let config = {
              method: 'post',
              maxBodyLength: Infinity,
              url: 'http://localhost:8000/auth/login',
              headers: { 
                'x-registration-target': 'caio.vieira@gmail.com', 
                'Content-Type': 'application/json',
              },
              data : data
            };
            
            axios.request(config)
            .then((response) => {
              console.log(JSON.stringify(response.data));
            })
            .catch((error) => {
              console.log(error);
            }); 

        }

    },

})

export default store;