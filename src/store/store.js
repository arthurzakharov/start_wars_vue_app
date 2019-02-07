import Vue from 'vue';
import Vuex from 'vuex';
import view from './view.js';

Vue.use(Vuex);

export default new Vuex.Store({
  modules: {
    view,
  },
  state: {},
  getters: {},
  mutations: {},
  actions: {},
})