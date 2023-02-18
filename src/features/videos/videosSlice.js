import { createSlice } from "@reduxjs/toolkit";
import fetchData from "./videosAPI";
// initial state
const initialState = {
  loading: false,
  data: {
    id: 0,
    title: "",
    video_name: "",
  },
  error: "",
};
// crateSlice
const videosDataSlice = createSlice({
  name: "vidosdata",
  initialState,
  extraReducers: function (builder) {
    builder.addCase(fetchData.pending, (state = initialState, action) => {
      state.loading = true;
    });
    builder.addCase(fetchData.fulfilled, (state = initialState, action) => {
      state.data = action.payload;
    });
    builder.addCase(fetchData.rejected, (state = initialState, action) => {
      state.error = action.error.message;
    });
  },
});

export default videosDataSlice.reducer;
