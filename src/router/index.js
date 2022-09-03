import Vue from 'vue'
import VueRouter from 'vue-router'
// import store from '../store'

Vue.use(VueRouter)

const routes = [
{
  path: '/accountInFormation',
  name: 'accountInFormation',
  component: () => import('../views/accountInFormation.vue')
},
{
  path: '/email',
  name: 'emailUpdate',
  component: () => import('../views/email.vue')
},
{
  path: '/pass',
  name: 'passUpdate',
  component: () => import('../views/pass.vue')
},

{
  path: '/LoginProject',
  name: 'LoginProject',
  component: () => import('../layouts/LoginProject.vue')
},
{
  path: '/AdminLayout',
  name: 'TaskProject',
  component: () => import('../components/Project/Task.vue')
},
]


const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

// router.beforeEach((to, from, next) => {
//   if (to.name != 'LoginProject' && !store.state.auth.isLogin) {
//     next({ name: 'LoginProject' })
//   } else if (to.name == 'LoginProject' && store.state.auth.isLogin) {
//     next({ name: 'TaskProject' })
//   } else {
//     next()
//   }
// })

export default router
