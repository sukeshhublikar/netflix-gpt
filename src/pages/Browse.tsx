import { useEffect } from "react";
import BrowserHeader from "../components/BrowserHeader";

import { fetchNowPlayingMovies } from "@/store/moviesSlice";
import { useDispatch } from "react-redux";
import { AppDispatch } from "@/store/appStore";
import MainContainer from "@/components/MainContainer";
import SecondaryContainer from "@/components/SecondaryContainer";

export default function Browse() {
  const dispatch: AppDispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchNowPlayingMovies());
  }, []);

  return (
    <div className="bg-[#141414]">
      <BrowserHeader />
      <MainContainer />
      <SecondaryContainer />
    </div>
  );
}
