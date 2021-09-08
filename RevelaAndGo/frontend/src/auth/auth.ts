import axios from "axios";

export default {
  async register(email: string, password: string) {
    const userCart = await axios.post('http://localhost:5000/api/cart');
    const user = { email, password };
    const userWithCart = { ...user, cart: userCart.data._id };
    const {data} = await axios.post("http://localhost:5000/api/register", userWithCart);
    return data;
  },
  async login(email: string, password: string) {
    const user = { email, password };
    const {data} = await axios.post("http://localhost:5000/api/login", user);
    return data;
  }
};