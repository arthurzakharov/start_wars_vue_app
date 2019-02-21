const view = {
	namespaced: true,
	state: {
		isMobileMenuOpen: false,
		currentPage: '',
	},
	getters: {
		getIsMobileMenuOpen: state => state.isMobileMenuOpen,
		getCurrentPageInfo: state => {
			let info = {};
			switch (state.currentPage) {
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
					console.warn(`view/currentPage contains unexpected value ${state.currentPage}`);
			}
			return info;
		},
	},
	actions: {
		toggleIsMobileMenuOpen({commit}, payload) {
			commit('SET_IS_MOBILE_MENU_OPEN', payload);
		},
		changeCurrentPage({commit}, payload) {
			commit('SET_CURRENT_PAGE', payload);
		},
	},
	mutations: {
		SET_IS_MOBILE_MENU_OPEN(state, payload) {
			state.isMobileMenuOpen = (payload) ? payload : !state.isMobileMenuOpen;
		},
		SET_CURRENT_PAGE(state, payload) {
			state.currentPage = payload;
		},
	},
};

export default view;
