import Environments from "../env";
import axios from "axios";

export default class HttpService {
  url = Environments.apiUrl;
  constructor() {
    axios.interceptors.request.use(
      (config) => {
        const token = null;
        // const token = localStorage.getItem('auth-token');

        if (token) {
          config.headers["Authorization"] = `Bearer ${token}`;
        }

        config.headers = {
          Accept: "application/json",
          "Content-Type": "application/json",
        };

        return config;
      },
      (error) => {
        return Promise.reject(error);
      }
    );
  }

  async get(endpoint, id = "") {
    return await axios.get(`${this.url}/${endpoint}/${id}`);
  }

  async post(endpoint, obj) {
    return await axios.post(`${this.url}/${endpoint}`, obj);
  }

  async put(endpoint, obj, id) {
    return await axios.put(`${this.url}/${endpoint}/${id}`, obj);
  }

  async delete(endpoint, id) {
    return await axios.delete(`${this.url}/${endpoint}/${id}`);
  }
}
