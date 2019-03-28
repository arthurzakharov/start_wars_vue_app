import Vue from 'vue';
import Vuex from 'vuex';
import view from './modules/view';
import data from './modules/data';
import error from './modules/error';

Vue.use(Vuex);

export default new Vuex.Store({
  namespaced: true,
  modules: {
    view,
    data,
    error
  },
  state: {},
  getters: {},
  mutations: {},
  actions: {},
})
