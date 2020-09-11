import PubNubVue from 'pubnub-vue'
import * as types from './mutation-types'

export const state = () => ({
  history: [],
  newMessages: [],
})

export const getters = {
  history: (state) => state.history,
  newMessages: (state) => state.newMessages,
}

export const mutations = {
  [types.UPDATE_HISTORY](state, messages) {
    const incomingMessages = messages.reduce((acc, value) => {
      if (
        acc.length &&
        acc[acc.length - 1][0].entry.uuid === value.entry.uuid
      ) {
        acc[acc.length - 1].push(value)
      } else {
        acc.push([value])
      }
      return acc
    }, [])
    state.history = state.history.concat(incomingMessages)
  },
  [types.UPDATE_MESSAGES](state, message) {
    const { newMessages } = state
    const lastIteration = newMessages.length - 1
    if (
      newMessages.length !== 0 &&
      newMessages[lastIteration][0].entry.uuid === message.entry.uuid
    ) {
      newMessages[lastIteration].push(message)
    } else {
      newMessages.push([message])
    }
  },
}

export const actions = {
  fetchMessages({ commit }, payload) {
    // console.log('Working')
    PubNubVue.getInstance().history(
      {
        channel: 'doschat',
        count: 6,
        stringifiedTimeToken: false,
      },
      (status, response) => {
        const messages = response.messages
        commit(types.UPDATE_HISTORY, messages)
      }
    )
  },
  addMessage({ commit }, payload) {
    commit(types.UPDATE_MESSAGES, payload)
  },
}
