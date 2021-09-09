import {State} from '@/types/interfaces';

const state = {
    labs: [],
    user: /*localStorage.getItem('user') ? JSON.parse(localStorage.getItem('user') || '') : */'',
    userId: '',
    cartId: '',
    serviceId: '',
    token: '',
    refreshToken: '',
    lab: {},
    finalService: [],
    service: {},
    price: 0,
    isLoggedIn: false
  }

  export default state as unknown as State; 