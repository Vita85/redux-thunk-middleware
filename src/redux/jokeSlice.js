import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const url = "https://official-joke-api.appspot.com/random_joke";

export const fetchJokes = createAsyncThunk("jokes/fetchJokes", async () => {
  const response = await axios.get(url);
  const data = response.data;
  return data;
});

const jokeSlice = createSlice({
  name: "jokes",
  initialState: {
    data: null,
    loading: false,
    error: null,
    status: "",
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchJokes.pending, (state) => {
        state.loading = true;
        state.error = null;
        state.status = "pending";
      })
      .addCase(fetchJokes.fulfilled, (state, action) => {
        state.loading = false;
        state.error = null;
        state.status = "succeeded";
        state.data = action.payload;
      })
      .addCase(fetchJokes.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message ?? "Unknown Error";
        state.status = "failed";
      });
  },
});

export default jokeSlice.reducer;
