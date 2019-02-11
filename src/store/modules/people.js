import {HTTP} from '../../utils/http-common.js';
import {peopleMapper} from '../../utils/mappers.js';

const apiPath = 'people/';

const people = {
	namespaced: true,
	state: {
		itemsAmount: undefined,
		totalPages: undefined,
		currentPage: 1,
		pages: new Map(),
	},
	getters: {
		getItemsAmount: state => state.itemsAmount,
		getCurrentPage: state => state.currentPage,
		getTotalPages: state => state.totalPages,
		getPages: state => state.pages,
		getPage: state => pageNumber => state.pages.get(pageNumber),
	},
	actions: {
		async fetchPage({commit, dispatch}, pageNumber) {
			const params = { page: pageNumber };
			if(await dispatch('hasRequestedPage', pageNumber)) return;
			let response;
			try {
				response = await HTTP.get(apiPath, {params});
			}catch (e) { console.log('error on people/fetchPage:\n', e); }
			const {data: {count, results}} = response;
			commit('SET_ITEMS_AMOUNT', count);
			commit('SET_CURRENT_PAGE', pageNumber);
			commit('SET_TOTAL_PAGES', Math.ceil(count / results.length));
			commit('SET_PAGES', {pageNumber, results});
		},
		async hasRequestedPage({getters}, pageNumber) {
			return getters.getPages.has(pageNumber);
		},
	},
	mutations: {
		SET_ITEMS_AMOUNT(state, amount) {
			state.itemsAmount = amount;
		},
		SET_CURRENT_PAGE(state, currentPage) {
			state.currentPage = currentPage;
		},
		SET_TOTAL_PAGES(state, totalPages) {
			state.totalPages = totalPages;
		},
		SET_PAGES(state, {pageNumber, results}) {
			state.pages.set(pageNumber, peopleMapper(results));
		},
	},
};

export default people;
