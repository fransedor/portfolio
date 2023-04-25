import React from "react";
import windowOpenAnimation from "../animations/windowOpen";
import "../animations/animation.css"

const IntroPage = () => {
  return (
    <div className="flex grow w-full justify-center items-center h-screen font-bold text-6xl relative min-w-0">
      <div id="window-left" className="shrink text-end flex justify-center flex-col relative min-w-0 min-h-0">
        <p>PORTO</p>
        <p>FRAN</p>
        <p>RAVE</p>
      </div>
      <div id="divisor"></div>
      <div id="window-right" className="shrink flex-col flex justify-center relative min-w-0 min-h-0">
        <p>FOLIO</p>
        <p>SEDO</p>
        <p>LINO</p>
      </div>
      <button
        id="start-button"
        className="absolute left-1/2 -translate-x-1/2 bottom-56 text-white bg-black px-8 py-2 rounded-lg"
        onClick={() => windowOpenAnimation()}
      >
        START
      </button>
    </div>
  );
};

export default IntroPage;
