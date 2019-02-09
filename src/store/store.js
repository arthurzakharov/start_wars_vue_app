import Vue from 'vue';
import Vuex from 'vuex';
import view from './view.js';
import people from './people.js';
Vue.use(Vuex);

export default new Vuex.Store({
  modules: {
    view,
    people,
  },
  state: {},
  getters: {},
  mutations: {},
  actions: {},
})
