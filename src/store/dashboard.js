import * as types from './mutation-types'

const state = {
  isCollapse: true,
  left: false,
  isLoading: false,
}

const mutations = {
  [types.EXPAND_MENU](state, payload) {
    state.isCollapse = payload.isCollapse
  },

  [types.CHANGE_HEADER_LEFT](state, payload) {
    state.left = payload.left
  },

  [types.SHOW_LOADING](state) {
    state.isLoading = true
  },

  [types.HIDE_LOADING](state) {
    state.isLoading = false
  },
}

export default {
  state,
  mutations,
}
