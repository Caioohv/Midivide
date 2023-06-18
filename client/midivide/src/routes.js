import {createRouter, createWebHashHistory} from 'vue-router'

import login from './view/loginView.vue'
import register from './view/registerView.vue'
import norep from './view/noRepView.vue'
import searchRep from './view/searchRepWithCodeView.vue'
import verify from './view/verifyView.vue'
import store from './store'

const router = createRouter({
    history: createWebHashHistory(),
    routes:[
        {
            path: '/',
            name: 'login',
            component: login,
        },
        {
            path: '/register',
            name: 'register',
            component: register
        },
        {
            path: '/norep',
            name: 'norep',
            component: norep
        },
        {
<<<<<<< HEAD
            path: '/searchRep',
            name: 'searchRep',
            component: searchRep
=======
          path: '/verify',
          name: 'verify',
          component: verify
>>>>>>> master
        }
    ]
})

router.beforeEach((to, from, next) => {
    // Verifica se a primeira rota está sendo acessada
    if (to.path === '/') {
      next() // Permite a navegação para a primeira rota
    } else {
      // Verifica se a variável do Vuex é verdadeira
      if (store.state.user.logged || to.path === '/register' || to.path === '/verify') {
        next() // Permite a navegação para a rota atual
      } else {
        next('/') // Redireciona para a primeira rota
      }
    }
  })
 

export default router;