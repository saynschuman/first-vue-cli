export default {
  state: {
    age: 28
  },
  getters: {
    showAge(state) {
      return state.age + ' years old'
    }
  },
  mutations: {
    changeAge(state) {
      return state.age++ + 'years old'
    }
  }
}
