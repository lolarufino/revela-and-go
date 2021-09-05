import { createStore } from 'vuex';
import axios from 'axios';

export default createStore({
  state: {
    labs: [],
    user: {},
    lab: {},
    finalService: [],
    price: null
  },
  mutations: {
    loadLabs(state: any, payload){
      const filteredLabs = payload.filter((lab: any) => state.finalService.every((service: any) => lab.services.includes(service)));
      state.labs = filteredLabs;
    },
    loadUser(state, payload){
      state.user = payload;
    },
    loadLab(state, payload){
      state.lab = payload;
    },
    updateFinalService(state,payload){
      const finalResult = payload.filter((service: string) => service !== 'none');
      if(state.finalService.length >= 1){
        state.finalService = [];
      }
      state.finalService = finalResult;
    },
    updatePrice(state, payload){
      state.price = payload;
    }
  },
  actions: {
    async fetchLabsFromApi ({commit}){
      const {data} = await axios.get('http://localhost:5000/api/lab')

      commit('loadLabs', data);
    },
    async fetchUserFromApi ({commit}){
      const token = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7Il9pZCI6IjYxMmNlMDZhOTE3MzdkZWYxZTdlNThkOCIsImVtYWlsIjoibG9sYS5ydWYuYXJAZ21haWwuY29tIn0sImlhdCI6MTYzMDg1NTU5MCwiZXhwIjoxNjMwODU2NDkwfQ.dKM2m6C6U7LPpwGN8udLNJhEhvH7MHyejHgFcUK2628';
      const id = '612ce06a91737def1e7e58d8';
      const {data} = await axios({
        method: 'GET',
        url: `http://localhost:5000/api/user/${id}`,
        headers: { Authorization: `Bearer ${token}` }
      })
      commit('loadUser', data);
    },
    async fetchLabFromApi ({commit}, id){
      const {data} = await axios.get(`http://localhost:5000/api/lab/${id}`)

      commit('loadLab', data);
    }
  },
  modules: {
  },
});
