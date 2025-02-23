import { RootState } from "@/store/appStore";
import { useSelector } from "react-redux";
import VideoBackground from "./VideoBackground";
import VideoTitle from "./VideoTitle";
import React, { useMemo } from "react";
import { Movie } from "@/store/moviesSlice";

export default function MainContainer() {
  const movies = useSelector(
    (state: RootState) => state.movies.nowPlayingMovies
  );

  const movie: Movie | undefined = useMemo(() => {
    if (movies?.length > 0) {
      return movies[0];
    }
  }, [movies]);

  if (movies?.length === 0) {
    return null;
  }

  return (
    <div className="relative pt-[3%]">
      {movie && (
        <React.Fragment key={movie.id}>
          <VideoTitle
            title={movie.original_title}
            img={movie.poster_path}
            overview={movie.overview}
          />
          <VideoBackground movieId={movie.id} />
        </React.Fragment>
      )}
    </div>
  );
}
