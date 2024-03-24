import React from "react";
import { CONTENTS } from "../json/content";

const ModalContent = ({ type }: { type: "projects" | "experience" }) => {
  const { company, description, points, title, url } = CONTENTS[type][0];
  return (
    <div className="flex">
      <div className="flex flex-col w-1/2 gap-4">
        <h3>{title}</h3>
				<p>{company}</p>
        <p className="font-sans">{description}</p>
        <ul>
          {points.map((point, idx) => (
            <li className="font-sans" key={idx}>
              {point}
            </li>
          ))}
        </ul>
        {url && <a href={url}>{url}</a>}
      </div>
    </div>
  );
};

export default ModalContent;
