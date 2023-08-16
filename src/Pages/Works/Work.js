import React, { useState } from "react";
import {
  FaArrowAltCircleRight,
  FaGithub,
  FaGlobeAmericas,
} from "react-icons/fa";
import propic from "../../assets/images/propic.png";
import workpic from "../../assets/images/MotoPeddler.png";
import "./Work.css";
const Work = ({ title, category, desciption, id, diff, index }) => {
  // const [repoShow, setRepoShow] = useState(false);s
  const [hovered, setHovered] = useState(false);
  const handleHover = () => {
    setHovered(!hovered);
  };
  return (
    <div
      className={`bg-[#1a1c2c] drop-shadow-lg rounded-2xl  duration-200 overflow-hidden flex flex-col  ${
        index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
      }`}
    >
      <div className={`image-container md:w-[50%] ${hovered ? "hovered" : ""}`}>
        <img
          className="image"
          onMouseEnter={handleHover}
          onMouseLeave={handleHover}
          src={workpic}
          alt=""
        />
      </div>

      <div className="px-5 my-5 flex flex-col justify-center w-[50%] items-center">
        <h3 className=" font-roboto text-2xl mt-3 text-white">MotoPeddler</h3>
        <p className="text-[14px] my-2">
          A website for a warehouse that has different motor-cycle gear in their
          inventory. Implemented an authentication system using Firebase. Users
          can add or remove products.
        </p>
        {/* tags */}
        <h5 className="text-[12px] mb-3 font-roboto">
          Tags: React, Firebase,React, Firebase,React, Firebase,React
        </h5>
        <div className="space-x-5 flex justify-center  items-center">
          <button
            title={`View Github Repository`}
            className="px-3 py-3 bg-[#0e0f17] text-white hover:text-white hover:bg-transparent border-2 border-transparent hover:border-white duration-300 flex justify-between items-center rounded-md space-x-2"
          >
            <FaGithub className="2xl:mr-2 text-[24px]" />
            <span className="">Github</span>
          </button>
          <button
            title={`View Live Website ${title}`}
            className="px-3 py-3 bg-[#0e0f17]  text-[#296e6b] hover:text-white  hover:bg-transparent border-2 border-transparent hover:border-white duration-300 flex justify-between items-center rounded-md space-x-2"
          >
            <FaGlobeAmericas className="2xl:mr-2 text-[24px]" />
            <span className="">Live Site</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Work;
