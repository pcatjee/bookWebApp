// store.js
import { configureStore } from "@reduxjs/toolkit";
import dataReducer from "./dataSlice";
import searchReducer from "./searchSlice";

const store = configureStore({
  reducer: {
    data: dataReducer,
    search: searchReducer,
  },
});

export default store;
