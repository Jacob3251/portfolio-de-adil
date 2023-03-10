import React from "react";
import Service from "./Service";

const Services = () => {
  return (
    <div
      className=" w-[80%] mt-[300px] mb-40 mx-auto py-2"
      data-aos="fade-up"
      data-aos-easing="ease-out-cubic"
      data-aos-duration="1000"
    >
      <div>
        <h3
          id="services"
          className="text-center font-extrabold text-4xl mt-5 mb-2 font-raleway  text-white"
        >
          WHAT I DO
        </h3>
        <div className="flex items-center justify-center my-5 space-x-4">
          <h6 className=" text-lg text-white">MY</h6>
          <h6 className="text-white font-pacifico text-3xl">SERVICES</h6>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 mt-20">
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
        </div>
      </div>
    </div>
  );
};

export default Services;
