import axios from "axios";

export default {
  async register(email: string, password: string) {
    const userCart = await axios.post(`${process.env.VUE_APP_API_URL}/cart`);
    const user = { email, password };
    const userWithCart = { ...user, cart: userCart.data._id };
    const {data} = await axios.post(process.env.VUE_APP_REGISTER_URL, userWithCart);
    return data;
  },
  async login(email: string, password: string) {
    const user = { email, password };
    const {data} = await axios.post(process.env.VUE_APP_LOGIN_URL, user);
    return data;
  }
};