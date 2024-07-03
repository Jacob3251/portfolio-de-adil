import React from "react";
import "./BackendSkills.css";
import { FaAdn } from "react-icons/fa";
import { TbBrandNodejs } from "react-icons/tb";
import { SiMongoose } from "react-icons/si";
import { SiPrisma, SiExpress } from "react-icons/si";
import { FaLaravel } from "react-icons/fa";
import jwt from "../../../assets/images/jwt.png";
const BackendSkills = () => {
  return (
    <div className="container">
      <div className="parent">
        <div className="item2">
          <div>
            <FaLaravel />
          </div>
        </div>
        <div className="item2">
          <div>
            <SiExpress />
          </div>
        </div>
        <div className="item2">
          <div className="p-10">
            <img
              src="https://svgmix.com/uploads/6ffd3c-cloudinary-icon.svg"
              alt="cloudinary"
            />
          </div>
        </div>
        <div className="item2">
          <div>
            <SiPrisma />
          </div>
        </div>
        <div className="item2">
          <div>
            <TbBrandNodejs />
          </div>
        </div>
        <div className="item2">
          <div>
            <SiMongoose />
          </div>
        </div>
        <div className="item2">
          <div className="p-5">
            <img src={jwt} alt="jwt" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default BackendSkills;
