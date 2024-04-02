import { modalOpenAnimation, removeModalCloseAnimation, removeModalOpenAnimation, reverseModalOpenAnimation } from "../animations/modalOpen";
import Modal from "./Modal";
import { useState } from "react";
import "../animations/MenuPage/menu.css";

type ModalType = "experience" | "projects";
const MenuPage = () => {
  const [modalType, setModalType] = useState<ModalType | undefined>(undefined);
  console.log(modalType);
  return (
    <>
      <div className=" w-screen overflow-hidden h-screen bg-black flex flex-col items-center justify-center sm:items-stretch sm:justify-normal">
        <button
          onClick={() => {
						removeModalCloseAnimation();
            modalOpenAnimation();
            setTimeout(() => {
              setModalType("experience");
            }, 700);
          }}
          className="sm:h-full cursor-pointer text-white text-3xl p-4 w-screen sm:bg-[length:300%_100%] sm:text-[80px] flex items-center px-20 transition-all duration-500 ease-in bg-size-200  bg-left hover:bg-right bg-gradient-to-r from-black from-30% via-green-800 to-green-500"
        >
          EXPERIENCE
        </button>
        <div
          onClick={() => {
						removeModalCloseAnimation();
            modalOpenAnimation();
            setTimeout(() => {
              setModalType("projects");
            }, 700);
          }}
          className="invisible-modal-container relative sm:h-full cursor-pointer text-white text-3xl p-4 w-screen  sm:bg-[length:300%_100%] sm:text-[80px] flex items-center px-20 transition-all duration-500 ease-in bg-size-200  bg-left hover:bg-right bg-gradient-to-r from-black from-30% via-green-800 to-green-500"
        >
          <button>PROJECTS</button>
          {/* INVISIBLE MODAL */}
          <div className="border-y-4 border-white absolute top-0 left-0 h-full w-screen invisible-modal flex flex-col justify-between">
            <div className="border-x-4 border-white mb-auto w-full bg-transparent"></div>
            <div className="border-x-4 border-white mt-auto w-full bg-transparent"></div>
          </div>
        </div>
        <button className="sm:h-full cursor-pointer text-white text-3xl p-4 w-screen sm:bg-[length:300%_100%] sm:text-[80px] flex items-center px-20 transition-all duration-500 ease-in bg-size-200  bg-left hover:bg-right bg-gradient-to-r from-black from-30% via-green-800 to-green-500">
          CONTACT
        </button>
      </div>
      <Modal
        open={modalType !== undefined}
        type={modalType!}
        onCloseModal={() => {
					removeModalOpenAnimation();	
          reverseModalOpenAnimation();
          setModalType(undefined);
        }}
      />
    </>
  );
};

export default MenuPage;
