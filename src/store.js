import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    items: [ 
      { text: 'Home', to: '/', icon:'home'},
      { text: 'About', to: '/about'},
      { text: 'Contact', to: '/contact'},
      { text: 'Privacy', to: '/privacy'}
    ]
  },
  getters:{
    links: (state) => {
      return state.items
    }
  },
  mutations: {
    setDrawer: (state, payload) => (state.drawer = payload),
    toggleDrawer: state => (state.drawer = !state.drawer)
  },
  actions: {

  }
})