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
    {
      id: 3,
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
    {
      id: 3,
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
    {
      id: 3,
      category: "WEB DEVELOPMENT",
      title: "Full Stack Website",
      desciption:
        "Loremfasd lkdasjflak jfldask jldkfl aksjflka jlfd lkfjla sdkfdl klaf lfl kalfk sdlfs dajlf jllk asldkf jlkfk",
    },
  ];

  return (
    <div className="w-full px-5 md:px-20 " data-aos="fade-up">
      <div className="flex items-center justify-center my-3  space-x-4">
        {/* <h6 className=" text-lg text-white">MY</h6> */}
        <h6 className="text-white font-bold font-roboto text-3xl ">
          &lt; MY WORK / &gt;
        </h6>
      </div>
      <div className="flex w-full justify-center items-center">
        <div className=" my-1 bg-white w-full" style={{ height: "2px" }} />
        <span className="mx-2"></span>
        <div className=" my-1 bg-white w-full" style={{ height: "2px" }} />
        <div className=" my-1 bg-white w-full" style={{ height: "2px" }} />
        <span className="mx-2"></span>
        <div className=" my-1 bg-white w-full" style={{ height: "2px" }} />
        <div className=" my-1 bg-white w-full" style={{ height: "2px" }} />
        <span className="mx-2"></span>
        <div className=" my-1 bg-white w-full" style={{ height: "2px" }} />
        <div className=" my-1 bg-white w-full" style={{ height: "2px" }} />
        <span className="mx-2"></span>
        <div className=" my-1 bg-white w-full" style={{ height: "2px" }} />
      </div>
      {/* Individual projects below */}
      {showTyper ? (
        <div className="w-full text-center my-40">
          <Typist onTypingDone={() => setShowTyper(!showTyper)}>
            <h3 className="text-3xl font-bold text-[#F0E68C]">Loading...</h3>
          </Typist>
        </div>
      ) : (
        <div className="grid grid-cols-1 gap-[50px] my-10">
          {works.map((work, index) => (
            <Work
              index={index + 1}
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
