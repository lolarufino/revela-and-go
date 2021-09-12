import mutations from '../../src/store/mutations';
import {State} from '../../src/types/interfaces';
import state from '../mockedState';

let mockedState: State;

describe('Given a mutation', () => {
    beforeEach(() => {
        mockedState = state;
      });
    test('Should load and update labs to state', () => {
        const payload = [
            {
                _id: '612e0f6fa460a539597d0991',
                name: 'Carmencita Film Lab',
                address: 'Calle Luis de Santangel, 16. CP:46005, Valencia (España)',
                contact: 963041987,
                image: "https://i.ibb.co/bg9KFpq/1132382-original.png",
                services: [
                  35,
                  120,
                  "color",
                  "bnw",
                  "scan",
                  "print",
                  "rollback"
              ],
                baseRate: 6
              },
              {
                _id: '612e0f6fa460a539597d0993',
                name: 'La peliculera',
                address: 'Calle de Argensola, 2. CP:28004, Madrid (España)',
                contact: 913104418,
                image: "https://i.ibb.co/p2Pn2RC/k-S5p3iy9-400x400.jpg",
                services: [
                  35,
                  120,
                  "color",
                  "bnw",
                  "scan",
                  "print",
                  "rollback"
              ],
                baseRate: 4
              }
        ]

        mutations.loadLabs(mockedState, payload);
        
        expect(mockedState.labs).toStrictEqual([
            {
                _id: '612e0f6fa460a539597d0991',
                name: 'Carmencita Film Lab',
                address: 'Calle Luis de Santangel, 16. CP:46005, Valencia (España)',
                contact: 963041987,
                image: "https://i.ibb.co/bg9KFpq/1132382-original.png",
                services: [
                  35,
                  120,
                  "color",
                  "bnw",
                  "scan",
                  "print",
                  "rollback"
              ],
                baseRate: 6
              },
              {
                _id: '612e0f6fa460a539597d0993',
                name: 'La peliculera',
                address: 'Calle de Argensola, 2. CP:28004, Madrid (España)',
                contact: 913104418,
                image: "https://i.ibb.co/p2Pn2RC/k-S5p3iy9-400x400.jpg",
                services: [
                  35,
                  120,
                  "color",
                  "bnw",
                  "scan",
                  "print",
                  "rollback"
              ],
                baseRate: 4
              }
        ])
    })
    test('Should load and update a single lab to state', () => {
      const payload =
          {
              _id: '612e0f6fa460a539597d0991',
              name: 'Carmencita Film Lab',
              address: 'Calle Luis de Santangel, 16. CP:46005, Valencia (España)',
              contact: 963041987,
              image: "https://i.ibb.co/bg9KFpq/1132382-original.png",
              services: [
                35,
                120,
                "color",
                "bnw",
                "scan",
                "print",
                "rollback"
            ],
              baseRate: 6
            }

      mutations.loadLab(mockedState, payload);
      
      expect(mockedState.lab).toStrictEqual(
          {
              _id: '612e0f6fa460a539597d0991',
              name: 'Carmencita Film Lab',
              address: 'Calle Luis de Santangel, 16. CP:46005, Valencia (España)',
              contact: 963041987,
              image: "https://i.ibb.co/bg9KFpq/1132382-original.png",
              services: [
                35,
                120,
                "color",
                "bnw",
                "scan",
                "print",
                "rollback"
            ],
              baseRate: 6
            })
  })
  test('Should load and update a user to state', () => {
    const payload =
    {
      _id: "612ce06a91737def1e7e58d8",
      name: "Lola",
      email: "lola.ruf.ar@gmail.com",
      password: "1234",
      profilePicture: "https://i.ibb.co/3pN6HCG/pexels-cottonbro-3585011.jpg",
      __v: 0,
      favoriteLabs: [],
    cart: ''
  }

    mutations.loadUser(mockedState, payload);
    
    expect(mockedState.user).toStrictEqual(
      {
        _id: "612ce06a91737def1e7e58d8",
        name: "Lola",
        email: "lola.ruf.ar@gmail.com",
        password: "1234",
        profilePicture: "https://i.ibb.co/3pN6HCG/pexels-cottonbro-3585011.jpg",
        __v: 0,
        favoriteLabs: [],
      cart: ''
    })
})
test('Should update a finalService to state', () => {
  const payload = [120,"color","scan","print"]

  mutations.updateFinalService(mockedState, payload);
  
  expect(mockedState.finalService).toStrictEqual([120,"color","scan","print"]
  )
})
test('Should update the price to state', () => {
  const payload = 23

  mutations.updatePrice(mockedState, payload);
  
  expect(mockedState.price).toStrictEqual(23)
})
test('Should update a user, a token and a refreshToken to state', () => {
  const payload = {
    user: {
      _id: "",
      name: "",
      email: "",
      password: "",
      profilePicture: "",
      __v: 0,
      favoriteLabs: [],
      cart: ""   
    },
    token: '123',
    refreshToken: '456'
  }

  mutations.loginUser(mockedState, payload);
  
  expect(mockedState.user).toStrictEqual({
      _id: "",
      name: "",
      email: "",
      password: "",
      profilePicture: "",
      __v: 0,
      favoriteLabs: [],
      cart: ""   
    }
  )
  expect(mockedState.token).toStrictEqual('123')
  expect(mockedState.refreshToken).toStrictEqual('456')
})
test('Should update a service to state', () => {
  const payload = {
    _id: '',
    filmType:120,
    palette:"",
    price:0,
    print:true,
    rollBack:false,
    scan:true,
    __v: 0
  }

  mutations.updateService(mockedState, payload);
  
  expect(mockedState.service).toStrictEqual({
    _id: '',
    filmType:120,
    palette:"",
    price:0,
    print:true,
    rollBack:false,
    scan:true,
    __v: 0
  }
  )
})
test('Should update a serviceId', () => {
  const payload = '123'

  mutations.saveLastServiceId(mockedState, payload);
  
  expect(mockedState.serviceId).toStrictEqual('123')
})
test('Should update a cart', () => {
  const payload = {
    _id: '123',
    services: []
  }

  mutations.updatedCart(mockedState, payload);
  
  expect(mockedState.user.cart).toStrictEqual({
    _id: '123',
    services: []
  })
})
test('Should update labs in foundedlabs', () => {
  const payload = [
    {
      _id: '',
      name: '',
      address: '',
      contact: 123,
      image: '',
      services: [],
      baseRate: 123
    }
  ]

  mutations.foundedLabs(mockedState, payload);
  
  expect(mockedState.value).toStrictEqual([
    {
      _id: '',
      name: '',
      address: '',
      contact: 123,
      image: '',
      services: [],
      baseRate: 123
    }
  ])
})
})