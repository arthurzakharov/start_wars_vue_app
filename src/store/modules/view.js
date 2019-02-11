const view = {
	namespaced: true,
	state: {
		isMobileMenuOpen: false,
	},
	getters: {
		getIsMobileMenuOpen: (state) => state.isMobileMenuOpen,
	},
	actions: {
		toggleIsMobileMenuOpen({commit}, payload) {
			commit('SET_IS_MOBILE_MENU_OPEN', payload);
		}
	},
	mutations: {
		SET_IS_MOBILE_MENU_OPEN(state, payload) {
			state.isMobileMenuOpen = (payload) ? payload : !state.isMobileMenuOpen;
		},
	},
};

export default view;