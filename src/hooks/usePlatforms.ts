//import useData from "./useData";
import { useQuery } from "@tanstack/react-query";
import platforms from "../data/platforms";
import APIClient from "../services/api-client";

export interface Platform {
  id: number;
  name: string;
  slug: string;
}

const apiClient = new APIClient<Platform>("/platforms/lists/parents");

const usePlatforms = () => {
  const query = useQuery({
    queryKey: ["platforms"],
    queryFn: apiClient.getAll,
    staleTime: Infinity,
    initialData: platforms,
  });

  return query;
};

export default usePlatforms;
