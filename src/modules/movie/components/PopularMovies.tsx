import { usePopularMovies } from "../hooks/usePopularMovies";
import { MovieCard } from "@/components/ui/moviecard";

export const PopularMovies = () => {
  const { movies, loading } = usePopularMovies();

  if (loading) {
    return <h1>Unshij bn</h1>;
  }

  return (
    <div className="grid grid-cols-4 gap-4 max-w-[800px] mx-auto">
      {movies?.map((movie) => {
        return <MovieCard movie={movie}></MovieCard>;
      })}
    </div>
  );
};
