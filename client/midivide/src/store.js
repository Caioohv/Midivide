import { createStore } from "vuex";

const store = createStore({
    state: {
        theme: 'dark',
    },

    getters: {

        getTheme(state){
            return state.theme;
        }

    },

    mutations: {

        setThemeDark(state){
            state.theme = "dark";
        },

        setThemeLight(state){
            state.theme = "light";
        }

    },

})

export default store;