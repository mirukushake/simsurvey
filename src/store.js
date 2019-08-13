import Vue from 'vue';
import Vuex from 'vuex';
import jsonData from '@/assets/responses.json';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    data: jsonData,
  },
  getters: {
    getAll(state) {
      return state;
    },
  },
  mutations: {

  },
  actions: {

  },
});
