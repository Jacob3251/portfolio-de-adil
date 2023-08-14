import React from "react";
import ImgPart from "./ImgPart/ImgPart";
import InfoPart from "./InfoPart/InfoPart";

const Home = () => {
  return (
    <div
      id="home"
      className="w-full my-0 md:my-[8vh] mx-auto flex flex-col-reverse pt-0 md:space-x-20 space-x-0  md:pt-14  md:space-y-0  md:px-20 md:flex-row justify-center items-center md:items-start"
    >
      <InfoPart
        classes={"scale-95 md:scale-100 text-center md:text-start"}
      ></InfoPart>
      <ImgPart classes={" z-40   my-5 md:my-0"}></ImgPart>
    </div>
  );
};

export default Home;
