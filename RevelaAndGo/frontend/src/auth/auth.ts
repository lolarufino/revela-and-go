import axios from "axios";

export default {
  async register(email: string, password: string) {
    const user = { email, password };
    const {data} = await axios.post("http://localhost:5000/api/register", user);
    return data;
  },
  async login(email: string, password: string) {
    const user = { email, password };
    const {data} = await axios.post("http://localhost:5000/api/login", user);
    return data;
  }
};