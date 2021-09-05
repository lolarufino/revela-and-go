import axios from "axios";

const ENDPOINT_PATH = "http://localhost:5000/api/";

export default {
  register(email: any, password: any) {
    console.log(email, password);
    const user = { email, password };
    return axios.post(ENDPOINT_PATH + "register", user);
  },
  login(email: any, password: any) {
    const user = { email, password };
    return axios.post(ENDPOINT_PATH + "login", user);
  }
};