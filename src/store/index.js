import Vue from 'vue'
import Vuex from 'vuex'
// import createPersistedState from 'vuex-persistedstate'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    showDialog: false,
    oTtext:'',
  },
  mutations: {
    getShowDialog (state, status) {
      state.showDialog = status.showDialog
      state.oTtext = status.oTtext
    },
  },
  actions: {
    getShowDialog ({ commit }, status) {
      commit('getShowDialog', status)
    }
  },

  // 把VUEX中的所有数据存到localStorage中
  // plugins: [createPersistedState({
  //   key: 'vuex_storage'
  // })]
})