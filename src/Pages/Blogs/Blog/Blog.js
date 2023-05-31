import React, { useRef } from "react";
import { useEffect } from "react";
import { useState } from "react";
import "./Blog.css";
const Blog = () => {
  const [expand, setExpand] = useState(false);
  // const [height, setHeight] = useState("0");
  return (
    <div className="bg-white p-5 rounded-md">
      <div className="flex space-x-5 items-start">
        {/* img container below */}
        <div className="w-[120px] rounded-md bg-blue-500 overflow-hidden">
          <img
            className="w-full"
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQrysoq6-N41zWJZZMSvYEvlVhnjsImArdYEg&usqp=CAU"
            alt=""
          />
        </div>
        <div className="w-full">
          <div>
            <h3 className="text-xl">
              <span className="font-bold mr-1">Title:</span> The Crucial Role of
              JWT Tokens in Modern Web Development
            </h3>
          </div>
          <div className="mt-2">
            <p className="text-gray-500 font-serif text-[16px] italic">
              <span>Published At: </span> 26 Feb, 2023
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Blog;
