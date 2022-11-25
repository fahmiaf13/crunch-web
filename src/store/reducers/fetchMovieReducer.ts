import { createSlice } from "@reduxjs/toolkit";
import { fetchPopularMovie } from "../actions/fetchMovieAction";

const initialState = {
  data: [],
  error: null,
  loading: false,
  success: false,
};

const popularMovie = createSlice({
  name: "PopularMovie",
  initialState,
  reducers: {},
  extraReducers: {
    [fetchPopularMovie.pending]: (state: any) => {
      state.loading = true;
    },
    [fetchPopularMovie.fulfilled]: (state: any, { payload }: any) => {
      state.loading = true;
      state.data = payload;
    },
    [fetchPopularMovie.rejected]: (state: any) => {
      state.loading(false);
      state.error(true);
    },
  },
});

export default popularMovie.reducer;
