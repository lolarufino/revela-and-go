import { createStore } from 'vuex';
import axios from 'axios';

export default createStore({
  state: {
    labs: [],
  },
  mutations: {
    loadLabs(state, payload){
      state.labs = payload;
    }
  },
  actions: {
    async fetchLabsFromApi ({commit}){
      const token = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7Il9pZCI6IjYxMmY1ZmU1ODRiZTc4M2Q3ZDUxODU5NyIsImVtYWlsIjoic2VyYWZpbmVscGVycml0b0BnbWFpbC5jb20ifSwiaWF0IjoxNjMwNjA2MDYyLCJleHAiOjE2MzA2MDY5NjJ9.uGS6gLif432gdDcAOROYezIdKd31YAgI18TDiKuXP88'
      const {data} = await axios({
        method: 'GET',
        url: 'http://localhost:5000/api/lab',
        headers: { Authorization: `Bearer ${token}` }
      })
      commit('loadLabs', data);
    }
  },
  modules: {
  },
});
