import React, { useEffect, useState } from "react";
import {
  FaFacebookF,
  FaGithub,
  FaLinkedinIn,
  FaWhatsapp,
} from "react-icons/fa";
import { FiMail } from "react-icons/fi";
import { HashLink } from "react-router-hash-link";
import { Typewriter } from "react-simple-typewriter";
const InfoPart = ({ classes }) => {
  const [count, setCount] = useState(1);
  const [currentText, setCurrentText] = useState("Web Developer");

  useEffect(() => {
    setCount(1);
  }, [count]);

  const handleTypingDone = () => {
    if (currentText === "Web Developer") {
      setCurrentText("Front End Developer");
    } else if (currentText === "Front End Developer") {
      setCurrentText("Backend Developer");
    } else if (currentText === "Backend Developer") {
      setCurrentText("Web Developer"); // To loop back to the start
    }
    setCount(0);
  };
  return (
    <div className={`${classes}`}>
      <div>
        <h6 className="text-xl md:text-sm text-center md:text-start font-roboto">
          <span className="text-white">HELLO, </span>
          <span className="text-white">MY NAME IS</span>
        </h6>
        <h3 className="text-4xl font-roboto font-extrabold text-white ">
          <span>Md Nayeem Hasan</span>{" "}
          <span className="text-purple-700">Adil</span>
        </h3>
      </div>
      <div className=" overflow-hidden md:mb-2">
        {count ? (
          <div className="fon-roboto text-3xl text-purple-700 my-2">
            <Typewriter
              loop
              cursor
              cursorStyle="|"
              typeSpeed={100}
              deleteSpeed={70}
              delaySpeed={2000}
              words={[
                "Full Stack Developer",
                "Problem Solver",
                "An Enthusiast",
              ]}
            />
            {/* <Typist
              cursor={{
                element: "",
                hideWhenDone: true,
              }}
              avgTypingDelay={50}
              onTypingDone={handleTypingDone}
            >
              <span className="font-roboto text-xl text-purple-700">
                {currentText}
              </span>
              <Typist.Delay ms={800} />
              <Typist.Backspace count={20} ms={800} />
            </Typist> */}
          </div>
        ) : (
          <p></p>
        )}
      </div>

      <p className="text-white mb-2 md:mb-10">
        I am from Bangladesh a country located in South-East Asia. I have good
        understanding in web design, also I have some knowledge about backend
        thats required for building a nice websites
      </p>
      <div className="flex justify-center md:space-x-5 text-lg text-white  md:justify-start py-2">
        <FaFacebookF className="hover:bg-purple-700 hover:text-white rounded-full h-8 p-1 w-8 duration-200"></FaFacebookF>
        <FaGithub className="hover:bg-purple-700 hover:text-white rounded-full h-8 p-1 w-8 duration-200"></FaGithub>
        <FaLinkedinIn className="hover:bg-purple-700 hover:text-white rounded-full h-8 p-1 w-8 duration-200"></FaLinkedinIn>
        <FaWhatsapp className="hover:bg-purple-700 hover:text-white rounded-full h-8 p-1 w-8 duration-200"></FaWhatsapp>
        <FiMail className="hover:bg-purple-700 hover:text-white rounded-full h-8 p-1 w-8 duration-200"></FiMail>
      </div>
      <div className="flex space-x-1 justify-center md:justify-start mt-5 mb-10">
        <button className="bg-purple-700 hover:bg-opacity-70 duration-200 px-10 py-2 font-roboto text-white shadow-sm hover:shadow-md shadow-black text-xl font-bold   rounded-tl-xl rounded-bl-xl">
          Download CV
        </button>
        <HashLink
          smooth
          className="bg-purple-700 hover:bg-opacity-70 px-10 py-2 duration-200 font-roboto text-white text-xl font-bold shadow-sm hover:shadow-md shadow-black rounded-tr-xl rounded-br-xl"
          to="/#skills"
        >
          My Skills
        </HashLink>
      </div>
    </div>
  );
};

export default InfoPart;
