import { createSlice } from "@reduxjs/toolkit";
// initial state
const initialState = {
  time: "-1",
};
// crateSlice
const jumpVideoSlice = createSlice({
  name: "jumpVideoSlice",
  initialState,
  reducers: {
    handleVideoTime: (state, action) => {
      state.time = action.payload.time;
    },
  },
});

export const jumpVideoReducer = jumpVideoSlice.reducer;
export const jumpVideoActions = jumpVideoSlice.actions;
