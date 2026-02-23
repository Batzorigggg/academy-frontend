import { useQuery } from "@tanstack/react-query";
import type { IComment } from "../type";

export const useGetComment = () => {
  const { data, isLoading, isError } = useQuery<IComment[]>({
   async () => {
      return fetch(
        `http://localhost:3000/movie/movies/${id}/comments`,
      ).then((res) => {
        return res.json();
      });
    },
  });

  return { movies: data, loading: isLoading, isError };
};
