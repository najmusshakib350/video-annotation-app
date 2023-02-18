import { configureStore } from "@reduxjs/toolkit";
import logger from "redux-logger";
import videosDataSlice from "./../features/videos/videosSlice";
import { addNoteReducer } from "./../features/add_note/addNoteSlice";
import { jumpVideoReducer } from "./../features/jump_video/jumpVideoSlice";
// configure store

const store = configureStore({
  reducer: {
    videosData: videosDataSlice,
    addNoteData: addNoteReducer,
    jumpVideoData: jumpVideoReducer,
  },
  middleware: (getDefaultMiddleware) => {
    return getDefaultMiddleware().concat(logger);
  },
});

export default store;
