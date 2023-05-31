import React from "react";
import Blog from "./Blog/Blog";

const Blogs = () => {
  return (
    <div className="px-[10%] py-[20px]">
      <h3 className="text-white text-[34px] font-roboto text-center glitchy">
        &lt; Published Blogs / &gt;
      </h3>
      <div className="flex w-full justify-center items-center">
        <hr className="my-2 w-full" />
        <span className="mx-2"></span>
        <hr className="my-2 w-full" />
        <hr className="my-2 w-full" />
        <span className="mx-2"></span>
        <hr className="my-2 w-full" />
        <hr className="my-2 w-full" />
        <span className="mx-2"></span>
        <hr className="my-2 w-full" />
        <hr className="my-2 w-full" />
        <span className="mx-2"></span>
        <hr className="my-2 w-full" />
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-[50px] p-5">
        <Blog></Blog>
        <Blog></Blog>
        <Blog></Blog>
        <Blog></Blog>
        <Blog></Blog>
        <Blog></Blog>
        <Blog></Blog>
        <Blog></Blog>
        <Blog></Blog>
        <Blog></Blog>
        <Blog></Blog>
        <Blog></Blog>
        <Blog></Blog>
        <Blog></Blog>
        <Blog></Blog>
        <Blog></Blog>
        <Blog></Blog>
        <Blog></Blog>
        <Blog></Blog>
        <Blog></Blog>
        <Blog></Blog>
        <Blog></Blog>
        <Blog></Blog>
      </div>
    </div>
  );
};

export default Blogs;
