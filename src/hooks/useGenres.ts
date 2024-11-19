//import useData from "./useData";
import { useQuery } from "@tanstack/react-query";
import genres from "../data/genres";
import APIClient, { FetchResponse } from "../services/api-client";
import { Genre } from "../types/Genre";

const apiClient = new APIClient<Genre>("/genres");
const useGenres = () => {
  const query = useQuery<FetchResponse<Genre>, Error>({
    queryKey: ["genres"],
    queryFn: apiClient.getAll,
    staleTime: Infinity,
    initialData: genres,
    refetchOnMount: false,
    refetchOnReconnect: false,
    refetchOnWindowFocus: false,
  });

  return query;
};

export default useGenres;
