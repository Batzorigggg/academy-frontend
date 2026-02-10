import { usePopularMovies } from "../hooks/usePopularMovies";
import { ManyMovies } from "@/components/ui/manymovies";

export const PopularMovies = () => {
  const { movies, loading } = usePopularMovies();

  if (loading) {
    return <h1>Unshij bn</h1>;
  }

  return (
    <div className="grid grid-cols-4 gap-4 max-w-200 mx-auto">
      {movies?.map((movie) => {
        return <ManyMovies movie={movie}></ManyMovies>;
      })}
    </div>
  );
};
