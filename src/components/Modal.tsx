import React from "react";

interface ModalProps {
  open: boolean;
  description: string;
  type: "experience" | "contact" | "projects";
  points: string[];
  url?: string;
  onCloseModal?: VoidFunction;
}
const Modal = ({ open, description, points, type, url, onCloseModal }: ModalProps) => {
  return (
    <>
      {open && (
        // BACKDROP
        <div className="w-full bg-black bg-opacity-80 backdrop-blur-sm h-full fixed top-0 left-0">
          {/* CONTENT CONTAINER */}
          <div className="flex justify-center items-center w-full h-full">
            {/* CONTENT  */}
            <div
              className="h-[600px] w-[800px] border-4 p-6 border-white bg-black text-white rounded-xl"
              onClick={(e) => {
                e.stopPropagation();
              }}
            >
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

              {/*  */}
              <div className="flex">
                <div className="flex flex-col w-1/2 gap-4">
                  <p>{description}</p>
                  <ul>
                    {points.map((point, idx) => (
                      <li key={idx}>{point}</li>
                    ))}
                  </ul>
                  {url && <a href={url}>{url}</a>}
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Modal;
