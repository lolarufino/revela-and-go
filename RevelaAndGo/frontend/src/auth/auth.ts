import axios from "axios";

export default {
  async register(email: any, password: any) {
    const user = { email, password };
    const {data} = await axios.post("http://localhost:5000/api/register", user);
    return data;
  },
  async login(email: any, password: any) {
    const user = { email, password };
    const {data} = await axios.post("http://localhost:5000/api/login", user);
    return data;
  }
};