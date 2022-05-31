import axios from "axios";
class RestApi {
  baseUrl: any;
  API: any;
  constructor(baseUrl: String) {
    this.baseUrl = baseUrl;
    this.API = axios.create({
      baseURL: this.baseUrl,
    });
    this.API.interceptors.request.use(
      (config: any) => {
        config.headers["Content-Type"] = "application/json";
        config.headers["Authorization"] =
          "Bearer " + localStorage.getItem("token");
        return config;
      },
      (error: Error) => {
        return Promise.reject(error);
      }
    );
    this.API.interceptors.response.use(
      (response: any) => {
        if (response.status === 200) {
          return response;
        }
        return Promise.reject(response);
      },
      (error: Error) => {
        return Promise.reject(error);
      }
    );
  }

  get(url: string, config: any) {
    return this.API.get(this.baseUrl + url, config);
  }
  post(url: string, data: any, config: any) {
    return this.API.default.post(this.baseUrl + url, data, config);
  }
  put(url: string, data: any, config: any) {
    return this.API.default.put(this.baseUrl + url, data, config);
  }
  delete(url: string, config: any) {
    return this.API.default.delete(this.baseUrl + url, config);
  }
}
export default RestApi;
