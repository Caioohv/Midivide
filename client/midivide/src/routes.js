import { createRouter, createWebHashHistory } from "vue-router";

import login from "./view/loginView.vue";
import register from "./view/registerView.vue";
import norep from "./view/noRepView.vue";
import searchRep from "./view/searchRepWithCodeView.vue";
import verify from "./view/verifyView.vue";
import repNear from "./view/nearRepView.vue";
import createrep from "./view/createRepView.vue";
import waitingrep from "./view/waitingRepView.vue";
import main from "./view/mainView.vue"

import member from "./view/mainSubView/memberView.vue" 
import config from "./view/mainSubView/configView.vue"
import myrep from "./view/mainSubView/myRepView.vue"
import task from "./view/mainSubView/taskView.vue"
import bill from "./view/mainSubView/billView.vue"

import store from "./store";

const router = createRouter({
  history: createWebHashHistory(),
  routes: [
    {
      path: "/",
      name: "login",
      component: login,
    },
    {
      path: "/register",
      name: "register",
      component: register,
    },
    {
      path: "/norep",
      name: "norep",
      component: norep,
    },
    {
      path: "/searchRep",
      name: "searchRep",
      component: searchRep,
    },
    {
      path: "/verify",
      name: "verify",
      component: verify,
    },

    {
      path: "/repNear",
      name: "repNear",
      component: repNear,
    },

    {
      path: "/createrep",
      name: "createrep",
      component: createrep,
    },

    {
      path: "/waitingrep",
      name: "waitingrep",
      component: waitingrep,
    },

    {
      path: "/main",
      name: "main",
      component: main,
      children:[
        {
          path: '/members',
          component: member
        },
        {
          path: '/config',
          component: config
        },
        {
          path: '/myrep',
          component: myrep
        },
        {
          path: '/task',
          component: task
        },
        {
          path: '/bill',
          component: bill
        }
      ]
    },
  ],
});

router.beforeEach((to, from, next) => {
  // Verifica se a primeira rota está sendo acessada
  if (
    to.path === "/" ||
    to.path === "/register" ||
    to.path === "/verify" ||
    store.state.user.logged
  ) {
    next(); // Permite a navegação para a primeira rota
  }else{
    router.push('/');
  }
});

export default router;
