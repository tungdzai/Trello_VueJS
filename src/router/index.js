import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [

  // {
  //   path: '/users/:userId',
  //   name: 'user',
  //   component: () => import('../views/UserView.vue'),
  //   c
  //     {
  //       path: 'post',
  //       name: 'userPost',
  //       component: () => import('../views/PostView.vue')
  //     },

  //   ]
  // },
  // HW01
  {
    path: '/HW01',
    name: 'HW01',
    component: () => import('../components/HW01/HW01.vue')
  },
  {
    path: '/HW02',
    name: 'HW02',
    component: () => import('../components/HW01/HW02.vue')
  },
  {
    path: '/HW03',
    name: 'HW03',
    component: () => import('../components/HW01/HW03.vue')
  },
// HW02
{
  path: '/EX01',
  name: 'EX01',
  component: () => import('../components/HW02/EX01.vue')
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


// pro
{
  path: '/LoginProject',
  name: 'LoginProject',
  component: () => import('../layouts/LoginProject.vue')
},
{
  path: '/AdminLayout',
  name: 'AdminLayout',
  component: () => import('../layouts/AdminLayout.vue')
},
{
  path: '/accountInFormation',
  name: 'accountInFormation',
  component: () => import('../views/accountInFormation.vue')
},
{
  path: '/ThucHanh2',
  name: 'ThucHanh2',
  component: () => import('../components/HW01/ThucHanh2.vue')
},
{
  path: '/phone',
  name: 'phoneNumber',
  component: () => import('../views/phone.vue')
},
{
  path: '/VueX',
  name: 'VueX01',
  component: () => import('../components/Unit07/VueX01.vue'),
},
{
  path: '/VueX',
  name: 'VueX02',
  component: () => import('../components/Unit07/VueX02.vue'),
},
{
  path: '/ListProducts',
  name: 'ListProducts',
  component: () => import('../components/Unit07/HW01/ListProducts.vue'),
},
{
  path: '/ExerciseProduct',
  name: 'ExerciseProduct',
  component: () => import('../components/Unit07/HW02/ExerciseProduct.vue'),
},
]


const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
