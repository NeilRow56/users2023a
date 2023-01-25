"use client";
import { useInfiniteQuery } from "@tanstack/react-query";
// Fetch function
import { fetchMovies } from "./helperMovies";

export const useFetchMovies = (search) => {
  return useInfiniteQuery(
    ["movies", search],
    ({ pageParam = 1 }) => fetchMovies(search, pageParam),
    {
      getNextPageParam: (lastPage) => {
        if (lastPage.page < lastPage.total_pages) {
          return lastPage.page + 1;
        }

        return undefined;
      },
      refetchOnWindowFocus: false,
    }
  );
};
