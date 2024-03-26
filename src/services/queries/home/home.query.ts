import { useQuery } from "@tanstack/react-query";
import { getCategories } from "./home.api";

export const useGetCategories = () => {
  return useQuery({
    queryKey: ["getCategories"],
    queryFn: async () => {
      // Add a delay of 1000ms (1 second)
      await new Promise((resolve) => setTimeout(resolve, 1000));
      return getCategories();
    },
    
    
  });
};
