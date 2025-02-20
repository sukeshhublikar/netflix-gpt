import { useEffect } from "react";
import BrowserHeader from "../components/BrowserHeader";

import { fetchNowPlayingMovies } from "@/store/moviesSlice";
import { useDispatch, useSelector } from "react-redux";
import { RootState, AppDispatch } from "@/store/appStore";
import MainContainer from "@/components/MainContainer";
import SecondaryContainer from "@/components/SecondaryContainer";

export default function Browse() {
  const dispatch: AppDispatch = useDispatch();
  const movies = useSelector((state: RootState) => state.movies);

  useEffect(() => {
    dispatch(fetchNowPlayingMovies());
  }, []);

  console.log(movies);
  return (
    <div>
      <BrowserHeader />
      <MainContainer />
      <SecondaryContainer />
    </div>
  );
}
