import Vuex from 'vuex'
import Vue from 'vue'

import actions from './actions'
import state from './state'
import getters from './getters'
import mutations from './mutations'

Vue.use(Vuex)

export default new Vuex.Store({
  state,
  getters,
  actions,
  mutations
})
