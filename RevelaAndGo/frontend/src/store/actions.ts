import axios from 'axios';
import { ActionContext } from 'vuex';
import {State, Service} from '@/types/interfaces';

const actions = {
    async fetchLabsFromApi ({commit}:ActionContext<State, State>): Promise<void>{
      const {data} = await axios.get('http://localhost:5000/api/lab')

      commit('loadLabs', data);
    },
    async fetchLabFromApi ({commit}:ActionContext<State, State>, id: string): Promise<void>{
      const {data} = await axios.get(`http://localhost:5000/api/lab/${id}`)

      commit('loadLab', data);
    },
    async fetchUserLoggedFromApi({commit}:ActionContext<State, State>,user: any): Promise<void>{
      const {userId} = user;
      const {token} = user;
      const {data} = await axios({
        method: 'GET',
        url: `http://localhost:5000/api/user/${userId}`,
        headers: { Authorization: `Bearer ${token}` }
      })
      commit('loadUser', data);
    },
    async addServiceToDB ({commit}:ActionContext<State, State>,service: Service): Promise<void>{
      const {data} = await axios.post(`http://localhost:5000/api/service`, service)
      commit('saveLastServiceId',data._id);
    },
    async addServiceToThisUserCart({commit}:ActionContext<State, State>, {cartId, serviceId}: { cartId: string; serviceId: string }){
      const newData = {services: [serviceId]}
      const {data} = await axios.put(`http://localhost:5000/api/cart/${cartId}`, newData)
      commit('updatedCart',data);
    },
  }

  export default actions;