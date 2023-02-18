import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import fetchData from "../../features/videos/videosAPI";
import { NavLink } from "react-router-dom";
import { FaUser } from "react-icons/fa";
//import video1 from "./../../assets/videos/video-1.mp4";
function Card() {
  // useSelector
  const state = useSelector(function (state) {
    return state;
  });
  // useDispatch
  const dispatch = useDispatch();
  useEffect(function () {
    dispatch(fetchData());
  }, []);

  function cardElements() {
    if (state.videosData.loading === false) {
      return "Loading....";
    } else if (state.videosData.error) {
      return state.videosData.error;
    } else if (Array.isArray(state.videosData.data)) {
      // store data into localstorage
      localStorage.setItem("videos", JSON.stringify(state.videosData.data));
      // return jsx result
      const result = state.videosData.data.map((item, i) => {
        return (
          <div
            key={Math.random() + i}
            className="flex flex-col justify-between  w-1/3  h-80 px-2"
          >
            <video muted controls>
              <source
                src={`http://localhost:3000/assets/videos/${item.video_name}`}
                type="video/mp4"
              />
            </video>
            <p className="px-5 paragraph">{item.title}</p>
            <div className="flex justify-between items-center px-5">
              <FaUser className="h-8 w-8 dark:text-white" />
              <NavLink to={`/video/${item.id}`} className="btn">
                Play
              </NavLink>
            </div>
          </div>
        );
      });
      return result;
    }
  }
  return (
    <div className="flex justify-between w-full flex-wrap py-4">
      {cardElements()}
    </div>
  );
}
export default Card;
