import React from "react";
import {
  FaArrowAltCircleRight,
  FaGithub,
  FaGlobeAmericas,
} from "react-icons/fa";
import propic from "../../assets/images/propic.png";
const Work = ({ title, category, desciption, id, diff }) => {
  // const [repoShow, setRepoShow] = useState(false);s
  return (
    <div className="bg-[#1a1c2c] drop-shadow-lg rounded-2xl  duration-200 overflow-hidden">
      <div className="overflow-hidden">
        <img
          className="object-fill hover:scale-105 duration-200"
          src="https://c0.wallpaperflare.com/preview/1020/769/213/computer-light-unsplash-website.jpg"
          alt=""
        />
      </div>
      <div className="">
        <div className="px-5 my-5 ">
          <h3 className="text-center font-roboto text-2xl mt-3 text-white">
            MotoPeddler
          </h3>
          {/* tags */}
          <div className="text-md  text-center mb-3 font-roboto">
            Tags: React, Firebase,React, Firebase,React, Firebase,React
          </div>
          <div className="space-x-5 flex justify-center  items-center">
            <button
              title={`View Github Repository`}
              className="px-3 py-3 bg-white text-black hover:text-white hover:bg-transparent border-2 border-transparent hover:border-white duration-300 flex justify-between items-center text-[34px] rounded-full 2xl:rounded-none 2xl:text-lg"
            >
              <FaGithub className="2xl:mr-2" />
              <span className="hidden 2xl:block">Github Repo</span>
            </button>
            <button
              title={`View Live Website ${title}`}
              className="px-3 py-3 bg-white text-[#296e6b] hover:text-white  hover:bg-transparent border-2 border-transparent hover:border-white duration-300 flex justify-between items-center text-[34px] rounded-full 2xl:rounded-none 2xl:text-lg"
            >
              <FaGlobeAmericas className="2xl:mr-2" />
              <span className="hidden 2xl:block">Live Site</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Work;
