import React, { useEffect, useState } from "react";
import {
  FaFacebookF,
  FaGithub,
  FaLinkedinIn,
  FaWhatsapp,
} from "react-icons/fa";
import { FiMail } from "react-icons/fi";
import { HashLink } from "react-router-hash-link";
import Typist from "react-typist";
const InfoPart = ({ classes }) => {
  const [count, setCount] = useState(1);

  useEffect(() => {
    // document.title = `You clicked ${count} times`;
    // console.log("Count: " + count);
    setCount(1);
  }, [count]);
  return (
    <div className={`${classes}`}>
      <div>
        <h6 className="text-sm text-start">
          <span className="text-white">HELLO, </span>
          <span className="text-white">MY NAME IS</span>
        </h6>
        <h3 className="text-4xl font-raleway font-extrabold text-white mb-10">
          <span>Md. Nayeem Hasan</span>{" "}
          <span className="text-[#F0E68C]">Adil</span>
        </h3>
      </div>
      <div className="h-[60px] overflow-hidden mb-2">
        {count ? (
          <Typist
            cursor={{
              element: "_",
              hideWhenDone: true,
            }}
            avgTypingDelay={50}
            onTypingDone={() => setCount(0)}
          >
            <p className="text-white">
              I am a{" "}
              <span className="font-pacifico text-xl text-[#F0E68C]">
                Web Developer
              </span>
            </p>
            <Typist.Delay ms={800} />
            <Typist.Backspace count={20} ms={800} />
          </Typist>
        ) : (
          <p></p>
        )}
      </div>

      <p className="text-white mb-10">
        I am from Bangladesh a country located in South-East Asia. I have good
        understanding in web design, also I have some knowledge about backend
        thats required for building a nice websites
      </p>
      <div className="flex space-x-5 text-lg text-white  justify-start py-2 ">
        <FaFacebookF className="hover:bg-white hover:text-black rounded-full h-8 p-1 w-8 duration-200"></FaFacebookF>
        <FaGithub className="hover:bg-white hover:text-black rounded-full h-8 p-1 w-8 duration-200"></FaGithub>
        <FaLinkedinIn className="hover:bg-white hover:text-black rounded-full h-8 p-1 w-8 duration-200"></FaLinkedinIn>
        <FaWhatsapp className="hover:bg-white hover:text-black rounded-full h-8 p-1 w-8 duration-200"></FaWhatsapp>
        <FiMail className="hover:bg-white hover:text-black rounded-full h-8 p-1 w-8 duration-200"></FiMail>
      </div>
      <div className="flex space-x-4 justify-center mt-2 mb-10">
        <button className="bg-white hover:scale-105 duration-200 px-10 py-2 font-pacifico text-black text-xl font-extrabold   rounded-3xl ">
          Download CV
        </button>
        <HashLink
          smooth
          className="bg-white hover:scale-105 px-10 py-2 font-pacifico text-black text-xl font-extrabold   rounded-3xl "
          to="/#skills"
        >
          My Skills
        </HashLink>
      </div>
    </div>
  );
};

export default InfoPart;
