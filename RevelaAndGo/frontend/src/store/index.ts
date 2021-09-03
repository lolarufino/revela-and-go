import { createStore } from 'vuex';
import axios from 'axios';

export default createStore({
  state: {
    labs: [],
    user: {},
    lab: {}
  },
  mutations: {
    loadLabs(state, payload){
      state.labs = payload;
    },
    loadUser(state, payload){
      state.user = payload;
    },
    loadLab(state, payload){
      state.lab = payload;
    }
  },
  actions: {
    async fetchLabsFromApi ({commit}){
      const {data} = await axios.get('http://localhost:5000/api/lab')

      commit('loadLabs', data);
    },
    async fetchUserFromApi ({commit}){
      const token = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7Il9pZCI6IjYxMmNlMDZhOTE3MzdkZWYxZTdlNThkOCIsImVtYWlsIjoibG9sYS5ydWYuYXJAZ21haWwuY29tIn0sImlhdCI6MTYzMDY5MjcxMiwiZXhwIjoxNjMwNjkzNjEyfQ.CJCjfIDVe-7S_B1lU5PT3UN1pLz5CLSrQUWjjy5qUe0';
      const id = '612ce06a91737def1e7e58d8';
      const {data} = await axios({
        method: 'GET',
        url: `http://localhost:5000/api/user/${id}`,
        headers: { Authorization: `Bearer ${token}` }
      })
      commit('loadUser', data);
    },
    async fetchLabFromApi ({commit}){
      const id = '612e0f6fa460a539597d0993';
      const {data} = await axios.get(`http://localhost:5000/api/lab/${id}`)

      commit('loadLab', data);
    }
  },
  modules: {
  },
});
