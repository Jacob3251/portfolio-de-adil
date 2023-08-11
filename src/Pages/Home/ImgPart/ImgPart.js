import React from "react";
import propic from "../../../assets/images/propic.png";
const ImgPart = ({ classes }) => {
  return (
    <div className={`${classes}`} data-aos="zoom-in" data-aos-duration="1000">
      <div className="overflow-hidden  rounded-tr-[80px]  rounded-bl-[80px] drop-shadow-lg">
        <div className="overflow-hidden w-[280px] rounded-tr-[80px]  rounded-bl-[80px]">
          <img
            className="w-full  mx-auto h-full  md:hover:scale-105 duration-300"
            src={propic}
            alt=""
          />
        </div>
      </div>
    </div>
  );
};

export default ImgPart;
