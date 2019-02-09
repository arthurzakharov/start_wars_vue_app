import {HTTP} from '../utils/http-common.js';

const apiPath = 'people/';

const people = {
	namespaced: true,
	state: {
		itemsAmount: undefined,
		totalPages: undefined,
		currentPage: undefined,
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
			const {data: {count, results}} = await HTTP.get(apiPath, {params});
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
		SET_PAGES(state, {pageNumber, pages}) { 
			state.pages.set(pageNumber, pages);
		},
	},
};

export default people;