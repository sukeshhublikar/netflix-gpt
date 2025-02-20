import { RootState } from "@/store/appStore";
import { useSelector } from "react-redux";
import VideoBackground from "./VideoBackground";
import VideoTitle from "./VideoTitle";
import { useMemo } from "react";
import { Movie } from "@/store/moviesSlice";

export default function MainContainer() {
  const movies = useSelector(
    (state: RootState) => state.movies.nowPlayingMovies
  );

  const movie: Movie = useMemo(() => {
    return movies[0] || {};
  }, [movies]);

  if (movies.length === 0) {
    return null;
  }

  return (
    <div className="relative">
      <VideoTitle
        title={movie.original_title}
        img={movie.poster_path}
        overview={movie.overview}
      />
      <VideoBackground movieId={movie.id} />
    </div>
  );
}
