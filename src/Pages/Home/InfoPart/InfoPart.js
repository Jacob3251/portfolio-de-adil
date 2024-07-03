import React, { useEffect, useState } from "react";
import useDownloader from "react-use-downloader";
import {
  FaFacebookF,
  FaGithub,
  FaLinkedinIn,
  FaWhatsapp,
} from "react-icons/fa";
import cv from "../../../assets/cv.pdf";
import { FiMail } from "react-icons/fi";
import { HashLink } from "react-router-hash-link";
import { Typewriter } from "react-simple-typewriter";
const InfoPart = ({ classes }) => {
  const [count, setCount] = useState(1);
  const [currentText, setCurrentText] = useState("Web Developer");
  const { size, elapsed, percentage, download, cancel, error, isInProgress } =
    useDownloader();

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
          </div>
        ) : (
          <p></p>
        )}
      </div>

      <p className="text-white mb-2 md:mb-10">
        Hello! As a MERN stack developer, creating dynamic and responsive web
        apps is something I'm really passionate about. Having earned my
        bachelor's degree in computer science and engineering with a 3.78 CGPA
        from Leading University in Sylhet, I have a strong foundation in these
        fields. I'm from Bangladesh, and I speak Bengali and English well. My
        passion to learn and leverage new technologies to build seamless user
        experiences has motivated my technological journey.
      </p>
      <div className="flex justify-center md:space-x-5 text-lg text-white  md:justify-start py-2">
        <a
          href="https://www.facebook.com/nayeem.hasan.982"
          target="_blank"
          rel="noreferrer"
        >
          <FaFacebookF className="hover:bg-purple-700 hover:text-white rounded-full h-12 p-1.5 w-12   duration-200"></FaFacebookF>
        </a>
        <a href="https://github.com/Jacob3251" target="_blank" rel="noreferrer">
          <FaGithub className="hover:bg-purple-700 hover:text-white rounded-full h-12 p-1.5 w-12   duration-200"></FaGithub>
        </a>

        <a
          href="https://www.linkedin.com/in/md-nayeem-hasan-adil/"
          target="_blank"
          rel="noreferrer"
        >
          <FaLinkedinIn className="hover:bg-purple-700 hover:text-white rounded-full h-12 p-1.5 w-12   duration-200"></FaLinkedinIn>
        </a>
        <a href="tel:+8801754974851">
          <FaWhatsapp className="hover:bg-purple-700 hover:text-white rounded-full h-12 p-1.5 w-12   duration-200"></FaWhatsapp>
        </a>

        <a
          href="mailto:jacobfrye3251@gmail.com"
          target="_blank"
          rel="noreferrer"
        >
          <FiMail className="hover:bg-purple-700 hover:text-white rounded-full h-12 p-1.5 w-12  duration-200"></FiMail>
        </a>
      </div>
      <div className="flex space-x-1 justify-center md:justify-start mt-5 mb-10">
        <button
          onClick={() => download(cv, "Md Nayeem Hasan Adil CV.pdf")}
          className="bg-purple-700 hover:bg-opacity-70 duration-200 px-10 py-2 font-roboto text-white shadow-sm hover:shadow-md shadow-black text-xl font-bold   rounded-tl-xl rounded-bl-xl"
        >
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
