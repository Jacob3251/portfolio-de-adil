import React from "react";
import { Outlet } from "react-router";
import Blogs from "../Blogs/Blogs";
import Header from "../Header/Header";
import ParticleBackground from "../../assets/Particles/ParticleBackground";
import Footer from "../Footer/Footer";

const BlogLayout = () => {
  return (
    <div className="bg-[#1a1c2c] bg-opacity-80 h-[100vh] overflow-y-scroll">
      <ParticleBackground></ParticleBackground>
      <Header></Header>
      <Blogs></Blogs>
      <Footer></Footer>
    </div>
  );
};

export default BlogLayout;
