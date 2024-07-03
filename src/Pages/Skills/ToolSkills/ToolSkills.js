import React from "react";
import "./ToolSkills.css";
import { FaAdn, FaGithub, FaTrello } from "react-icons/fa";
import { SiXampp } from "react-icons/si";
import { TbBrandVscode } from "react-icons/tb";
import { GoGitMerge } from "react-icons/go";
import { BiLogoNetlify, BiLogoPostgresql } from "react-icons/bi";
const ToolSkills = () => {
  return (
    <div className="container">
      <div className="parent">
        <div className="item3">
          <div className="">
            <SiXampp />
          </div>
        </div>
        <div className="item3">
          <div>
            <TbBrandVscode />
          </div>
        </div>
        <div className="item3">
          <div>
            <FaTrello />
          </div>
        </div>
        <div className="item3">
          <div>
            <FaGithub />
          </div>
        </div>
        <div className="item3">
          <div>
            <GoGitMerge />
          </div>
        </div>
        <div className="item3">
          <div>
            <BiLogoNetlify />
          </div>
        </div>
        <div className="item3">
          <div>
            <BiLogoPostgresql />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ToolSkills;
