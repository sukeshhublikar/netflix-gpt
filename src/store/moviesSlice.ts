import { nowPlayingMovies } from "@/services/api";
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export interface Movie {
  id: number;
  title: string;
  original_title: string;
  poster_path: string;
  backdrop_path: string;
  overview: string;
}

export interface moviesState {
  nowPlayingMovies: Array<Movie>;
  nowPlayingMoviesLoading: boolean;
  nowPlayingMoviesError: string | null;
}

const initialState: moviesState = {
  nowPlayingMovies: [],
  nowPlayingMoviesLoading: true,
  nowPlayingMoviesError: null,
};

export const fetchNowPlayingMovies = createAsyncThunk(
  "movies/nowPlayingMovies",
  async () => {
    const response = await nowPlayingMovies();
    return response;
  }
);

const moviesSlice = createSlice({
  name: "movies",
  initialState,
  reducers: {
    addNowPlayingMovies: (state, action) => {
      if (!_.isEmpty(action.payload)) {
        state.nowPlayingMovies = action.payload;
      }
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchNowPlayingMovies.pending, (state) => {
      state.nowPlayingMoviesLoading = true;
    });
    builder.addCase(fetchNowPlayingMovies.fulfilled, (state, action) => {
      state.nowPlayingMoviesLoading = false;
      state.nowPlayingMovies = action.payload;
    });
    builder.addCase(fetchNowPlayingMovies.rejected, (state, action) => {
      state.nowPlayingMoviesLoading = false;
      state.nowPlayingMoviesError = action.error.message || "Error";
    });
  },
});

export const { addNowPlayingMovies } = moviesSlice.actions;

export default moviesSlice.reducer;
