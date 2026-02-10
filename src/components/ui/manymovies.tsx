import type { IMovie } from "@/modules/movie/type";
import { Calendar } from "lucide-react";
import { useState } from "react";

const defaultPoster =
  "https://www.plex.tv/wp-content/uploads/2025/03/Watch-Free-Hero-2048x1152-1.png";

export const ManyMovies = ({ movie }: { movie: IMovie }) => {
  const [poster, setPoster] = useState(movie.poster || defaultPoster);

  return (
    <div className="bg-slate-800/50 border border-slate-700/50 rounded-lg">
      <div className="w-full relative aspect-2/3">
        <img
          src={poster}
          alt={movie.title}
          onError={() => setPoster(defaultPoster)}
          className="absolute inset-0 w-full h-full rounded-lg object-cover"
        />
      </div>

      <h4 className="font-bold text-lg">{movie.title}</h4>
      <p className="font-normal line-clamp-2">{movie.plot}</p>
      <span className="flex gap-2 items-center">
        <Calendar className="size-4" />
        {movie.year}
      </span>
    </div>
  );
};
