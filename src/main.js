import Vue from 'vue'
import App from './App.vue'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import router from './router'
import { Bar } from 'vue-chartjs/legacy'


Vue.use(ElementUI);
Vue.config.productionTip = false

new Vue({
  router,
  Bar,
  render: h => h(App)
}).$mount('#app')
