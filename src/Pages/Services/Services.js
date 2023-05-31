import React from "react";
import Service from "./Service";

const Services = () => {
  return (
    <div
      className=" w-[80%] mt-[300px] mb-40 mx-auto py-2"
      data-aos="fade-up"
      data-aos-easing="ease-out-cubic"
      data-aos-duration="1000"
      id="services"
    >
      <div>
        {/* <h3
          // 
          className="text-center font-extrabold text-4xl mt-5 mb-2 font-raleway  text-white"
        >
          WHAT I DO
        </h3> */}
        <div className="flex items-center justify-center my-5 space-x-4">
          {/* <h6 className=" text-lg text-white">MY</h6> */}
          <h6 className="text-white font-roboto text-3xl glitchy">
            &lt; MY SERVICES / &gt;
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
        <div className="grid grid-cols-1 md:grid-cols-3 gap-[50px] mt-20">
          <Service
            category={"WEB DEVELOPMENT"}
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
