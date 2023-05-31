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
    <div className="bg-[#171927] bg-opacity-80">
      <ParticleBackground></ParticleBackground>
      <Header></Header>
      <Home className=""></Home>
      <Services className=""></Services>
      <Skills className=""></Skills>
      <Works className=""></Works>
      <Footer></Footer>
    </div>
  );
};

export default Layout;
