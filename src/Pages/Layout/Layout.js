import React from "react";
import { Outlet } from "react-router";
import ParticleBackground from "../../assets/Particles/ParticleBackground";
import Header from "../Header/Header";
import Home from "../Home/Home";
import Services from "../Services/Services";
import Skills from "../Skills/Skills";
import Works from "../Works/Works";
import Footer from "../Footer/Footer";

const Layout = () => {
  return (
    <div className="bg-[#171927] w-full">
      {/* <div className="hidden">
        <ParticleBackground></ParticleBackground>
      </div> */}
      <Header></Header>
      <div className="w-full  md:w-[90%] lg:w-[85%]  mx-auto">
        <Home className=""></Home>
        <Services className=""></Services>
        <Skills className=""></Skills>
        <Works className=""></Works>
      </div>

      <Footer></Footer>
    </div>
  );
};

export default Layout;
