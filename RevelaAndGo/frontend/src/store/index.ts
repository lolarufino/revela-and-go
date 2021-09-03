import { createStore } from 'vuex';
import axios from 'axios';

export default createStore({
  state: {
    labs: [],
    user: {}
  },
  mutations: {
    loadLabs(state, payload){
      state.labs = payload;
    },
    loadUser(state, payload){
      console.log(payload.favoriteLabs);
      state.user = payload;
    }
  },
  actions: {
    async fetchLabsFromApi ({commit}){
      const {data} = await axios.get('http://localhost:5000/api/lab')

      commit('loadLabs', data);
    },
    async fetchUserFromApi ({commit}){
      const token = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7Il9pZCI6IjYxMmNlMDZhOTE3MzdkZWYxZTdlNThkOCIsImVtYWlsIjoibG9sYS5ydWYuYXJAZ21haWwuY29tIn0sImlhdCI6MTYzMDY3NTEzNywiZXhwIjoxNjMwNjc2MDM3fQ.woJFNl7BmReOmdqQ4EoPI7bI3k1HqY6b28aYbu77jOQ';
      const id = '612ce06a91737def1e7e58d8';
      const {data} = await axios({
        method: 'GET',
        url: `http://localhost:5000/api/user/${id}`,
        headers: { Authorization: `Bearer ${token}` }
      })
      commit('loadUser', data);
    }
  },
  modules: {
  },
});
