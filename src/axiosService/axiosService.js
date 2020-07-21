import axios from "axios";
import URL from "../utils/URL";
class AxiosService {
  constructor() {
    const instance = axios.create({
      baseURL: URL
    });
    instance.interceptors.response.use(this.handleSuccess, this.handleError);
    this.instance = instance;
  }
  handleSuccess(response) {
    return response;
  }
  handleError(error) {
    return Promise.reject(error);
  }
  get(url) {
    return this.instance.get(url);
  }
  post(url, body) {
    return this.instance.post(url, body);
  }
}
export default new AxiosService();
