import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [

  {
    path: '/users/:userId',
    name: 'user',
    component: () => import('../views/UserView.vue'),
    children:[
      {
        path: 'profile',
        name: 'userProfile',
        component: () => import('../views/ProfileView.vue')
      },
      {
        path: 'post',
        name: 'userPost',
        component: () => import('../views/PostView.vue')
      },

    ]
  },
  {
    path: '/FormLogin',
    name: 'FormLogin',
    component: () => import('../components/HW10/FormLogin.vue')
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
