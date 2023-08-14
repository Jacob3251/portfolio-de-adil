import React from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // Import the carousel styles
import "./ResponsiveCarousel.css";
import { DiCss3, DiHtml5, DiJsBadge } from "react-icons/di";
import { useState } from "react";
import FrontendSkills from "../Skills/FrontendSkills/FrontendSkills";
import BackendSkills from "../Skills/BackendSkills/BackendSkills";
import ToolSkills from "../Skills/ToolSkills/ToolSkills";
function ResponsiveCarousel() {
  const [act, setAct] = useState(0);
  const handleActiveTab = (index) => {
    setAct(index);
  };
  return (
    <div>
      <div className="my-5">
        <ul className="flex justify-center space-x-5">
          <li
            onClick={() => handleActiveTab(0)}
            className={`tab ${act === 0 && "active"}`}
          >
            FRONTEND
          </li>
          <li
            onClick={() => handleActiveTab(1)}
            className={`tab ${act === 1 && "active"}`}
          >
            BACKEND
          </li>
          <li
            onClick={() => handleActiveTab(2)}
            className={`tab ${act === 2 && "active"}`}
          >
            TOOLS
          </li>
        </ul>
      </div>
      <div className="drop-shadow-md  rounded-xl">
        <Carousel
          onChange={handleActiveTab}
          selectedItem={act}
          showStatus={false}
          showArrows={false}
          showIndicators={false}
          showThumbs={false} // Display thumbnail navigation
          infiniteLoop={true} // Allow infinite looping of slides
          autoPlay={true} // Automatically advance slides
          interval={3000} // Time between slide transitions (in milliseconds)
          stopOnHover={true} // Stop autoPlay when hovering over the carousel
        >
          <FrontendSkills></FrontendSkills>
          <BackendSkills></BackendSkills>
          <ToolSkills></ToolSkills>
          {/* Add more slides as needed */}
        </Carousel>
      </div>
    </div>
  );
}

export default ResponsiveCarousel;
