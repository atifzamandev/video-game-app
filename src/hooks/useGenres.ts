//import useData from "./useData";
import { useQuery } from "@tanstack/react-query";
import genres from "../data/genres";
import apiClient, { FetchResponse } from "../services/api-client";
export interface Genre {
  id: number;
  name: string;
  image_background: string;
}

const fetchGenres = async (): Promise<FetchResponse<Genre>> => {
  const response = await apiClient.get<FetchResponse<Genre>>("/genres");
  return response.data;
};
const useGenres = () => {
  const query = useQuery<FetchResponse<Genre>, Error>({
    queryKey: ["genres"],
    queryFn: fetchGenres,
    staleTime: Infinity,
    initialData: { count: genres.length, results: genres },
    refetchOnMount: false,
    refetchOnReconnect: false,
    refetchOnWindowFocus: false,
  });

  return query;
};

export default useGenres;
