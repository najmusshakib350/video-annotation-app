import React from "react";
import { useParams } from "react-router-dom";

import AddVideoNote from "../components/video/AddVideoNote";
import JumpVideo from "../components/video/JumpVideo";
import LightandDark from "../components/variants/LightandDark";

function Video() {
  const routeParams = useParams();
  return (
    <div className="container mx-auto dark:bg-black">
      <div className="flex w-full justify-center items-center my-5">
        <h1 className="heading">Dark and Light Mode</h1>
        <LightandDark className="text-black text-2xl" />
      </div>
      <div className="flex py-4">
        <AddVideoNote id={routeParams.id} />
        <JumpVideo />
      </div>
    </div>
  );
}
export default Video;
