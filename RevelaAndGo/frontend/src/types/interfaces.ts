interface State{
    labs: Array<Lab>,
    user: UserModel | UserFromApi,
    userId: string,
    cartId: string,
    serviceId: string,
    token: string,
    refreshToken: string,
    lab: object,
    finalService: Array<number | string | any>,
    service: object,
    price: number,
    isLoggedIn: boolean
}

interface Lab{
  name: string,
  address: string,
  contact: number,
  image: string,
  services: Array<number | string>,
  baseRate: number
}

interface UserModel{
    name: string,
    email: string,
    password: string,
    profilePicture: string,
    favoriteLabs: Array<Lab>,
    cart: string | Cart
}

interface UserFromApi{
    _id: string,
    name: string,
    email: string,
    password: number,
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
    filmType: number,
    palette: string,
    scan: boolean,
    print: boolean,
    rollBack: boolean,
    price: number
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