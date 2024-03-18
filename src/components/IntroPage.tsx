import windowOpenAnimation from "../animations/windowOpen";
import "../animations/animation.css";
import { useState } from "react";
import MenuPage from "./MenuPage";

const IntroPage = () => {
  const [openMenuPage, setOpenMenuPage] = useState(false);

  return (
    <>
      {openMenuPage ? (
        <MenuPage />
      ) : (
        <div className="flex grow w-full justify-center items-center h-screen font-bold text-6xl relative min-w-0">
          <div
            id="window-left"
            className="shrink text-end flex justify-center flex-col relative min-w-0 min-h-0"
          >
            <p>FRANSEDO</p>
            <p>RAVELINO</p>
          </div>
          <div id="divisor" className="absolute h-full top-0 left-50 -translate-x-1/2"></div>
          <button
            id="start-button"
            className="absolute left-1/2 -translate-x-1/2 bottom-56 text-white bg-black px-8 py-2 rounded-lg"
            onClick={() => {
              windowOpenAnimation();
							setTimeout(() => {
								setOpenMenuPage(true);
							}, 1000)
            }}
          >
            START
          </button>
        </div>
      )}
    </>
  );
};

export default IntroPage;
