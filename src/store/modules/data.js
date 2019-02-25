import {HTTP} from '../../utils/http-common.js';
import {DATA} from "../mutation-types";
import * as mapper from '../../utils/mappers.js';

const data = {
  namespaced: true,
  state: {
    currentPageName: '',
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
    getCurrentPageName: state => {
      let info = {};
      switch (state.currentPageName) {
        case 'films':
          info.title = 'Films';
          info.name = 'films';
          break;
        case 'people':
          info.title = 'People';
          info.name = 'people';
          break;
        case 'planets':
          info.title = 'Planets';
          info.name = 'planets';
          break;
        case 'species':
          info.title = 'Species';
          info.name = 'species';
          break;
        case 'starships':
          info.title = 'Starships';
          info.name = 'starships';
          break;
        case 'vehicles':
          info.title = 'Vehicles';
          info.name = 'vehicles';
          break;
        case 'home':
          info.title = 'Home';
          info.name = 'home';
          break;
        default:
          console.warn(`data/currentPageName contains unexpected value ${state.currentPageName}`);
      }
      return info;
    },
    getCurrentPageNumber: state => pageName => state.currentPageNumber[pageName],
    getTotalPages: state => pageName => state.totalPages[pageName],
    getPages: state => payload => state.pages[payload.name].get(payload.number),
    getPagesMap: state => pageName => state.pages[pageName],
  },
  actions: {
    changeCurrentPageName({commit}, pageName) {
      commit(DATA.SET_CURRENT_PAGE_NAME, pageName);
    },
    async fetchPage({commit, dispatch}, {name,number}) {
      commit(DATA.SET_CURRENT_PAGE_NUMBER, {name,number});
      if(await dispatch('hasRequestedPage', {name,number})) return;
      let response;
      try {
        response = await HTTP.get(name + '/', {params: { page: number }});
      }catch (e) {
        console.error('error on people/fetchPage:\n', e);
      }
      const {data: {count, results}} = response;
      commit(DATA.SET_TOTAL_PAGES, {name, count});
      commit(DATA.SET_PAGES, {name, results, number});
    },
    async hasRequestedPage({getters}, {name, number}) {
      return getters.getPagesMap(name).has(number);
    },
  },
  mutations: {
    [DATA.SET_CURRENT_PAGE_NAME](state, pageName) {
      state.currentPageName = pageName;
    },
    [DATA.SET_CURRENT_PAGE_NUMBER](state, {name, number}) {
      state.currentPageNumber[name] = number;
    },
    [DATA.SET_TOTAL_PAGES](state, {name, count}) {
      state.totalPages[name] = count;
    },
    [DATA.SET_PAGES](state, {name, results, number}) {
      switch (name) {
        case 'films':
          state.pages[name].set(number, mapper.filmMapper(results));
          break;
        case 'people':
          state.pages[name].set(number, mapper.peopleMapper(results));
          break;
        case 'planets':
          state.pages[name].set(number, mapper.planetMapper(results));
          break;
        case 'species':
          state.pages[name].set(number, mapper.speciesMapper(results));
          break;
        case 'starships':
          state.pages[name].set(number, mapper.starshipMapper(results));
          break;
        case 'vehicles':
          state.pages[name].set(number, mapper.vehiclesMapper(results));
          break;
        default:
          console.error(`DATA.SET_PAGES try to map ${name} that does not exist`);
      }

    },
  },
};

export default data;
