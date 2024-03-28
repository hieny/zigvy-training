import { useInfiniteQuery, useQuery } from "@tanstack/react-query";
import { getCategories, getPlaces } from "./home.api";

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

export const useGetPlaces = (initialSkip: number = 0, limit: number = 12) => {
  return useInfiniteQuery({
    queryKey: ["gePlaces"],
    queryFn: async ({ pageParam = initialSkip }) => {
      await new Promise((resolve) => setTimeout(resolve, 1000));
      return getPlaces(pageParam, limit);
    },
    getNextPageParam: (lastPage) => {
      if (lastPage?.pagination) {
        return lastPage.pagination.currentPage < lastPage.pagination.totalPage
          ? (lastPage.pagination.currentPage ) * 12
          : undefined;
      }
    },
    initialPageParam: initialSkip,
  });
};
