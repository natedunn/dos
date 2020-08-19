import PubNubVue from 'pubnub-vue'
import * as types from './mutation-types'

export const state = () => ({
  messages: [],
})

export const getters = {
  messages: (state) => state.messages,
}

export const mutations = {
  [types.UPDATE_MESSAGES](state, messages) {
    state.messages = state.messages.concat(messages)
  },
}

export const actions = {
  fetchMessages({ commit }, payload) {
    // console.log('Working')
    PubNubVue.getInstance().history(
      {
        channel: 'journeychat',
        count: 6,
        stringifiedTimeToken: false,
      },
      (status, response) => {
        const messages = response.messages
        commit(types.UPDATE_MESSAGES, messages)
      }
    )
  },
}
