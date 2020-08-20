import * as types from './mutation-types'

export const state = () => ({
  users: [
    {
      name: 'Geoff',
      id: '1234',
    },
    {
      name: 'Nate',
      id: '5678',
    },
  ],
  activeUser: '5678',
})

export const getters = {
  users: (state) => state.users,
  activeUser: (state) => state.activeUser,
}

export const mutations = {
  [types.UPDATE_ACTIVE_USER](state, id) {
    state.activeUser = id
  },
}

export const actions = {
  updateActiveUser({ commit }, payload) {
    commit(types.UPDATE_ACTIVE_USER, payload)
  },
}
