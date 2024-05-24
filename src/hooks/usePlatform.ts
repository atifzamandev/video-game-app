//import useData from "./useData";
import platforms from "../data/platforms";
export interface Platform {
  id: number;
  name: string;
  slug: string;
}
const usePlatform = () => ({ data: platforms, isLoading: false, error: null });
//   {
//   return useData<Platform>("/platforms/lists/parents");
// };

export default usePlatform;
