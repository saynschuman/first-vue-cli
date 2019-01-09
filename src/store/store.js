import Vue from 'vue'
import Vuex from 'vuex'

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
    showAge(state) {
      return state.age + ' years old'
    },
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
    changeAge(state) {
      return state.age++ + 'years old'
    },
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
            context.state.count++
          )
        }, 1000)
      })
      promise.then(() => {
        context.commit('toggleLoading')
      })
    }
  }
})
