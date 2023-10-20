import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
  data: [],
  status: "idle",
  error: null,
};

export const fetchData = createAsyncThunk("data/fetchData", async () => {
  try {
    const response = await axios.get(
      "http://68.178.162.203:8080/application-test-v1.1/books"
    );
    return response.data;
  } catch (error) {
    throw error;
  }
});

// Asynchronous thunk for the PUT request
export const updateData = createAsyncThunk(
  "data/updateData",
  async (dataToUpdate) => {
    try {
      console.log("data to update check->", dataToUpdate.id);
      const response = await axios.put(
        `http://68.178.162.203:8080/application-test-v1.1/books/${dataToUpdate.id}`,
        dataToUpdate
      );
      console.log("Update successful!", response.data);
      return response.data;
    } catch (error) {
      throw error;
    }
  }
);

// Asynchronous thunk for the POST request
export const postData = createAsyncThunk("data/postData", async (newData) => {
  try {
    const response = await axios.post(
      "http://68.178.162.203:8080/application-test-v1.1/books",
      newData
    );
    return response.data;
  } catch (error) {
    throw error;
  }
});

const dataSlice = createSlice({
  name: "data",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchData.pending, (state) => {
        state.status = "loading";
      })
      .addCase(fetchData.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.data = action.payload;
      })
      .addCase(fetchData.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message;
      });
  },
});

export default dataSlice.reducer;
