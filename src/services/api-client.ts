import axios, { AxiosRequestConfig } from 'axios'

export interface FetchResponse<T> {
  count: number
  next: string | null
  results: T[]
}

const axiosInstance = axios.create({
  baseURL: 'https://api.rawg.io/api',
  params: {
    key: import.meta.env.VITE_API_KEY,
  },
})

class APIClient<T> {
  endpoint: string

  constructor(endpoit: string) {
    this.endpoint = endpoit
  }

  getAll = async (config: AxiosRequestConfig): Promise<FetchResponse<T>> => {
    const { data } = await axiosInstance.get<FetchResponse<T>>(
      this.endpoint,
      config
    )
    return data
  }

  get = async (id: number | string): Promise<T> => {
    const { data } = await axiosInstance.get<T>(this.endpoint + '/' + id)
    return data
  }
}

export default APIClient
