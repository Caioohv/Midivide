import {createRouter, createWebHashHistory} from 'vue-router'

import login from './view/loginView.vue'
import register from './view/registerView.vue'

const router = createRouter({
    history: createWebHashHistory(),
    routes:[
        {
            path: '/',
            name: 'login',
            component: login
        },
        {
            path: '/register',
            name: 'register',
            component: register
        },
    ]
})
 /*
router.beforeEach((to, from, next) => {   
    
    const store = require("./store")

    if (to.name == 'Adm' && !store.default.getters.getLog) next({ name: 'Login' })
    else next()
})*/

export default router;