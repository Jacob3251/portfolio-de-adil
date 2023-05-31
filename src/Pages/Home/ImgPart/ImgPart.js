import React from "react";
import propic from "../../../assets/images/propic.png";
const ImgPart = ({ classes }) => {
  return (
    <div className={`${classes}`} data-aos="zoom-in" data-aos-duration="1000">
      <div className="">
        <img
          className="w-[100%] lg:w-[80%]  mx-auto h-full rounded-md lg:rounded-2xl  md:hover:scale-110 duration-300"
          src={propic}
          alt=""
        />
      </div>
    </div>
  );
};

export default ImgPart;
