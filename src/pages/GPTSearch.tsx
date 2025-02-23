import ErrorBoundary from "@/common/ErrorBoundary";
import GPTMovieSuggestion from "@/components/GPTMovieSuggestion";
import GPTSearchBar from "@/components/GPTSearchBar";
import { NETFLIX_BG_BANNER } from "@/services/constant";

export default function GPTSearch() {
  return (
    <ErrorBoundary>
      <div className="h-full">
        <div className="w-full absolute left-0 -z-10 top-[6%] h-screen">
          <img
            className="h-full w-full"
            alt="netflix-banner"
            src={NETFLIX_BG_BANNER}
          />
        </div>
        <GPTSearchBar />
        <GPTMovieSuggestion />
      </div>
    </ErrorBoundary>
  );
}
