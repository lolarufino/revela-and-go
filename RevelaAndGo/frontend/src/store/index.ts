import { createStore } from 'vuex';
import axios from 'axios';

export default createStore({
  state: {
    labs: [],
    user: {},
    token: {},
    refreshToken: {},
    lab: {},
    finalService: [],
    price: null
  },
  mutations: {
    loadLabs(state: any, payload){
      const filteredLabs = payload
      .filter((lab: any) => state.finalService
      .every((service: any) => lab.services
      .includes(service)));
      state.labs = filteredLabs;
    },
    loadLab(state, payload){
      state.lab = payload;
    },
    loadUser(state, payload){
      state.user = payload;
    },
    updateFinalService(state,payload){
      const finalResult = payload.filter((service: any) => service !== 'none');
      if(state.finalService.length >= 1){
        state.finalService = [];
      }
      state.finalService = finalResult;
    },
    updatePrice(state, payload){
      state.price = payload;
    },
    loginUser(state, payload){
      state.userId = payload.user._id;
      state.user = payload.user;  
      state.token = payload.token;
      state.refreshToken = payload.refreshToken;
    }
  },
  actions: {
    async fetchLabsFromApi ({commit}){
      const {data} = await axios.get('http://localhost:5000/api/lab')

      commit('loadLabs', data);
    },
    async fetchLabFromApi ({commit}, id){
      const {data} = await axios.get(`http://localhost:5000/api/lab/${id}`)

      commit('loadLab', data);
    },
    async fetchUserLoggedFromApi({commit},id){
      const token = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7Il9pZCI6IjYxMmNlMDZhOTE3MzdkZWYxZTdlNThkOCIsImVtYWlsIjoibG9sYS5ydWYuYXJAZ21haWwuY29tIn0sImlhdCI6MTYzMDkyNzU2MywiZXhwIjoxNjMwOTI4NDYzfQ.KT2RI108e_xKLEuAXGyHOQVWafcRCJkXjTS9CnJnPzQ';
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
