import {State, 
    Lab, 
    UserModel,
    UserWithToken,
    Service,
    Cart} from '@/types/interfaces';

const mutations = {
    loadLabs(state: State, payload: Array<Lab>){
      const filteredLabs = payload
      .filter((lab: any) => state.finalService
      .every((service: any) => lab.services
      .includes(service)));
      state.labs = filteredLabs;
    },
    loadLab(state: State, payload: Lab){
      state.lab = payload;
    },
    loadUser(state: State, payload: UserModel){
      state.user = payload;
    },
    updateFinalService(state: State,payload: Array<number | string | any>){
      const finalResult = payload.filter((service: any) => service !== false);
      if(state.finalService.length >= 1){
      state.finalService = [];
      }
      state.finalService = finalResult;
    },
    updatePrice(state: State, payload: number){
      state.price = payload;
    },
    loginUser(state: State, payload: UserWithToken){
      state.user = payload.user;
      state.userId = payload.user._id;
      state.cartId = payload.user.cart._id;
      state.token = payload.token;
      state.refreshToken = payload.refreshToken;
    },
    updateService(state: State, payload: Service){
      state.service = payload;
    },
    saveLastServiceId(state: State, payload: string){
      state.serviceId = payload;
    },
    updatedCart(state: State, payload: Cart){
      state.user.cart = payload;
    }
}

  export default mutations;