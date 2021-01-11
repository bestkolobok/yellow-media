import types from '~/store/mutation-types';
import api from '~/static/api';
import { decode } from 'js-base64';

export default {
  namespaced: true,
  state() {
    return {
      goods: []
    }
  },
  mutations: {
    [types.SET_DATA](state, data) {
      const jsonData = decode(data);
      state.goods = JSON.parse(jsonData);
    }
  },
  actions: {
    async fetchGoods({ commit }) {
      try {
        const data = await this.$axios.$get(api.taskFourUrl);
        commit(types.SET_DATA, data);
      } catch (err) {
        console.error(err)
      }
    }
  },
  getters: {
    getGoods: ({ goods }) => goods
  }
}
