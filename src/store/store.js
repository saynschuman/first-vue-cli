import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export const store = new Vuex.Store({
  state: {
    name: "State Name",
    surName: "State SurName",
    age: "28"
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
    }
  },
  mutations: {
    changeAge(state) {
      return state.age++ + 'years old'
    },
    swapName(state, name) {
      return state.name = name
    }
  }
})
