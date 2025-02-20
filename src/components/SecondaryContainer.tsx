import { useSelector } from "react-redux";
import MoviesContainer from "./MoviesContainer";
import { RootState } from "@/store/appStore";
import MovieList from "./MovieList";

export default function SecondaryContainer() {
  const { nowPlayingMovies, nowPlayingMoviesLoading } = useSelector(
    (state: RootState) => state.movies
  );
  return (
    <div className="w-full bg-black pl-8 pr-1">
      <div className="-mt-[12%] z-50 relative bg-transparent">
        <MovieList
          title={"Now Playing"}
          movies={nowPlayingMovies || []}
          loading={nowPlayingMoviesLoading}
        />
      </div>
      <MoviesContainer
        title={"Popular"}
        url="https://api.themoviedb.org/3/movie/popular?page=1"
      />
      <MoviesContainer
        title={"Top Rated"}
        url="https://api.themoviedb.org/3/movie/top_rated?page=1"
      />
      <MoviesContainer
        title={"Upcoming"}
        url="https://api.themoviedb.org/3/movie/upcoming?page=1"
      />
    </div>
  );
}
