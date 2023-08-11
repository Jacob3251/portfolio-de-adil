import React from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // Import the carousel styles
import "./ResponsiveCarousel.css";
import { DiCss3, DiHtml5, DiJsBadge } from "react-icons/di";
import { useState } from "react";
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
      <div className="drop-shadow-md bg-[#1a1c2c] rounded-xl">
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
          <div className="font-roboto">
            <ul className="shieldContainer">
              <li className="shieldItem bg-white drop-shadow-md">
                HTML <DiHtml5 className="ml-2 text-orange-400" />
              </li>
              <li className="shieldItem bg-white drop-shadow-md">
                CSS <DiCss3 className="ml-2 text-blue-400" />
              </li>
              <li className="shieldItem bg-white drop-shadow-md">
                Js <DiJsBadge className="ml-2 text-yellow-400" />
              </li>
              <li className="shieldItem">JAVASCRIPT</li>
              <li className="shieldItem">TAILWIND</li>
              <li className="shieldItem">BOOTSTRAP</li>
            </ul>
          </div>
          <div className="font-roboto">
            <ul className="shieldContainer">
              <li className="shieldItem">NODEJS</li>
              <li className="shieldItem">EXPRESS</li>
              <li className="shieldItem">MONGODB</li>
              <li className="shieldItem">JWT</li>
              <li className="shieldItem">MONGOOSE</li>
            </ul>
          </div>
          <div className="font-roboto">
            <ul className="shieldContainer">
              <li className="shieldItem">FIREBASE</li>
              <li className="shieldItem">GIT</li>
              <li className="shieldItem">NETLIFY</li>
              <li className="shieldItem">VERCEL</li>
              <li className="shieldItem">CHATGPT</li>
            </ul>
          </div>
          {/* Add more slides as needed */}
        </Carousel>
      </div>
    </div>
  );
}

export default ResponsiveCarousel;
