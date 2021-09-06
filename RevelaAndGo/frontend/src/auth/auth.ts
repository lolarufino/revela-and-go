import axios from "axios";

export default {
  register(email: any, password: any) {
    console.log(email, password);
    const user = { email, password };
    return axios.post("http://localhost:5000/api/register", user);
  },
  login(email: any, password: any) {
    const user = { email, password };
    return axios.post("http://localhost:5000/api/login", user);
  }
};