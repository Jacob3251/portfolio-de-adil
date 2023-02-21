import React from "react";
import { Outlet } from "react-router";
import ParticleBackground from "../../assets/Particles/ParticleBackground";
import Header from "../Header/Header";
import Home from "../Home/Home";
import Services from "../Services/Services";
import Skills from "../Skills/Skills";
import Works from "../Works/Works";

const Layout = () => {
  return (
    <div className="bg-[#1a1c2c] bg-opacity-95">
      <ParticleBackground></ParticleBackground>
      <Header></Header>
      <Home className=""></Home>
      <Services className=""></Services>
      <Skills className=""></Skills>
      <Works className=""></Works>
    </div>
  );
};

export default Layout;
