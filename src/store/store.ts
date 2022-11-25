import { configureStore } from "@reduxjs/toolkit";
import { combineReducers } from "@reduxjs/toolkit";
import { getPersistConfig } from "redux-deep-persist";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
import logger from "redux-logger";
//
import popularMovie from "./reducers/fetchMovieReducer";

const reducers = combineReducers({
  movie: popularMovie,
});

export const store = configureStore({
  reducer: reducers,
});
