import {VIEW} from '../mutation-types';

const view = {
	namespaced: true,
	state: {
		isMobileMenuOpen: false,
	},
	getters: {
		getIsMobileMenuOpen: state => state.isMobileMenuOpen,
	},
	actions: {
		toggleIsMobileMenuOpen({commit}, payload) {
			commit(VIEW.SET_IS_MOBILE_MENU_OPEN, payload);
		},
	},
	mutations: {
		[VIEW.SET_IS_MOBILE_MENU_OPEN](state, payload) {
			state.isMobileMenuOpen = (payload) ? payload : !state.isMobileMenuOpen;
		},
	},
};

export default view;
