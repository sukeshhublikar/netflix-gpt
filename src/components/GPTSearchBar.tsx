import { AppDispatch, RootState } from "@/store/appStore";
import { fetchGPTSuggestedMovies } from "@/store/gptSlice";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import useFormatter from "@/hooks/useFormatter";
import Spinner from "@/common/Spinner";

export default function GPTSearchBar() {
  const [query, setQuery] = useState("");
  const dispatch: AppDispatch = useDispatch();
  const { formatMessage: f } = useFormatter();
  const loader = useSelector((state: RootState) => state.gpt.searchLoader);
  const onSearch = () => {
    if (query.trim().length !== 0) {
      dispatch(fetchGPTSuggestedMovies(query));
    }
  };

  return (
    <div className="flex justify-center py-4  px-4 pt-[8%] max-sm:pt-[40%]">
      <div className="flex gap-2 border rounded py-1.5 mt-2 px-2 w-[60%] max-sm:w-full">
        <div className="py-2 pr-1.5 text-white ">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path stroke="none" d="M0 0h24v24H0z" fill="none" />
            <path d="M10 10m-7 0a7 7 0 1 0 14 0a7 7 0 1 0 -14 0" />
            <path d="M21 21l-6 -6" />
          </svg>
        </div>
        <input
          value={query}
          type="text"
          className="py-2 px-4 rounded  focus:outline-none w-[90%]"
          placeholder={f({ id: "GPTSearchPlaceholder" })}
          onChange={(e) => setQuery(e.target.value)}
          onKeyDown={(e) => {
            if (e.key === "Enter") {
              onSearch();
            }
          }}
          disabled={loader}
        />

        <button
          className="flex py-1 px-4 bg-[#d9242e]  rounded text-white items-center"
          onClick={() => onSearch()}
          disabled={loader}
        >
          {loader ? (
            <span className="pr-2">
              <Spinner />
            </span>
          ) : null}
          {f({ id: "search" })}
        </button>
      </div>
    </div>
  );
}
