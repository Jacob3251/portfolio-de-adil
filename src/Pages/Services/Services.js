import React from "react";
import Service from "./Service";

const Services = () => {
  return (
    <div className=" w-full px-5 md:px-20  mb-40 mx-auto py-2" id="services">
      <div>
        {/* <h3
          // 
          className="text-center font-extrabold text-4xl mt-5 mb-2 font-raleway  text-white"
        >
          WHAT I DO
        </h3> */}
        <div className="flex items-center justify-center my-4 space-x-4">
          {/* <h6 className=" text-lg text-white">MY</h6> */}
          <h6 className="text-white font-bold font-roboto text-3xl ">
            &lt; MY SERVICES / &gt;
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
        <div className="grid grid-cols-1 md:grid-cols-3 gap-[50px] my-10">
          <Service
            category={"FRONTEND REACT DEVELOPMENT"}
            jobTitle={"Single Page Application"}
            description={
              "A single-page application (SPA) is a web app that loads a single HTML page, dynamic updates happen as user interacts, avoiding full page reloads."
            }
          ></Service>
          <Service
            category={"WEB DEVELOPMENT"}
            jobTitle={"Full Stack Website"}
            description={
              "A Full Stack Website is a website that uses all layers of web development stack (client-side, server-side and database) to deliver the complete functionality to the user."
            }
          ></Service>
          <Service
            category={"WEB DEVELOPMENT"}
            jobTitle={"Error Fixing"}
            description={
              "Error fixing in web development refers to the process of identifying and resolving errors in the code, configuration, or environment of a website or web application."
            }
          ></Service>
          <Service
            category={"WEB DEVELOPMENT"}
            jobTitle={"Error Fixing"}
            description={
              "Error fixing in web development refers to the process of identifying and resolving errors in the code, configuration, or environment of a website or web application."
            }
          ></Service>
          <Service
            category={"WEB DEVELOPMENT"}
            jobTitle={"Error Fixing"}
            description={
              "Error fixing in web development refers to the process of identifying and resolving errors in the code, configuration, or environment of a website or web application."
            }
          ></Service>
          <Service
            category={"WEB DEVELOPMENT"}
            jobTitle={"Error Fixing"}
            description={
              "Error fixing in web development refers to the process of identifying and resolving errors in the code, configuration, or environment of a website or web application."
            }
          ></Service>
        </div>
      </div>
    </div>
  );
};

export default Services;
