import { getGPTSuggestedMovies } from "@/services/api";
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { Movie } from "./moviesSlice";

export interface GPTSliceState {
  showGPTSearch: boolean;
  movieResults: Array<Array<Movie>>;
  searchLoader: boolean;
  searchError?: string | null;
}

const initialState: GPTSliceState = {
  showGPTSearch: false,
  movieResults: [],
  searchLoader: false,
  searchError: null,
};

export const fetchGPTSuggestedMovies = createAsyncThunk(
  "movies/gptSuggestedMovies",
  async (query: string) => {
    return await getGPTSuggestedMovies({ query });
  }
);

const gptSlice = createSlice({
  name: "gpt",
  initialState,
  reducers: {
    toggleGptSearch: (state) => {
      state.showGPTSearch = !state.showGPTSearch;
    },
    resetGPT: (state) => {
      state.movieResults = [];
      state.searchLoader = false;
      state.searchError = null;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchGPTSuggestedMovies.pending, (state) => {
      state.searchLoader = true;
    });
    builder.addCase(fetchGPTSuggestedMovies.fulfilled, (state, action) => {
      state.searchLoader = false;
      state.movieResults = action.payload as Array<Array<Movie>>;
    });
    builder.addCase(fetchGPTSuggestedMovies.rejected, (state, action) => {
      state.searchLoader = false;
      state.searchError = action.error.message || "Error";
    });
  },
});

export const { toggleGptSearch ,resetGPT} = gptSlice.actions;

export default gptSlice.reducer;
