import {ERROR} from '../mutation-types';

const error = {
  namespaced: true,
  state: {
    error: null
  },
  getters: {
    getError: state => state.error
  },
  actions: {
    setCurrentError({commit}, errorMessage) {
      commit(ERROR.SET_CURRENT_ERROR, errorMessage);
    },
    unsetCurrentError({commit}) {
      commit(ERROR.UNSET_CURRENT_ERROR);
    },
  },
  mutations: {
    [ERROR.SET_CURRENT_ERROR](state, errorMessage) {
      state.error = errorMessage;
    },
    [ERROR.UNSET_CURRENT_ERROR](state) {
      state.error = null;
    }
  },
};

export default error;
