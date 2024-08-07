import React, { useEffect, useRef, useState } from "react";
import { FaAlignRight, FaRegTimesCircle, FaTimes } from "react-icons/fa";
import { HiOutlineMenuAlt3 } from "react-icons/hi";
import { AiOutlineClose } from "react-icons/ai";
import { Link } from "react-router-dom";
import { HashLink } from "react-router-hash-link";
import "./Header.css";
const Header = () => {
  const [showSecond, setShowSecond] = useState(false);
  const [width, setWidth] = useState(window.innerWidth);
  const widthRef = useRef(width);
  const handleResize = () => {
    widthRef.current = window.innerWidth;
    setWidth(widthRef.current);
  };

  useEffect(() => {
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);
  useEffect(() => {
    if (width > 1200) {
      setShowSecond(false);
    }
  }, [width]);
  console.log(width);

  return (
    // sticky
    <div className="bg-[#1a1c2c] sticky top-[-2px] z-50">
      <nav className="  w-full mx-auto max-w-[1440px]">
        <div className="flex w-[90%] py-5 lg:py-0 mx-auto justify-between items-center ">
          <div>
            <h3 className="text-purple-700   text-3xl font-wetpaint font-normal tracking-widest">
              &lt;ADIL /&gt;
              {/* Protfolio{" "}
              <span className="font-raleway">of </span>Adil */}
            </h3>
          </div>
          {showSecond === false ? (
            <HiOutlineMenuAlt3
              onClick={() => setShowSecond(!showSecond)}
              className="sideMenuIcon  text-4xl text-purple-700"
            ></HiOutlineMenuAlt3>
          ) : (
            <AiOutlineClose
              onClick={() => setShowSecond(!showSecond)}
              className="sideMenuIcon  text-4xl text-purple-700"
            ></AiOutlineClose>
          )}
          <div className="menuBar">
            <ul className="flex flex-col md:flex-row space-x-1 lg:space-x-3 bg-[#1a1c2c] justify-center py-5 ">
              <li className="duration-200 rounded-md hover:bg-purple-700  px-1.5 py-2 text-xl font-semibold text-purple-700 hover:text-white font-roboto">
                <HashLink smooth to="/#home">
                  &lt;Home/&gt;
                </HashLink>
              </li>
              <li className="duration-200 rounded-md hover:bg-purple-700  px-1.5 py-2 text-xl font-semibold text-purple-700 hover:text-white font-roboto">
                <HashLink smooth to="/#services">
                  &lt;Services/&gt;
                </HashLink>
              </li>
              <li className="duration-200 rounded-md hover:bg-purple-700  px-1.5 py-2 text-xl font-semibold text-purple-700 hover:text-white font-roboto">
                <HashLink smooth to="/#skills">
                  &lt;Skills/&gt;
                </HashLink>
              </li>
              <li className="duration-200 rounded-md hover:bg-purple-700  px-1.5 py-2 text-xl font-semibold text-purple-700 hover:text-white font-roboto">
                <HashLink smooth to="/#works">
                  &lt;Works/&gt;
                </HashLink>
              </li>
              {/* <li className="duration-200 rounded-md hover:bg-purple-700  px-1.5 py-2 text-xl font-semibold text-purple-700 hover:text-white font-roboto">
                <HashLink smooth to="/#resumes">
                  &lt;Resume/&gt;
                </HashLink>
              </li> */}

              {/* <li className="duration-200 rounded-md hover:bg-purple-700  px-1.5 py-2 text-xl font-semibold text-purple-700 hover:text-white font-roboto">
               
                &lt;Blogs/&gt;
              </li> */}
              <li className="duration-200 rounded-md hover:bg-purple-700  px-1.5 py-2 text-xl font-semibold text-purple-700 hover:text-white font-roboto">
                <HashLink smooth to="/#contact">
                  &lt;Contact/&gt;
                </HashLink>
              </li>
            </ul>
          </div>
        </div>
      </nav>
      {/* secondary menu */}
      {width <= 1200 && (
        <div
          className={`${
            showSecond === false ? "wrapper" : "wrapper open"
          } w-full bg-[#1a1c2c]`}
        >
          {/* second menu */}
          <div className={`expandable w-[80%] mx-auto `}>
            <ul className=" bg-[#1a1c2c]  py-5 ">
              <li
                onClick={() => setShowSecond(false)}
                className="duration-200 rounded-md hover:bg-purple-700  px-1.5 py-2 text-xl font-semibold text-purple-700 hover:text-white font-roboto"
              >
                <HashLink smooth to="/#home">
                  Home
                </HashLink>
              </li>
              <li
                onClick={() => setShowSecond(false)}
                className="duration-200 rounded-md hover:bg-purple-700  px-1.5 py-2 text-xl font-semibold text-purple-700 hover:text-white font-roboto"
              >
                <HashLink smooth to="/#services">
                  Services
                </HashLink>
              </li>
              <li
                onClick={() => setShowSecond(false)}
                className="duration-200 rounded-md hover:bg-purple-700  px-1.5 py-2 text-xl font-semibold text-purple-700 hover:text-white font-roboto"
              >
                <HashLink smooth to="/#skills">
                  Skills
                </HashLink>
              </li>
              <li
                onClick={() => setShowSecond(false)}
                className="duration-200 rounded-md hover:bg-purple-700  px-1.5 py-2 text-xl font-semibold text-purple-700 hover:text-white font-roboto"
              >
                <HashLink smooth to="/#works">
                  Works
                </HashLink>
              </li>
              {/* <li className="duration-200 rounded-md hover:bg-purple-700  px-1.5 py-2 text-xl font-semibold text-purple-700 hover:text-white font-roboto">
                <HashLink smooth to="/#resumes">
                  Resume
                </HashLink>
              </li> */}

              {/* <li className="duration-200 rounded-md hover:bg-purple-700  px-1.5 py-2 text-xl font-semibold text-purple-700 hover:text-white font-roboto">
                
                Blogs
              </li> */}
              <li
                onClick={() => setShowSecond(false)}
                className="duration-200 rounded-md hover:bg-purple-700  px-1.5 py-2 text-xl font-semibold text-purple-700 hover:text-white font-roboto"
              >
                <HashLink smooth to="/#contact">
                  Contacts
                </HashLink>
              </li>
            </ul>
          </div>
        </div>
      )}
    </div>
  );
};

export default Header;
