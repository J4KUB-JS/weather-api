import axios, { AxiosResponse, Method } from "axios";

export class APIService {
  protected readonly baseUrl: string;
  protected readonly baseGoogleUrl: string;

  constructor() {
    this.baseUrl = import.meta.env.VITE_API_BASE_URL as string;
    this.baseGoogleUrl = import.meta.env.VITE_GOOGLE_API_BASE_URL as string;
  }

  public async request(
    method: Method,
    url: string,
    data: object
  ): Promise<AxiosResponse> {
    return axios.request({
      method: method,
      url: this.baseUrl + url,
      data: data,
    });
  }

  public async get<T>(url: string): Promise<AxiosResponse<T>> {
    return this.request("GET", `${url}`, {});
  }

  public async requestGoogle(
    method: Method,
    url: string,
    data: object
  ): Promise<AxiosResponse> {
    return axios.request({
      method: method,
      url: this.baseGoogleUrl + url,
      data: data,
    });
  }

  public async getGoogle<T>(url: string): Promise<AxiosResponse<T>> {
    return this.requestGoogle(
      "GET",
      `${url}&key=${import.meta.env.VITE_GOOGLE_API_KEY}`,
      {}
    );
  }
}

let apiService: APIService | null = null;

export default function getAPIService(): APIService {
  if (apiService === null) {
    apiService = new APIService();
  }

  return apiService as APIService;
}
