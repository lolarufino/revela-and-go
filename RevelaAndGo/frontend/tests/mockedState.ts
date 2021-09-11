const mockedState = {
    labs: [
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
    ],
    user: {
      _id: "612ce06a91737def1e7e58d8",
    name: "Lola",
    email: "lola.ruf.ar@gmail.com",
    password: "1234",
    profilePicture: "https://i.ibb.co/3pN6HCG/pexels-cottonbro-3585011.jpg",
    __v: 0,
    favoriteLabs: [
        {
            _id: "612e0f6fa460a539597d0991",
            name: "Carmencita Film Lab"
        },
        {
            _id: "612e0f6fa460a539597d0993",
            name: "La peliculera"
        }
    ],
    cart: {
        _id: "6133906fea6ac93c534039d3",
        services: [
            {
                _id: "613b19895b12cd2b1fd4ce39",
                filmType: 35,
                palette: "bnw",
                scan: false,
                print: false,
                rollBack: true,
                price: 11,
                __v: 0
            },
            {
                _id: "613b83ae8f0b0bf1056adfda",
                filmType: 35,
                palette: "bnw",
                scan: false,
                print: false,
                rollBack: true,
                price: 10,
                __v: 0
            }
        ]
    }},
    userId: '612ce06a91737def1e7e58d8',
    cartId: '6133906fea6ac93c534039d3',
    serviceId: '613b19895b12cd2b1fd4ce39',
    token: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7Il9pZCI6IjYxMmNlMDZhOTE3MzdkZWYxZTdlNThkOCIsImVtYWlsIjoibG9sYS5ydWYuYXJAZ21haWwuY29tIn0sImlhdCI6MTYzMTM3Mzg3NywiZXhwIjoxNjMxMzc0Nzc3fQ.54XVt8_01tSSInZvncvVMTpZv-BhPUGUmL0BkOZQShM',
    refreshToken: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7Il9pZCI6IjYxMmNlMDZhOTE3MzdkZWYxZTdlNThkOCIsImVtYWlsIjoibG9sYS5ydWYuYXJAZ21haWwuY29tIn0sImlhdCI6MTYzMTM3Mzg3N30.G2B9U5WXUY0FBXJHSDEvOoIbLkIBejh_vapDwvCffeE',
    lab: {
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
    finalService: [120,"color","scan","print"],
    service: {
      filmType:120,
      palette:"color",
      price:0,
      print:true,
      rollBack:false,
      scan:true
    },
    price: 0,
    isLoggedIn: true
  }

export default mockedState;