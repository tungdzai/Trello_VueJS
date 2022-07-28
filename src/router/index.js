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
    path: '/',
    name: 'FormLogin',
    component: () => import('../components/HW10/FormLogin.vue'),

  },
  {
    path: '/ForgotPass',
    name: 'ForgotPass',
    component: () => import('../components/HW10/ForgotPass.vue'),

  },
 
  
  //admin
{
  path: '/BaseLayout',
  name: 'BaseLayout',
  component: () => import('../layouts/BaseLayout.vue'),
},
{
  path: '/QuanLySanPham',
  name: 'QuanLySanPham',
  component: () => import('../views/QuanLySanPham.vue')
},
{
  path: '/QuanLyHoaDon',
  name: 'QuanLyHoaDon',
  component: () => import('../views/QuanLyHoaDon.vue')
},
{
  path: '/BaoCaoThongKe',
  name: 'BaoCaoThongKe',
  component: () => import('../views/BaoCaoThongKe.vue')
},


]


const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
