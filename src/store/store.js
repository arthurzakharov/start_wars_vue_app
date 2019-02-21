import Vue from 'vue';
import Vuex from 'vuex';
import view from './modules/view.js';
import data from './modules/data.js';

Vue.use(Vuex);

export default new Vuex.Store({
  modules: {
    view,
    data,
  },
  state: {},
  getters: {},
  mutations: {},
  actions: {},
})
