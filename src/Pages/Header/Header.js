import React, { useState } from "react";
import { FaAlignRight, FaRegTimesCircle, FaTimes } from "react-icons/fa";
import { Link } from "react-router-dom";
import { HashLink } from "react-router-hash-link";
import "./Header.css";
const Header = () => {
  const [showSecond, setShowSecond] = useState(false);

  return (
    // sticky
    <div className="bg-[#1a1c2c] sticky top-[-2px] z-50">
      <nav className="  w-full mx-auto max-w-[1440px]">
        <div className="flex w-[90%] py-5 lg:py-0 mx-auto justify-between items-center ">
          <div>
            <h3 className="text-purple-700   text-3xl font-wetpaint font-normal tracking-widest">
              &lt;Dev Adil&gt;
              {/* Protfolio{" "}
              <span className="font-raleway">of </span>Adil */}
            </h3>
          </div>
          {showSecond === false ? (
            <FaAlignRight
              onClick={() => setShowSecond(!showSecond)}
              className="sideMenuIcon  text-4xl text-white"
            ></FaAlignRight>
          ) : (
            <FaRegTimesCircle
              onClick={() => setShowSecond(!showSecond)}
              className="sideMenuIcon  text-4xl text-white"
            ></FaRegTimesCircle>
          )}
          <div className="menuBar">
            <ul className="flex flex-col md:flex-row space-x-2 bg-[#1a1c2c] justify-center py-5 ">
              <li className="duration-200 rounded-md hover:bg-purple-700  px-3 py-2 text-xl font-semibold text-purple-700 hover:text-white font-roboto">
                <HashLink smooth to="/#home">
                  Home
                </HashLink>
              </li>
              <li className="duration-200 rounded-md hover:bg-purple-700  px-3 py-2 text-xl font-semibold text-purple-700 hover:text-white font-roboto">
                <HashLink smooth to="/#services">
                  Services
                </HashLink>
              </li>
              <li className="duration-200 rounded-md hover:bg-purple-700  px-3 py-2 text-xl font-semibold text-purple-700 hover:text-white font-roboto">
                <HashLink smooth to="/#skills">
                  Skills
                </HashLink>
              </li>
              <li className="duration-200 rounded-md hover:bg-purple-700  px-3 py-2 text-xl font-semibold text-purple-700 hover:text-white font-roboto">
                <HashLink smooth to="/#works">
                  Works
                </HashLink>
              </li>
              <li className="duration-200 rounded-md hover:bg-purple-700  px-3 py-2 text-xl font-semibold text-purple-700 hover:text-white font-roboto">
                <HashLink smooth to="/#resumes">
                  Resume
                </HashLink>
              </li>

              <li className="duration-200 rounded-md hover:bg-purple-700  px-3 py-2 text-xl font-semibold text-purple-700 hover:text-white font-roboto">
                <Link to="blogs">Blogs</Link>
              </li>
              <li className="duration-200 rounded-md hover:bg-purple-700  px-3 py-2 text-xl font-semibold text-purple-700 hover:text-white font-roboto">
                <HashLink smooth to="/#contact">
                  Contact
                </HashLink>
              </li>
            </ul>
          </div>
        </div>
      </nav>
      <div
        className={`${
          showSecond === false ? "wrapper" : "wrapper open"
        } w-full bg-[#1a1c2c]`}
      >
        <div className={`expandable w-[80%] mx-auto`}>
          <ul className=" bg-[#1a1c2c]  py-5 ">
            <li className="duration-200 rounded-md hover:bg-[#5a7d9a]  px-3 py-2 text-xl font-semibold text-white font-raleway">
              <HashLink smooth to="/#home">
                Home
              </HashLink>
            </li>
            <li className="duration-200 rounded-md hover:bg-[#5a7d9a]  px-3 py-2 text-xl font-semibold text-white font-raleway">
              <HashLink smooth to="/#services">
                Services
              </HashLink>
            </li>
            <li className="duration-200 rounded-md hover:bg-[#5a7d9a]  px-3 py-2 text-xl font-semibold text-white font-raleway">
              <HashLink smooth to="/#skills">
                Skills
              </HashLink>
            </li>
            <li className="duration-200 rounded-md hover:bg-[#5a7d9a]  px-3 py-2 text-xl font-semibold text-white font-raleway">
              <HashLink smooth to="/#works">
                Works
              </HashLink>
            </li>
            <li className="duration-200 rounded-md hover:bg-[#5a7d9a]  px-3 py-2 text-xl font-semibold text-white font-raleway">
              <HashLink smooth to="/#resumes">
                Resume
              </HashLink>
            </li>

            <li className="duration-200 rounded-md hover:bg-[#5a7d9a]  px-3 py-2 text-xl font-semibold text-white font-raleway">
              <Link to="blogs">Blogs</Link>
            </li>
            <li className="duration-200 rounded-md hover:bg-[#5a7d9a]  px-3 py-2 text-xl font-semibold text-white font-raleway">
              <HashLink smooth to="/#contact">
                Contact
              </HashLink>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Header;
