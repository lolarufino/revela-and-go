import axios from 'axios';
import { ActionContext } from 'vuex';
import {State, Service, Cart} from '@/types/interfaces';

const actions = {
    async fetchLabsFromApi ({commit}:ActionContext<State, State>): Promise<void>{
      const {data} = await axios.get(`${process.env.VUE_APP_API_URL}/lab`)

      commit('loadLabs', data);
    },
    async fetchLabFromApi ({commit}:ActionContext<State, State>, id: string): Promise<void>{
      const {data} = await axios.get(`${process.env.VUE_APP_API_URL}/lab/${id}`)

      commit('loadLab', data);
    },
    async fetchUserLoggedFromApi({commit}:ActionContext<State, State>,user: any): Promise<void>{
      const {userId} = user;
      const {token} = user;
      const {data} = await axios({
        method: 'GET',
        url: `${process.env.VUE_APP_API_URL}/user/${userId}`,
        headers: { Authorization: `Bearer ${token}` }
      })
      commit('loadUser', data);
    },
    async addServiceToDB ({commit}:ActionContext<State, State>,service: Service): Promise<void>{
      const {data} = await axios.post(`${process.env.VUE_APP_API_URL}/service`, service)
      commit('saveLastServiceId',data._id);
    },
    async addServiceToThisUserCart({commit}:ActionContext<State, State>, {services,cartId, serviceId}: { services:Array<string | number>;cartId: string; serviceId: string}){
      const newData = {services: [...services, serviceId]};
      const {data} = await axios.put(`${process.env.VUE_APP_API_URL}/cart/${cartId}`, newData)
      commit('updatedCart',data);
    },
    async deleteService ({commit}:ActionContext<State, State>,{serviceId, cart}:{serviceId: string; cart: Cart}): Promise<void>{
      const newData = {services: cart.services.filter((service) => service._id !== serviceId)};
      const cartId = cart._id;
      const {data} = await axios.put(`${process.env.VUE_APP_API_URL}/cart/${cartId}`, newData)
      commit('updatedCart',data);
    },
    /*async searchingLab({commit}:ActionContext<State, State>, inputValue: string): Promise<void>{
      console.log('inputvalue',inputValue);
      const {data} = await axios.get(`${process.env.VUE_APP_API_URL}/lab`)
      console.log('data',data)
      const returnedLabs = data.filter((lab:any) => lab.name inputValue)
      console.log(returnedLabs)
      commit('foundedLabs', returnedLabs)
    }*/
  }

  export default actions;