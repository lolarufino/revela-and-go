interface State{
    labs: Array<Lab>,
    user: UserModel | UserFromApi,
    userId: string,
    cartId: string,
    serviceId: string,
    token: string,
    refreshToken: string,
    lab: Lab,
    finalService: Array<number | string | any>,
    service: object,
    price: number,
    isLoggedIn: boolean,
    value: Array<Lab>
}

interface Lab{
    _id: string,
  name: string,
  address: string,
  contact: number,
  image: string,
  services: Array<number | string>,
  baseRate: number
}

interface UserModel{
    _id: string,
    name: string,
    email: string,
    password: string,
    profilePicture: string,
    __v: number,
    favoriteLabs: Array<Lab>,
    cart: string | Cart
}

interface UserFromApi{
    _id: string,
    name: string,
    email: string,
    password: string,
    profilePicture: string,
    __v: number,
    favoriteLabs: Array<any>,
    cart: string   
}

interface UserWithToken{
    user: UserFromApi,
    token: string,
    refreshToken: string
}

interface Cart{
    _id: string,
    services: Array<Service>
}

interface Service{
    _id: string,
    filmType: number,
    palette: string,
    scan: boolean,
    print: boolean,
    rollBack: boolean,
    price: number,
    __v: number
}

export {
    State,
    Lab,
    UserModel,
    UserFromApi,
    UserWithToken,
    Cart,
    Service
}