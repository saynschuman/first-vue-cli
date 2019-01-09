import Vue from 'vue'
import Vuex from 'vuex'
import age from './modules/age'


Vue.use(Vuex)

export const store = new Vuex.Store({
  state: {
    name: "State Name",
    surName: "State SurName",
    age: "28",
    count: 0,
    isLoading: false
  },
  getters: {
    showSurName(state) {
      return state.surName
    },
    showName(state) {
      return state.name
    },
    showCount(state) {
      return state.count
    },
    isLoading(state) {
      return state.isLoading
    }
  },
  mutations: {
    swapName(state, name) {
      return state.name = name
    },
    increment(state) {
      return state.count++
    },
    toggleLoading(state) {
      return state.isLoading = !state.isLoading
    }
  },
  actions: {
    increment(context) {
      const promise = new Promise(resolve => {
        context.commit('toggleLoading')
        setTimeout(() => {
          resolve(
            context.commit('increment')
          )
        }, 500)
      })
      promise.then(() => {
        context.commit('toggleLoading')
      })
    }
  },
  modules: {
    age
  }
})
