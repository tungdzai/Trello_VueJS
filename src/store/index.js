import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const store = new Vuex.Store({
  state: {
    count:1,
    todos: [
      { index: 1, text: 'task 1', done: true },
      { index: 2, text: 'task 2', done: false },
      { index: 3, text: 'task 3', done: true },
      { index: 4, text: 'task 4', done: false }
    ]
  },
  getters:{
    doneTodos: state => {
      return state.todos.filter(todo => todo.done)
    },
    getTodoByIndex: (state) => (index) => {
      return state.todos.find(todo => todo.index === index)
    }
  },
  mutations: {
    increment (state, input) {
      state.count += input.number
      console.log(input.name)
    }
  }
})

export default store