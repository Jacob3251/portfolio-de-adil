import React from "react";
import ResponsiveCarousel from "../Shared/ResponsiveCarousel";
const Skills = () => {
  return (
    <div className="w-full my-0 px-5 md:px-20  mb-40 mx-auto py-2">
      <div className="flex md:flex-row flex-col w-full  rounded-lg">
        <div className="flex flex-col  font-roboto justify-center items-center  md:w-[50%]">
          <h6 className="text-white font-bold font-roboto text-3xl ">
            &lt; MY SKILLS / &gt;
          </h6>
          <p className="text-md my-5 px-14 hidden md:block">
            Adept with the MERN stack (MongoDB, Express, React, and Node.js).
            Create effective contemporary web applications. proficient with
            MongoDB for open-source databases. Smooth data flow and improved
            user experiences are provided by Express.js. React-based, appealing
            user interfaces; Swift-based, scalable network programs; Node.js for
            superior stack performance. provides excellent web solutions.
          </p>
        </div>
        <div className="md:w-[50%] md:mx-auto">
          <ResponsiveCarousel></ResponsiveCarousel>
        </div>
      </div>
    </div>
  );
};

export default Skills;
