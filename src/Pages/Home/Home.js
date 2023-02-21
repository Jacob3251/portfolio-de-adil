import React from "react";
import ImgPart from "./ImgPart/ImgPart";
import InfoPart from "./InfoPart/InfoPart";

const Home = () => {
  return (
    <div
      id="home"
      className="w-full  md:w-[80%] my-20 mx-auto flex flex-col-reverse  md:space-y-0  px-20 md:flex-row justify-center items-center "
    >
      <InfoPart classes={""}></InfoPart>
      <ImgPart classes={""}></ImgPart>
    </div>
  );
};

export default Home;
