import { useQuery } from "@tanstack/react-query";
import type { IMovie } from "../type";

export const usePopularMovies = () => {
  const { data, isLoading, isError } = useQuery<IMovie[]>({
    queryKey: ["movies", "popular"],
    queryFn: async () => {
      const res = await fetch("http://localhost:3000/movie/popular");
      if (!res.ok) throw new Error("Failed to fetch movies");
      return res.json();
    },
  });

  return { movies: data, loading: isLoading, isError };
};
