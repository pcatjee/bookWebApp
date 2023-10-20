import { createSlice } from "@reduxjs/toolkit";

const sortSlice = createSlice({
  name: "sort",
  initialState: "DESC",
  reducers: {
    setSortingOrder: (state, action) => {
      return action.payload;
    },
  },
});

export const { setSortingOrder } = sortSlice.actions;
export default sortSlice.reducer;
