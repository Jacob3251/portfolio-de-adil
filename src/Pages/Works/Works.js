import React, { useEffect, useState } from "react";
import Work from "./Work";
import Typist from "react-typist";
import Carousel from "../Shared/Carousel";
import img1 from "../../assets/images/Aviate-Abroad-Home.png";
import img2 from "../../assets/images/Tuscany-Tours.png";
import img3 from "../../assets/images/CGSC.png";
import img4 from "../../assets/images/Difny.png";
import img5 from "../../assets/images/rightway.png";
import img6 from "../../assets/images/Vintage-International.png";
const Works = () => {
  const [showTyper, setShowTyper] = useState(true);
  const works = [
    {
      id: 1,
      category: "WEB DEVELOPMENT",
      title: "Aviate Abroad",
      imgLink: img1,
      tags: "React, React Router, Context API, Tailwind CSS, Axios, Prisma, PostgreSQL, Nodejs, JWT etc ",
      gitLink: "https://github.com/Jacob3251/aviatero",
      liveLink: "https://aviategloballtd.co.uk/",
      desciption:
        "A consultancy firm website featuring roles and permissions, node authentication with jwt verification and a fully functional dashboard where the user's can do CRUD operations on clients, leads; Send emails and newsletters; Manage the frontend site content from the backend.",
    },
    {
      id: 2,
      category: "WEB DEVELOPMENT",
      title: "Tours to Tuscany",
      imgLink: img2,
      tags: "React, React Router, Context API, Tailwind CSS, SwiperJS, Axios, Auth0",
      gitLink: "https://github.com/Jacob3251/trendy-Blogger-Client-Side",
      liveLink: "https://tuscany-tours.netlify.app/",
      desciption:
        "A Travel Website Frontend demo design implementation featuring AUTH0 authentication for login. This site has multiple routes featuring multiple sliders, banners, forms etc.",
    },
    {
      id: 3,
      category: "WEB DEVELOPMENT",
      title: "CGSC",
      imgLink: img3,
      tags: "React, React Router, Tailwind CSS, SwiperJS",
      gitLink: "https://github.com/Jacob3251/School-Frontend-Demo",
      liveLink: "https://cheerful-custard-school.netlify.app/",
      desciption: "A school website frontend design implementation.",
    },
    {
      id: 4,
      category: "WEB DEVELOPMENT",
      title: "Difny",
      imgLink: img4,
      tags: "React, React Router, Context API, Tailwind CSS, Axios, Firebase",
      gitLink: "https://github.com/Jacob3251/trendy-Blogger-Client-Side",
      liveLink: "https://tiny-kringle-865f33.netlify.app/",
      desciption:
        "A single page website featuring pixel perfact responsive social site feed page",
    },
    {
      id: 5,
      category: "WEB DEVELOPMENT",
      title: "Rightway",
      imgLink: img5,
      tags: "React, React Router, Context API, Tailwind CSS, etc",
      gitLink: "https://github.com/Jacob3251/rightway",
      liveLink: "https://rightway-mockup.netlify.app/",
      desciption: "A responsive frontend design for a consultancy firm",
    },
    {
      id: 6,
      category: "WEB DEVELOPMENT",
      title: "Vintage International",
      imgLink: img6,
      tags: "HTML, CSS, JS, Owl Carousel",
      gitLink: "https://github.com/Lilliput-Digital/Vintage-International",
      liveLink: "https://vintage-international.netlify.app/",
      desciption: "A SPA website for a consultancy made with Vanila JS.",
    },
  ];

  return (
    <div className="w-full px-5 md:px-20 " data-aos="fade-up">
      <div className="flex items-center justify-center my-3  space-x-4">
        {/* <h6 className=" text-lg text-white">MY</h6> */}
        <h6 className="text-white font-bold font-roboto text-3xl ">
          &lt; MY WORK / &gt;
        </h6>
      </div>
      <div className="flex w-full justify-center items-center">
        <div className=" my-1 bg-white w-full" style={{ height: "2px" }} />
        <span className="mx-2"></span>
        <div className=" my-1 bg-white w-full" style={{ height: "2px" }} />
        <div className=" my-1 bg-white w-full" style={{ height: "2px" }} />
        <span className="mx-2"></span>
        <div className=" my-1 bg-white w-full" style={{ height: "2px" }} />
        <div className=" my-1 bg-white w-full" style={{ height: "2px" }} />
        <span className="mx-2"></span>
        <div className=" my-1 bg-white w-full" style={{ height: "2px" }} />
        <div className=" my-1 bg-white w-full" style={{ height: "2px" }} />
        <span className="mx-2"></span>
        <div className=" my-1 bg-white w-full" style={{ height: "2px" }} />
      </div>
      {/* Individual projects below */}
      {showTyper ? (
        <div className="w-full text-center my-40">
          <Typist onTypingDone={() => setShowTyper(!showTyper)}>
            <h3 className="text-3xl font-bold text-[#F0E68C]">Loading...</h3>
          </Typist>
        </div>
      ) : (
        <div className="grid grid-cols-1 gap-[50px] my-10">
          {works.map((work, index) => (
            <Work
              index={index + 1}
              id={work.id}
              key={work.id}
              imgLink={work.imgLink}
              title={work.title}
              category={work.category}
              tags={work.tags}
              desciption={work.desciption}
              gitLink={work.gitLink}
              liveLink={work.liveLink}
            ></Work>
          ))}
        </div>
      )}
    </div>
  );
};

export default Works;
