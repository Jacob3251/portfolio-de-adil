import React from "react";
import Header from "../Header/Header";
import Home from "../Home/Home";
import Services from "../Services/Services";
import Skills from "../Skills/Skills";
import Works from "../Works/Works";
import Footer from "../Footer/Footer";
import Contact from "../Contact/Contact";
import InProgress from "../Shared/InProgress";
import { Toaster } from "react-hot-toast";
import { Helmet } from "react-helmet";

const Layout = () => {
  return (
    <div className="bg-[#171927] w-full">
      <Helmet>
        <meta charSet="utf-8" />
        <title>Adil - MERN Stack Developer</title>
        <link
          rel="canonical"
          href="https://mdnayeemhasanadilportfolio.netlify.app/"
        />
        <meta
          name="description"
          content="Portfolio of Md Nayeem Hasan Adil, a proficient MERN stack developer skilled in React, Node.js, Express.js, MongoDB, PostgreSQL, and more."
        ></meta>
        <meta
          name="keywords"
          content="MERN stack developer, React, Node.js, Express.js, MongoDB, PostgreSQL, web development, frontend, backend, full stack developer, portfolio"
        />

        <meta name="author" content="Md Nayeem Hasan Adil" />
      </Helmet>
      {/* <div className="hidden">
        <ParticleBackground></ParticleBackground>
      </div> */}
      {/* <InProgress></InProgress> */}
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
      <Toaster />
    </div>
  );
};

export default Layout;
