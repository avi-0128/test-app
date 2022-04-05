import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./Features/userSlice";
import moviesReducer from "./Features/moviesSlice";

export default configureStore({
  reducer: {
    user: userReducer,
    movies: moviesReducer,
  },
});
