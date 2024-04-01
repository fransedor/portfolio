import { AnimatePresence, motion } from "framer-motion";
import { CONTENTS } from "../json/content";
import ModalContent from "./ModalContent";
import { useState } from "react";
interface ModalProps {
  open: boolean;
  type: "experience" | "projects";
  onCloseModal?: VoidFunction;
}
const Modal = ({ open, type, onCloseModal }: ModalProps) => {
  const [contentIndex, setContentIndex] = useState(0);
  const maxIndex = CONTENTS[type]?.length;

  return (
    <>
      {open && (
        // BACKDROP
        <div className="w-full bg-black bg-opacity-80 backdrop-blur-sm h-full fixed top-0 left-0">
          {/* CONTENT CONTAINER */}
          <div className="flex justify-center items-center w-full h-full">
            {/* CONTENT  */}
            <div
              className="h-full sm:h-[600px] w-[800px] border-4 p-6 border-white bg-black text-white flex flex-col justify-between rounded-xl overflow-auto no-scrollbar"
              onClick={(e) => {
                e.stopPropagation();
              }}
            >
              <div>
                {/* HEADER */}
                <div className="flex justify-between items-start pb-4 w-full">
                  <h2 className="text-2xl font-bold">{type.toUpperCase()}</h2>
                  <button
                    className="outline-none border-none p-0 bg-transparent"
                    onClick={onCloseModal}
                  >
                    &#10006;
                  </button>
                </div>

                {/* CONTENT */}
                <ModalContent type={type} index={contentIndex} />
              </div>

              <div className="flex w-full justify-between text-xl">
                <button
                  onClick={() => {
                    setContentIndex((prevState) => {
                      if (prevState === 0) {
                        return maxIndex - 1;
                      }
                      return prevState - 1;
                    });
                  }}
                >
                  {"\u2190"} Prev
                </button>
                <button
                  onClick={() => {
                    setContentIndex((prevState) => {
                      if (prevState === maxIndex - 1) {
                        return 0;
                      }
                      return prevState + 1;
                    });
                  }}
                >
                  Next {"\u2192"}
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Modal;
