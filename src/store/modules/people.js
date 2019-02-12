import {HTTP} from '../../utils/http-common.js';
import {peopleMapper} from '../../utils/mappers.js';

const apiPath = 'people/';

const people = {
	namespaced: true,
	state: {
		totalPages: 0,
		currentPage: 1,
		pages: new Map(),
	},
	getters: {
		getCurrentPage: state => state.currentPage,
		getTotalPages: state => state.totalPages,
		getPages: state => state.pages,
		getPage: state => pageNumber => state.pages.get(pageNumber),
	},
	actions: {
		async fetchPage({commit, dispatch}, pageNumber) {
			commit('SET_CURRENT_PAGE', pageNumber);
			if(await dispatch('hasRequestedPage', pageNumber)) return;
			let response;
			try {
				const params = { page: pageNumber };
				response = await HTTP.get(apiPath, {params});
			}catch (e) { console.error('error on people/fetchPage:\n', e); }
			const {data: {count, results}} = response;
			commit('SET_TOTAL_PAGES', count);
			commit('SET_PAGES', {pageNumber, results});
		},
		async hasRequestedPage({getters}, pageNumber) {
			return getters.getPages.has(pageNumber);
		},
	},
	mutations: {
		SET_CURRENT_PAGE(state, currentPage) {
			state.currentPage = currentPage;
		},
		SET_TOTAL_PAGES(state, totalPages) {
			const itemsPerPage = 10;
			state.totalPages = Math.ceil(totalPages / itemsPerPage);
		},
		SET_PAGES(state, {pageNumber, results}) {
			state.pages.set(pageNumber, peopleMapper(results));
		},
	},
};

export default people;
