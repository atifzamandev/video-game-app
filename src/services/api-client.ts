import axios, { AxiosRequestConfig } from "axios";

export interface FetchResponse<T> {
  count: number;
  next: string | null;
  results: T[];
}

const axiosInstance = axios.create({
  baseURL: "https://api.rawg.io/api",
  params: {
    key: import.meta.env.VITE_API_KEY,
  },
});

class APIClient<T> {
  endpoint: string;

  constructor(endpoit: string) {
    this.endpoint = endpoit;
  }

  getAll = async (config: AxiosRequestConfig): Promise<FetchResponse<T>> => {
    const response = await axiosInstance.get<FetchResponse<T>>(
      this.endpoint,
      config
    );
    return response.data;
  };
}

export default APIClient;
