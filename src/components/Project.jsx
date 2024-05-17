import { useState } from "react";

const Projects = ({ title, src, description }) => {
  const [show, setShow] = useState(false);

  const handleClick = () => {
    if (show === false) {
      setShow(true);
    } else {
      setShow(false);
    }
  };

  return (
    <div className=" my-1">
      <div
        className="flex justify-between text-3xl font-bold cursor-pointer px-12 bg-gradient-to-r from-sky-500 to-indigo-500  text-white my-6"
        onClick={handleClick}
      >
        <h2 className="my-6">{title}</h2>
        <p className="my-6">{show === false ? "+" : "-"}</p>
      </div>
      {show && (
        <div className="text-justify text-2xl">
          <img className="w-[800px] my-0 mx-auto mb-10" src={src} alt="" />
          <p className="mx-12 pb-10">{description}</p>
        </div>
      )}
    </div>
  );
};

export default Projects;
