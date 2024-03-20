import { modalOpenAnimation, removeModalOpenAnimation } from "../animations/modalOpen";
import Modal from "./Modal";
import { useState } from "react";
import "../animations/MenuPage/menu.css";

type ModalType = "experience" | "projects" | "contact";
const MenuPage = () => {
  const [modalType, setModalType] = useState<ModalType | undefined>(undefined);
  console.log(modalType);
  return (
    <>
      <div className="w-screen overflow-hidden h-screen bg-black flex flex-col items-center justify-center sm:items-stretch sm:justify-normal">
        <button
          onClick={() => {
            removeModalOpenAnimation();
            //setModalType("experience")
          }}
          className="sm:h-full cursor-pointer text-white text-3xl p-4 w-screen overflow-hidden sm:bg-[length:300%_100%] sm:text-[80px] flex items-center px-20 transition-all duration-500 ease-in bg-size-200  bg-left hover:bg-right bg-gradient-to-r from-black from-30% via-green-800 to-green-500"
        >
          EXPERIENCE
        </button>
        <div
          onClick={() => {
            modalOpenAnimation();
            //setModalType("projects")
          }}
          className="invisible-modal-container relative sm:h-full cursor-pointer text-white text-3xl p-4 w-screen overflow-hidden sm:bg-[length:300%_100%] sm:text-[80px] flex items-center px-20 transition-all duration-500 ease-in bg-size-200  bg-left hover:bg-right bg-gradient-to-r from-black from-30% via-green-800 to-green-500"
        >
          <button>PROJECTS</button>
          <div className="border-y-4 border-white absolute top-0 left-0 h-full w-screen invisible-modal flex=col justify-between">
            <div className="h-0 w-1 bg-white"></div>
            <div className="h-0 w-1 bg-white"></div>
          </div>
        </div>
        {/* INVISIBLE MODAL */}
        <button className="sm:h-full cursor-pointer text-white text-3xl p-4 w-screen overflow-hidden sm:bg-[length:300%_100%] sm:text-[80px] flex items-center px-20 transition-all duration-500 ease-in bg-size-200  bg-left hover:bg-right bg-gradient-to-r from-black from-30% via-green-800 to-green-500">
          CONTACT
        </button>
      </div>
      <Modal
        open={modalType !== undefined}
        type={modalType as ModalType}
        description="lorem"
        points={["lorem"]}
        onCloseModal={() => setModalType(undefined)}
      />
    </>
  );
};

export default MenuPage;
