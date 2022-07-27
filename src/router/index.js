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
// LoginForm
  {
    path: '/FormLogin/:FormLoginId',
    name: 'FormLogin',
    component: () => import('../components/HW10/FormLogin.vue'),

  },
  {
    path: '/ForgotPass/:ForgotPassId',
    name: 'ForgotPass',
    component: () => import('../components/HW10/ForgotPass.vue'),

  },
 
  
  //admin
{
  path: '/BaseLayout/:BaseLayoutId',
  name: 'BaseLayout',
  component: () => import('../layouts/BaseLayout.vue'),
  children:[
    {
      path: 'BaoCaoThongKe',
      name: 'BaoCaoThongKe',
      component: () => import('../views/BaoCaoThongKe.vue')
    },
    {
      path: 'QuanLyHoaDon',
      name: 'QuanLyHoaDon',
      component: () => import('../views/QuanLyHoaDon.vue')
    },

  ]
},


]


const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
