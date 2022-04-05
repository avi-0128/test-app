import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

const initialState = {
  loading: false,
  movies: [],
  error: "",
};

export const getMovies = createAsyncThunk("movies/getMovie", async (values) => {
  const response = await fetch(
    `http://www.omdbapi.com/?apikey=14f1c93e&s=${values[0]}&page=${values[1]}`
  );
  const responseJson = await response.json();
  // console.log(response)
  return [responseJson.Search, responseJson.totalResults];
});

const moviesSlice = createSlice({
  name: "movies",
  initialState: initialState,
  extraReducers: (builder) => {
    builder
      .addCase(getMovies.pending, (state, action) => {
        state.loading = true;
      })
      .addCase(getMovies.fulfilled, (state, action) => {
        state.loading = false;
        state.movies = action.payload;
      })
      .addCase(getMovies.rejected, (state, action) => {
        state.loading = false;
        state.error = "Something went wrong";
      });
  },
});

export default moviesSlice.reducer;
