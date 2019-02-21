import {HTTP} from '../../utils/http-common.js';
import {peopleMapper, speciesMapper} from '../../utils/mappers.js';

const data = {
  namespaced: true,
  state: {
    currentPageInfo: '',
    currentPageNumber: {
      films: 1,
      people: 1,
      planets: 1,
      species: 1,
      starships: 1,
      vehicles: 1,
    },
    totalPages: {
      films: 0,
      people: 0,
      planets: 0,
      species: 0,
      starships: 0,
      vehicles: 0,
    },
    pages: {
      films: new Map(),
      people: new Map(),
      planets: new Map(),
      species: new Map(),
      starships: new Map(),
      vehicles: new Map(),
    },
  },
  getters: {
    getCurrentPageInfo: state => {
      let info = {};
      switch (state.currentPageInfo) {
        case 'home':
          info.title = 'Home';
          info.module = 'home';
          break;
        case 'films':
          info.title = 'Films';
          info.module = 'films';
          break;
        case 'people':
          info.title = 'People';
          info.module = 'people';
          break;
        case 'planets':
          info.title = 'Planets';
          info.module = 'planets';
          break;
        case 'species':
          info.title = 'Species';
          info.module = 'species';
          break;
        case 'starships':
          info.title = 'Starships';
          info.module = 'starships';
          break;
        case 'vehicles':
          info.title = 'Vehicles';
          info.module = 'vehicles';
          break;
        default:
          info.title = 'Home';
          info.module = 'home';
          console.warn(`view/currentPage contains unexpected value ${state.currentPageInfo}`);
      }
      return info;
    },
    getCurrentPageNumber: state => page => state.currentPageNumber[page],
    getTotalPages: state => page => state.totalPages[page],
    getPages: state => page => {
      console.log('getPages: ', page);
      return state.pages[page]
    },
  },
  actions: {
    changeCurrentPageInfo({commit}, payload) {
      commit('SET_CURRENT_PAGE_INFO', payload);
    },
    async fetchPage({commit, dispatch}, payload) {
      const {name,number} = payload;
      console.log('fetchPage:', payload);
      commit('SET_CURRENT_PAGE_NUMBER', {name, number});
      if(await dispatch('hasRequestedPage', {name, number})) return;
      let response;
      try {
        const params = { page: number };
        const apiPath = name + '/';
        console.log('apiParams: ', apiPath, params);
        response = await HTTP.get(apiPath, {params});
      }catch (e) { console.error('error on people/fetchPage:\n', e); }
      const {data: {count, results}} = response;
      commit('SET_TOTAL_PAGES', {name, count});
      commit('SET_PAGES', {name, results, number});
    },
    async hasRequestedPage({getters}, payload) {
      console.log('hasRequestedPage: ', payload);
      const {name, number} = payload;
      console.log(getters.getPages(name));
      return getters.getPages(name).has(number);
    },
  },
  mutations: {
    SET_CURRENT_PAGE_INFO(state, payload) {
      console.log('SET_CURRENT_PAGE_INFO: ', payload);
      state.currentPageInfo = payload;
    },
    SET_CURRENT_PAGE_NUMBER(state, payload) {
      console.log('SET_CURRENT_PAGE_NUMBER: ', payload);
      const {name, number} = payload;
      state.currentPageNumber[name] = number;
    },
    SET_TOTAL_PAGES(state, payload) {
      console.log('SET_TOTAL_PAGES: ', payload);
      const {name, count} = payload;
      state.totalPages[name] = count;
    },
    SET_PAGES(state, payload) {
      console.log('SET_PAGES: ', payload);
      const {name, results, number} = payload;
      state.pages[name].set(number, peopleMapper(results));
    },
  },
};

export default data;
