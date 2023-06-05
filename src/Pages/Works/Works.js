import React, { useEffect, useState } from "react";
import Work from "./Work";
import Typist from "react-typist";
import Carousel from "../Shared/Carousel";
const Works = () => {
  const [showTyper, setShowTyper] = useState(true);
  const works = [
    {
      id: 1,
      category: "WEB DEVELOPMENT",
      title: "Full Stack Website",
      desciption:
        "Loremfasd lkdasjflak jfldask jldkfl aksjflka jlfd lkfjla sdkfdl klaf lfl kalfk sdlfs dajlf jllk asldkf jlkfk",
    },
    {
      id: 2,
      category: "WEB DEVELOPMENT",
      title: "Full Stack Website",
      desciption:
        "Loremfasd lkdasjflak jfldask jldkfl aksjflka jlfd lkfjla sdkfdl klaf lfl kalfk sdlfs dajlf jllk asldkf jlkfk",
    },
    {
      id: 3,
      category: "WEB DEVELOPMENT",
      title: "Full Stack Website",
      desciption:
        "Loremfasd lkdasjflak jfldask jldkfl aksjflka jlfd lkfjla sdkfdl klaf lfl kalfk sdlfs dajlf jllk asldkf jlkfk",
    },
  ];

  return (
    <div className="w-[80%] pt-32 mx-auto py-2 " data-aos="fade-up" id="works">
      {/* <h3 className="text-center font-extrabold text-4xl mt-5 mb-2 font-raleway  text-white">
        PORTFOLIO
      </h3> */}
      <div className="flex items-center justify-center my-5  space-x-4">
        {/* <h6 className=" text-lg text-white">MY</h6> */}
        <h6 className="text-white font-roboto text-3xl tracking-widest glitchy">
          &lt; MY WORK / &gt;
        </h6>
      </div>
      <div className="flex w-full justify-center items-center">
        <hr className="my-2 w-full" />
        <span className="mx-2"></span>
        <hr className="my-2 w-full" />
        <hr className="my-2 w-full" />
        <span className="mx-2"></span>
        <hr className="my-2 w-full" />
        <hr className="my-2 w-full" />
        <span className="mx-2"></span>
        <hr className="my-2 w-full" />
        <hr className="my-2 w-full" />
        <span className="mx-2"></span>
        <hr className="my-2 w-full" />
      </div>
      {/* <Carousel></Carousel> */}
      {/* Individual projects below */}
      {showTyper ? (
        <div className="w-full text-center my-40">
          <Typist onTypingDone={() => setShowTyper(!showTyper)}>
            <h3 className="text-3xl font-bold text-[#F0E68C]">Loading...</h3>
          </Typist>
        </div>
      ) : (
        <div className=" mt-10 mb-40 grid grid-cols-1 gap-10 w-full p-16  lg:grid-cols-2  xl:grid-cols-3 place-items-center place-content-center">
          {works.map((work) => (
            <Work
              id={work.id}
              key={work.id}
              title={work.title}
              category={work.category}
              desciption={work.desciption}
            ></Work>
          ))}
        </div>
      )}
    </div>
  );
};

export default Works;
