import React from "react";
import ImgPart from "./ImgPart/ImgPart";
import InfoPart from "./InfoPart/InfoPart";

const Home = () => {
  return (
    <div
      id="home"
      className="w-full  md:w-[80%] my-2 mx-auto flex flex-col-reverse pt-0 space-x-5 md:pt-14  md:space-y-0  px-20 md:flex-row justify-center items-start "
    >
      <InfoPart classes={" text-center md:text-start"}></InfoPart>
      <ImgPart classes={"z-40  my-10 md:my-0"}></ImgPart>
    </div>
  );
};

export default Home;
