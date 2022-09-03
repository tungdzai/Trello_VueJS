import Vue from 'vue'
import Vuex from 'vuex'
import about  from './modules/about'
import auth from './modules/auth'
import createPersistedState from "vuex-persistedstate";

Vue.use(Vuex)

const store = new Vuex.Store({
  state: {  
  },
  getters:{
  },
  mutations: {
  },
  modules: {
    about,
    auth
  },
  plugins: [createPersistedState({ paths: ['auth'] })]
})

export default store