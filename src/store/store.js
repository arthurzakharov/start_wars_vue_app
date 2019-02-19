import Vue from 'vue';
import Vuex from 'vuex';
import view from './modules/view.js';
import people from './modules/people.js';
import species from './modules/species.js';
Vue.use(Vuex);

export default new Vuex.Store({
  modules: {
    view,
    people,
    species,
  },
  state: {},
  getters: {},
  mutations: {},
  actions: {},
})
