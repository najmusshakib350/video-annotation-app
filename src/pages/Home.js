import React from "react";
import Card from "../components/home/Card";
import LightandDark from "../components/variants/LightandDark";

function Home() {
  return (
    <div className="container mx-auto dark:bg-black">
      <div className="flex w-full justify-center items-center my-5">
        <h1 className="heading">Dark and Light Mode</h1>
        <LightandDark />
      </div>
      <Card />
    </div>
  );
}
export default Home;
