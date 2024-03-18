import Modal from "./Modal";
import { useState } from "react";

type ModalType = "experience" | "projects" | "contact"
const MenuPage = () => {
  const [modalType, setModalType] = useState<ModalType | undefined>(
    undefined
  );
  console.log(modalType);
  return (
    <>
      <div className="w-full h-screen bg-black flex flex-col items-center justify-center sm:items-stretch sm:justify-normal overflow-hidden">
        <button
          onClick={() => setModalType("experience")}
          className="sm:h-full cursor-pointer text-white text-3xl p-4 w-full sm:w-[300%] sm:text-[80px] flex items-center px-20 sm:border-b-4 border-white transition-all duration-500 ease-in bg-size-200  bg-left hover:bg-right bg-gradient-to-r from-black from-30% via-green-600 to-green-400"
        >
          EXPERIENCE
        </button>
        <button
          onClick={() => setModalType("projects")}
          className="sm:h-full cursor-pointer text-white text-3xl p-4 w-full sm:w-[300%] sm:text-[80px] flex items-center px-20 sm:border-b-4 border-white transition-all duration-500 ease-in bg-size-200  bg-left hover:bg-right bg-gradient-to-r from-black from-30% via-green-600 to-green-400"
        >
          PROJECTS
        </button>
        <button className="sm:h-full cursor-pointer text-white text-3xl p-4 w-full sm:w-[300%] sm:text-[80px] flex items-center px-20 transition-all duration-500 ease-in bg-size-200  bg-left hover:bg-right bg-gradient-to-r from-black from-30% via-green-600 to-green-400">
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
