import axios, { AxiosInstance, AxiosResponse, AxiosError } from "axios";

export abstract class ApiService {
  protected readonly api: AxiosInstance;

  public constructor() {
    this.api = axios.create({
      baseURL: process.env.VUE_APP_API_URL
    });

    this.responseInterceptor();
  }

  private responseInterceptor = () => {
    this.api.interceptors.response.use(this.successHandler, this.errorHandler);
  };

  private successHandler = (data: AxiosResponse) => data;

  protected errorHandler = (error: AxiosError) => Promise.reject(error);
}
