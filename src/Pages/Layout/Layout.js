import React from "react";
import Header from "../Header/Header";
import Home from "../Home/Home";
import Services from "../Services/Services";
import Skills from "../Skills/Skills";
import Works from "../Works/Works";
import Footer from "../Footer/Footer";
import Contact from "../Contact/Contact";

const Layout = () => {
  return (
    <div className="bg-[#171927] w-full">
      {/* <div className="hidden">
        <ParticleBackground></ParticleBackground>
      </div> */}
      <Header></Header>
      <div className="w-full  max-w-[1440px] mx-auto ">
        <div id="home" className="h-[80px] "></div>
        <Home className=""></Home>
        <div id="skills" className="h-[80px] "></div>
        <Skills className=""></Skills>
        <div id="services" className="h-[80px] "></div>
        <Services className=""></Services>
        <div id="works" className="h-[80px] "></div>
        <Works className=""></Works>
        <div id="contact" className="h-[80px] "></div>
        <Contact className=""></Contact>
      </div>

      <Footer></Footer>
    </div>
  );
};

export default Layout;
