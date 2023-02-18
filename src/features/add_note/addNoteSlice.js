import { createSlice } from "@reduxjs/toolkit";
// initial state
const initialState = [];
// crateSlice
const addNoteSlice = createSlice({
  name: "addNoteSlice",
  initialState,
  reducers: {
    handleAddNote: (state, action) => {
      state.push(action.payload);
    },
  },
});

export const addNoteReducer = addNoteSlice.reducer;
export const addNoteActions = addNoteSlice.actions;
