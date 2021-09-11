import {State} from '@/types/interfaces';

const state = {
    labs: [],
    user: '',
    userId: '',
    cartId: '',
    serviceId: '',
    token: '',
    refreshToken: '',
    lab: {},
    finalService: [],
    service: {},
    price: 0,
    isLoggedIn: false,
    value: []
  }

  export default state as unknown as State; 