import types from '~/store/mutation-types';

export default {
  namespaced: true,
  state() {
    return {
      data: {}
    }
  },
  mutations: {
    [types.SET_DATA](state, data) {
      // state.data = data;
    }
  },
  actions: {
    async generator({ state, commit, dispatch, getters }) {
      try {
        const data = await this.$axios.$get('http://...');
        commit(types.SET_DATA, data);
      } catch (err) {

      }
    }
  },
  getters: {
    getData: ({ data }) => data
  }
}
