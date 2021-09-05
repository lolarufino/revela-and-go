import axios from "axios";

const ENDPOINT_PATH = "http://localhost:5000/api/";

export default {
  register(email: any, password: any) {
    const user = { email, password };
    return axios.post(ENDPOINT_PATH + "regiser", user);
  },
  login(email: any, password: any) {
    const user = { email, password };
    return axios.post(ENDPOINT_PATH + "login", user);
  }
};