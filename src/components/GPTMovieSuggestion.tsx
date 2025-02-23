import { AppDispatch, RootState } from "@/store/appStore";
import { useDispatch, useSelector } from "react-redux";
import MovieList from "./MovieList";

import { Movie } from "@/store/moviesSlice";
import Result from "../common/Result";
import useFormatter from "@/hooks/useFormatter";
import { useEffect } from "react";
import { resetGPT } from "@/store/gptSlice";

export default function GPTMovieSuggestion() {
  const { formatMessage: f } = useFormatter();
  const dispatch: AppDispatch = useDispatch();
  const {
    searchError = "",
    movieResults = [],
  }: { searchError: string | null; movieResults: Array<Array<Movie>> } =
    useSelector((state: RootState) => state.gpt);

    useEffect(() => {
      return () => {
        dispatch(resetGPT());
      };
    }, []);

    if (searchError !== null) {
      return <Result title={f({ id: "error_gpt_search" })} />;
    }

  if (movieResults.length === 0) {
    return <Result title={f({ id: "please_search_genre" })} />;
  }
 
  return (
    <div className="bg-[#000000] bg-opacity-50 px-4 h-[calc(100vh-250px)] overflow-y-auto">
      {movieResults &&
        movieResults.map((movies: Array<Movie>) => {
          const movie = movies[0];
          return (
            <MovieList
              key={movie.title}
              title={movie.title}
              movies={movies}
              loading={false}
            />
          );
        })}
    </div>
  );
}
