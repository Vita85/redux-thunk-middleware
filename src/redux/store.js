import { configureStore } from "@reduxjs/toolkit";
import jokeSlice from "./jokeSlice";

const store = configureStore({
  reducer: {
    jokes: jokeSlice,
  },
});

export default store;