import { createAsyncThunk } from "@reduxjs/toolkit";

import { BASE_URL } from "../../constant/BASE_URL";
import { GlobalGet } from "../../utilities/Fetcher";

export const fetchPopularMovie: any = createAsyncThunk<any, any>("movie/popular", async (name, { rejectWithValue }) => {
  try {
    const response: any = await GlobalGet({ url: `${BASE_URL}/movie/popular?api_key=${import.meta.env.VITE_MOVIE_KEY}` });
    console.log(response);
    return response;
  } catch (error) {
    console.log(error);
    rejectWithValue(error);
  }
});
