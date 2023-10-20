// store.js
import { configureStore } from "@reduxjs/toolkit";
import dataReducer from "./dataSlice";
import searchReducer from "./searchSlice";
import findReducer from "./findSlice";
import sortReducer from "./sortSlice";

const store = configureStore({
  reducer: {
    data: dataReducer,
    search: searchReducer,
    find: findReducer,
    sort: sortReducer,
  },
});

export default store;
