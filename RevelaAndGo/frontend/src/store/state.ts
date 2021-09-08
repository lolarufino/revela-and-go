import {State} from '@/types/interfaces';

const state = {
    labs: [],
    user: '',
    userId: null,
    cartId: null,
    serviceId: null,
    token: {},
    refreshToken: {},
    lab: {},
    finalService: [],
    service: {},
    price: null,
    isLoggedIn: false
  }

export default state as unknown as State; 