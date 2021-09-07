import { createStore } from 'vuex';
import axios from 'axios';

export default createStore({
  state: {
    labs: [],
    user: '',
    userId: null,
    token: {},
    refreshToken: {},
    lab: {},
    finalService: [],
    price: null,
    isLoggedIn: false
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
      state.user = payload.user;
      state.userId = payload.user._id;
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
  async fetchUserLoggedFromApi({commit},user){
    const {userId} = user;
    const {token} = user;
      const {data} = await axios({
        method: 'GET',
        url: `http://localhost:5000/api/user/${userId}`,
        headers: { Authorization: `Bearer ${token}` }
      })
      commit('loadUser', data);
    }
  },
  modules: {
  },
});
