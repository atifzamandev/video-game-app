//import useData from "./useData";
import { useQuery } from "@tanstack/react-query";
import platforms from "../data/platforms";
import apiClient, { FetchResponse } from "../services/api-client";
export interface Platform {
  id: number;
  name: string;
  slug: string;
}

const fetchPlatform = async (): Promise<FetchResponse<Platform>> => {
  const response = await apiClient.get<FetchResponse<Platform>>(
    "/platforms/lists/parents"
  );
  return response.data;
};
const usePlatform = () => {
  const query = useQuery({
    queryKey: ["platforms"],
    queryFn: fetchPlatform,
    staleTime: Infinity,
    initialData: { count: platforms.length, results: platforms },
  });

  return query;
};

export default usePlatform;
