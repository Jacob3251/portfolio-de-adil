import React from "react";
import { FaArrowAltCircleRight } from "react-icons/fa";
import logo from "./Capture.PNG";

const Work = ({ title, category, desciption, id, diff }) => {
  return (
    <div
      className="bg-[#ffffff]  rounded-2xl hover:scale-105 duration-200"
      title={title}
      data-aos="fade-up"
      data-aos-easing="ease-in-out"
      data-aos-duration="800"
    >
      <div className="p-10 rounded-2xl">
        <img
          className="rounded-2xl hover:scale-105 duration-200"
          src={logo}
          alt=""
        />
      </div>

      <div className="p-5">
        <h6 className="text-md font-roboto text-[#8f9bb3] font-semibold ">
          {category}
        </h6>
        <h3 className="text-2xl font-roboto text-[#1a1c2c] font-bold">
          {title}
        </h3>
        <p className="my-8 text-[#5a7d9a]">{desciption}</p>
        <a
          className=" flex w-[80%] hover:w-full duration-200 hover:bg-opacity-90  justify-center mx-auto py-5 rounded-md text-white  items-center text-xl bg-[#5a7d9a] space-x-2"
          href="http://www.google.com/cats"
        >
          <h3>See Project</h3>
          <FaArrowAltCircleRight className="text-2xl"></FaArrowAltCircleRight>
        </a>
      </div>
    </div>
  );
};

export default Work;
