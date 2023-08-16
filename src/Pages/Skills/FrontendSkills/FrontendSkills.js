import React from "react";
import "./FrontendSkills.css";
import { FaAdn } from "react-icons/fa";
import {
  DiBootstrap,
  DiCss3,
  DiHtml5,
  DiNodejsSmall,
  DiReact,
} from "react-icons/di";
const FrontendSkills = () => {
  return (
    <div className="container">
      <div className="parent">
        <div className="item">
          <div>
            <DiHtml5></DiHtml5>
          </div>
        </div>
        <div className="item">
          <div>
            <DiCss3></DiCss3>
          </div>
        </div>
        <div className="item">
          <div>
            <DiNodejsSmall></DiNodejsSmall>
          </div>
        </div>
        <div className="item">
          <div>
            <DiBootstrap></DiBootstrap>
          </div>
        </div>
        <div className="item">
          <div>
            <DiReact></DiReact>
          </div>
        </div>
        <div className="item">
          <div>
            <h3 className="text-[16px] font-roboto">DaisyUI</h3>
          </div>
        </div>
        <div className="item">
          <div>
            <h3 className="text-[16px] font-roboto">TailwindCSS</h3>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FrontendSkills;
