import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { FaAngleDoubleRight } from "react-icons/fa";
import { jumpVideoActions } from "./../../features/jump_video/jumpVideoSlice";

function JumpVideo() {
  // useSelector
  const state = useSelector(function (state) {
    return state.addNoteData;
  });
  // useSelector
  const jumpState = useSelector(function (state) {
    return state.jumpVideoData;
  });

  const dispatch = useDispatch();
  function handleVideoTime(skipTime) {
    const timeArray = skipTime.split(":");
    const hours = +timeArray[0] || 0;
    const minutes = +timeArray[1] || 0;
    const seconds = +timeArray[2] || 0;
    const time = hours * 3600 + minutes * 60 + seconds;

    if (jumpState.time === time) {
      dispatch(
        jumpVideoActions.handleVideoTime({
          time: "-1",
        })
      );
    }
    dispatch(
      jumpVideoActions.handleVideoTime({
        time: time,
      })
    );
  }
  function CheckNote() {
    if (state.length === 0) {
      return "";
    } else {
      return state.map(function (item, i) {
        return (
          <div
            key={Math.random() + 1}
            className="flex flex-row justify-start items-start mb-2"
          >
            <p className="basis-3/12  paragraph">{item.note_timestams}</p>
            <p className="basis-8/12  paragraph">{item.add_note}</p>
            <button
              className="basis-1/12 btn"
              type="button"
              onClick={() => handleVideoTime(item.note_timestams)}
            >
              <FaAngleDoubleRight />
            </button>
          </div>
        );
      });
    }
  }
  return <div className="basis-1/2 h-auto px-4 ">{CheckNote()}</div>;
}
export default JumpVideo;
