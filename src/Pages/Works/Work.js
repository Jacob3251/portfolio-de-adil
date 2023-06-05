import React from "react";
import {
  FaArrowAltCircleRight,
  FaGithub,
  FaGlobeAmericas,
} from "react-icons/fa";
import logo from "./Capture.PNG";
import Carousel from "../Shared/Carousel";
import { useState } from "react";

const Work = ({ title, category, desciption, id, diff }) => {
  const [repoShow, setRepoShow] = useState(false);
  return (
    <div
      className="bg-[#1a1c2c]  rounded-2xl  duration-200 overflow-hidden"
      data-aos="fade-up"
      data-aos-easing="ease-in-out"
      data-aos-duration="800"
      onMouseEnter={() => setRepoShow(true)}
      onMouseLeave={() => setRepoShow(false)}
    >
      {/* <div className="overflow-hidden ">
        <img className=" hover:scale-105 duration-200" src={logo} alt="" />
      </div> */}
      <div className={`${repoShow === false ? "wrapper" : "wrapper open"} `}>
        <div className="expandable ">
          <div
            className="px-5 my-20 "
            // data-aos="flip-right"
            // data-aos-easing="ease-in-back"
            // data-aos-delay="500"
            // data-aos-duration="1000"
          >
            <h3 className="text-center font-raleway text-2xl my-5 text-white">
              MotoPeddler
            </h3>
            <div className="space-x-5 flex justify-center items-center">
              <button
                title={`View Github Repository`}
                className="px-3 py-3 bg-white text-black hover:text-white hover:bg-transparent border-2 border-transparent hover:border-white duration-300 flex justify-between items-center text-[34px] rounded-full 2xl:rounded-none 2xl:text-lg"
              >
                <FaGithub className="2xl:mr-2" />
                <span className="hidden 2xl:block">Github Repo</span>
              </button>
              <button
                title={`View Live Website ${title}`}
                className="px-3 py-3 bg-white text-[#296e6b] hover:text-white  hover:bg-transparent border-2 border-transparent hover:border-white duration-300 flex justify-between items-center text-[34px] rounded-full 2xl:rounded-none 2xl:text-lg"
              >
                <FaGlobeAmericas className="2xl:mr-2" />
                <span className="hidden 2xl:block">Live Site</span>
              </button>
            </div>
          </div>
        </div>
      </div>
      <div
        className={`${
          repoShow === false ? "wrapperClose " : "wrapperClose close"
        }`}
      >
        <Carousel></Carousel>
      </div>
      <div className={`${repoShow === false ? "block p-5" : "hidden p-5"}`}>
        <h6 className="text-md font-roboto text-[#8f9bb3] font-semibold ">
          {category}
        </h6>
        <h3 className="text-2xl font-roboto text-[#8f9bb3] font-bold">
          {title}
        </h3>
        <p className="mb-4 text-[#5a7d9a]">{desciption}</p>
        {/* <a
          className=" flex w-[80%] hover:w-full duration-200 hover:bg-opacity-90  justify-center mx-auto py-5 rounded-md text-white  items-center text-xl bg-[#5a7d9a] space-x-2"
          href="http://www.google.com/cats"
        >
          <h3>See Project</h3>
          <FaArrowAltCircleRight className="text-2xl"></FaArrowAltCircleRight>
        </a> */}
      </div>
    </div>
  );
};

export default Work;
