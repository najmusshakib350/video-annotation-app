import React, { useEffect, useState, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addNoteActions } from "./../../features/add_note/addNoteSlice";

function AddVideoNote({ id }) {
  // useSelector
  const state = useSelector(function (state) {
    return state.jumpVideoData;
  });

  const dispatch = useDispatch();

  // useState
  const [singleVideo, setSingleVideo] = useState();
  const [note, setNote] = useState({
    add_note: "",
    note_timestams: "",
  });
  const { add_note, note_timestams } = note;
  const player = useRef();
  useEffect(function () {
    const videos = JSON.parse(localStorage.getItem("videos"));
    const video = videos.find(function (item) {
      return item.id === id;
    });
    setSingleVideo({
      ...video,
    });
  }, []);

  function videoElement() {
    if (
      singleVideo &&
      typeof singleVideo === "object" &&
      singleVideo.constructor === Object
    ) {
      return (
        <video muted controls autoPlay ref={player}>
          <source
            src={`http://localhost:3000/assets/videos/${singleVideo.video_name}`}
            type="video/mp4"
          />
        </video>
      );
    } else {
      return <p>Loading...</p>;
    }
  }
  function handleChange(event) {
    setNote({
      ...note,
      [event.target.name]: event.target.value,
    });
  }
  function handleAddNote() {
    dispatch(
      addNoteActions.handleAddNote({
        add_note: add_note,
        note_timestams: note_timestams,
      })
    );
    setNote({
      add_note: "",
      note_timestams: "",
    });
  }
  // check video skipTime
  if (+state.time >= 0) {
    player.current.currentTime = +state.time;
  }

  return (
    <div className="basis-1/2 h-auto px-4">
      {videoElement()}
      <form className="mt-4">
        <input
          className="mb-2 px-8  w-full border  py-2 text-gray-700 focus:outline-none items-center"
          type="text"
          placeholder="Add note"
          name="add_note"
          value={add_note}
          onChange={handleChange}
        />
        <input
          className="mb-2 px-8  w-full border  py-2 text-gray-700 focus:outline-none items-center"
          type="text"
          placeholder="Set note timestams(00:00:00)"
          name="note_timestams"
          value={note_timestams}
          onChange={handleChange}
        />
        <button
          className="w-full mt-6 py-2  rounded bg-blue-500 text-gray-100  focus:outline-none "
          type="button"
          onClick={handleAddNote}
        >
          Add Note
        </button>
      </form>
    </div>
  );
}
export default AddVideoNote;
