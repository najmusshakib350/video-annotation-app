import { createAsyncThunk } from "@reduxjs/toolkit";

// createAsyncThunk
const fetchData = createAsyncThunk("videos/data", async function () {
  const res = await fetch("http://localhost:3000/videos.json");
  const result = await res.json();
  return result;
});
export default fetchData;
