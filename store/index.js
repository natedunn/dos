import Vuex from 'vuex'

const store = () => {
  return new Vuex.Store({
    state: {
      message: 'Hello!',
    },
    getters: {},
    mutations: {},
    actions: {},
  })
}

export default store
