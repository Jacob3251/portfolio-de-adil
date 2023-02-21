import React from "react";
import propic from "../../../assets/images/propic.png";
const ImgPart = ({ classes }) => {
  return (
    <div className={`${classes}`} data-aos="zoom-in" data-aos-duration="3000">
      <div className=" w-[95%] scale-75 mx-auto">
        <img
          className="w-[100%] lg:w-[80%] xl:w-[60%] 2xl:w-[50%] lg:h-[80%] xl:h-[60%] 2xl:h-[50%] mx-auto h-full rounded-md lg:rounded-2xl hover:scale-110 duration-200"
          src={propic}
          alt=""
        />
      </div>
    </div>
  );
};

export default ImgPart;
