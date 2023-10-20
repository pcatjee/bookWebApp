import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

// Define an async thunk to fetch data using query parameters
export const fetchBooksByTitle = createAsyncThunk(
  "books/fetchByTitle",
  async ({ dispatch, title, sortingOrder }) => {
    try {
      const response = await axios.get(
        "http://68.178.162.203:8080/application-test-v1.1/books",
        {
          params: {
            title: title,
            DIR: sortingOrder,
          },
        }
      );
      return response.data;
    } catch (error) {
      throw new Error("Network response was not ok");
    }
  }
);

// Create a slice to manage the state
const findSlice = createSlice({
  name: "find",
  initialState: {
    data: [],
    status: "idle",
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchBooksByTitle.pending, (state) => {
        state.status = "loading";
      })
      .addCase(fetchBooksByTitle.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.data = action.payload;
      })
      .addCase(fetchBooksByTitle.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message;
      });
  },
});

export default findSlice.reducer;
