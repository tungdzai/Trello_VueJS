const state = {
  accessToken: '',
  isLogin: false
}

const getters = {

}

const mutations = {
  updateAccessToken(state, accessToken) {
      state.accessToken = accessToken
  },
  updateStatusLogin(state, isLogin) {
      state.isLogin = isLogin
  }
}

export default {
  namespaced: true,
  state,
  getters,
  mutations
}