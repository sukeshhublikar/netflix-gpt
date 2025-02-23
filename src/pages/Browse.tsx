import { useEffect } from "react";
import BrowserHeader from "../components/BrowserHeader";

import { fetchNowPlayingMovies } from "@/store/moviesSlice";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "@/store/appStore";
import MainContainer from "@/components/MainContainer";
import SecondaryContainer from "@/components/SecondaryContainer";
import GPTSearch from "@/pages/GPTSearch";
import ErrorBoundary from "@/common/ErrorBoundary";

export default function Browse() {
  const dispatch: AppDispatch = useDispatch();

  const showGPTSearch = useSelector(
    (state: RootState) => state.gpt.showGPTSearch
  );
  const nowPlayingMovies = useSelector(
    (state: RootState) => state.movies.nowPlayingMovies
  );
  useEffect(() => {
    if (nowPlayingMovies.length === 0) {
      dispatch(fetchNowPlayingMovies());
    }
  }, []);

  return (
    <ErrorBoundary>
      <div className="h-full overflow-y-auto">
        <BrowserHeader />
        {showGPTSearch ? (
          <GPTSearch />
        ) : (
          <div key="main" className="overflow-y-auto h-screen">
            <MainContainer />
            <SecondaryContainer />
          </div>
        )}
      </div>
    </ErrorBoundary>
  );
}
