import React, { useState, useEffect } from "react";
import { FaSun } from "react-icons/fa";

function LightandDark() {
  const [darkToggle, setDarkToggle] = useState(false);
  useEffect(
    function () {
      document.querySelector("body").classList.toggle("dark");
    },
    [darkToggle]
  );
  function handleDarkandLightMode() {
    setDarkToggle(!darkToggle);
  }
  return (
    <FaSun
      className="cursor-pointer text-amber-400 text-2xl dark:text-green-400"
      onClick={handleDarkandLightMode}
    />
  );
}

export default LightandDark;
