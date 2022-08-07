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
    ],
    products:[
      {
        id: 1,
        name: 'iPhone 12 Pro Max Chính Hãng',
        image: 'https://cdn2.cellphones.com.vn/358x/media/catalog/product/i/p/iphone_13-_pro-5_4_1.jpg',
        price: 32990000,
        quantity: 566,
      },
      {
        id: 2,
        name: 'iPhone 12 Chính Hãng (VN/A)',
        image: '	https://cdn2.cellphones.com.vn/358x/media/catalog/product/i/p/iphone_13-_pro-5_4_1.jpg',
        price: 21790000,
        quantity: 123,
      },
      {
        id: 3,
        name: 'iPhone 11 Chính hãng',
        image: '	https://cdn2.cellphones.com.vn/358x/media/catalog/product/i/p/iphone_13-_pro-5_4_1.jpg',
        price: 16690000,
        quantity: 0,
      },
      {
        id: 4,
        name: 'Apple iPhone XR 64GB Chính hãng(VN/A)',
        image: '	https://cdn2.cellphones.com.vn/358x/media/catalog/product/i/p/iphone_13-_pro-5_4_1.jpg',
        price: 12190000,
        quantity: 1023,
      },
      {
        id: 5,
        name: 'iPhone 11 Pro Max Chính hãng(VN/A)',
        image: '	https://cdn2.cellphones.com.vn/358x/media/catalog/product/i/p/iphone_13-_pro-5_4_1.jpg',
        price: 26500000,
        quantity: 6,
      }
    ],
    cartProducts:[
     
    ],
    ListProducts:[
      {
        id:1,
        name:"Bánh bao",
        price:500000,
        quantity:56,
        
      }
      ,{
        id:2,
        name:"Bánh bao",
        price:500000,
        quantity:0,
        
      }
    ],
    productInput:{

    }
  },
  getters:{
    doneTodos: state => {
      return state.todos.filter(todo => todo.done)
    },
    getTodoByIndex: (state) => (index) => {
      return state.todos.find(todo => todo.index === index)
    },



  },
  mutations: {
    increment (state, input) {
      state.count += input.number
      console.log(input.name)
    },
  }
})

export default store