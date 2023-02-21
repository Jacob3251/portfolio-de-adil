import React, { useState } from "react";
import { FaAlignRight, FaTimes } from "react-icons/fa";
import { Link } from "react-router-dom";
import { HashLink } from "react-router-hash-link";
import "./Header.css";
const Header = () => {
  const [showSecond, setShowSecond] = useState(false);

  return (
    <div>
      {!showSecond ? (
        <nav className="sticky top-0 z-50 bg-[#1a1c2c] ">
          <div className="flex w-[80%] py-5 lg:py-0 mx-auto justify-between items-center ">
            <div>
              <h3 className="text-white font-pacifico text-3xl font-bold">
                Protfolio <span className="font-raleway">of </span>Adil
              </h3>
            </div>
            <FaAlignRight
              onClick={() => setShowSecond(!showSecond)}
              className="sideMenuIcon text-black text-4xl"
            ></FaAlignRight>
            <div className="menuBar">
              <ul className="flex space-x-2 bg-[#1a1c2c] justify-center py-5 ">
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
        </nav>
      ) : (
        <nav className="sticky top-0 z-50 bg-[#1a1c2c] ">
          <div className="flex px-10 justify-between space-y-5 ">
            <div>
              <div>
                <h3 className="text-white font-pacifico text-3xl font-bold pt-5">
                  Protfolio <span className="font-raleway">of </span>Adil
                </h3>
              </div>
              <ul className=" space-x-2 bg-[#1a1c2c] justify-center py-5 ">
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
            <div
              className="text-white font-pacifico text-3xl font-bold"
              onClick={() => setShowSecond(!showSecond)}
            >
              <FaTimes></FaTimes>
            </div>
          </div>
        </nav>
      )}
    </div>
  );
};

export default Header;
