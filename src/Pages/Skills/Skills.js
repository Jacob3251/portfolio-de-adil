import React from "react";
import ResponsiveCarousel from "../Shared/ResponsiveCarousel";
const Skills = () => {
  return (
    <div className="w-full my-0 px-5 md:px-20  mb-40 mx-auto py-2">
      <div className="flex md:flex-row flex-col w-full  rounded-lg">
        <div className="flex flex-col  font-roboto justify-center items-center  w-full  md:w-[50%]">
          <h6 className="text-white font-bold font-roboto text-3xl ">
            &lt; MY SKILLS / &gt;
          </h6>
          <p className="text-md my-5 md:px-14 text-left block text-white ">
            I'm skilled at building interactive user interfaces with React,
            using React Router for navigation, and managing state with Redux and
            Context API. My expertise in HTML, CSS, and JavaScript allows me to
            create visually appealing and well-structured websites.
            Additionally, I utilize Bootstrap, Tailwind CSS, and Swiper JS for
            responsive designs and fluid sliders. On the backend, I develop
            reliable server-side apps with Node.js and Express.js, focusing on
            scalability and performance. I handle both NoSQL (MongoDB) and SQL
            (PostgreSQL) databases, using Prisma and Mongoose for effective data
            management. For image management and storage, I incorporate
            Cloudinary, and for secure authentication, I use Firebase Auth,
            Auth0, and Supabase. I also use Postman for API testing and
            debugging, VS Code for coding, and Git and GitHub for version
            management. With my broad skill set and commitment to lifelong
            learning, I can tackle any web development problem and produce
            excellent frontend and backend solutions.
          </p>
        </div>
        <div className="md:w-[50%] md:mx-auto w-full ">
          <ResponsiveCarousel></ResponsiveCarousel>
        </div>
      </div>
    </div>
  );
};

export default Skills;
