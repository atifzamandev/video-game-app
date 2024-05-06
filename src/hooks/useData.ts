import { AxiosRequestConfig, CanceledError } from "axios";
import { useEffect, useState } from "react";
import apiClient from "../services/api-client";

export interface FetchResponse<T> {
  count: number;
  results: T[];
}

const useData = <T>(
  endPoint: string,
  requestCongit?: AxiosRequestConfig,
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  deps?: any[]
) => {
  const [data, setData] = useState<T[]>([]);
  const [error, setError] = useState("");
  const [isLoading, setLoading] = useState(true);

  useEffect(
    () => {
      const controller = new AbortController();
      setLoading(true);
      apiClient
        .get<FetchResponse<T>>(endPoint, {
          signal: controller.signal,
          ...requestCongit,
        })
        .then((res) => {
          setTimeout(() => {
            setData(res.data.results);
            setLoading(false);
          }, 2000);
        })
        .catch((error) => {
          if (error instanceof CanceledError) return;
          setError(error.message);
          setLoading(false);
        });
      return () => controller.abort();
    },
    // eslint-disable-next-line react-hooks/exhaustive-deps
    deps ? [...deps] : []
  );
  return { data, error, isLoading };
};

export default useData;
