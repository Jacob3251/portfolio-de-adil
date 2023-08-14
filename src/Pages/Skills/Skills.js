import React from "react";
import ResponsiveCarousel from "../Shared/ResponsiveCarousel";
const Skills = () => {
  return (
    <div
      className="w-full my-0 md:my-[350px] px-5 md:px-20  mb-40 mx-auto py-2"
      id="skills"
    >
      <div className="flex md:flex-row flex-col w-full  rounded-lg">
        <div className="flex flex-col  font-roboto justify-center items-center  md:w-[50%]">
          <h6 className="text-white font-bold font-roboto text-3xl ">
            &lt; MY SKILLS / &gt;
          </h6>
          <p className="text-md my-5 px-14 hidden md:block">
            I'm proud to share my proficiency in the MERN (MongoDB, Express.js,
            React, Node.js) stack, a powerful toolkit for crafting modern web
            applications. I've dived deep into MongoDB, mastering the art of
            creating efficient and expandable databases. With Express.js, I've
            honed my ability to construct smooth pathways for data to flow
            between the frontend and backend, ensuring a seamless user
            experience. Through React, I've become skilled at building
            eye-catching interfaces that are not only visually appealing but
            also user-friendly. Thanks to Node.js, I've gained the capability to
            build fast and scalable network applications, contributing to the
            overall speed and performance of the stack. Bringing these
            technologies together, I'm well-prepared to take on diverse projects
            in web development, from idea to deployment, and create solutions
            that truly stand out.
          </p>
        </div>
        <div className="md:w-[50%] md:mx-auto">
          <ResponsiveCarousel></ResponsiveCarousel>
        </div>
      </div>
      {/* <h3 className="text-center font-extrabold text-4xl mt-5 mb-2 font-raleway  text-white">
        PROFESSIONAL SKILLS
      </h3> */}
      {/* <div className="flex items-center justify-center my-5  space-x-4">
        
        <h6 className="text-white font-bold font-roboto text-3xl ">
          &lt; MY SKILLS / &gt;
        </h6>
      
      </div> */}
      {/* <div className="flex w-full justify-center items-center">
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
      </div> */}
      {/* Progress bar below */}
      {/* <div className="mb-20  w-full">
        <div className="mt-[100px] space-y-5">
          <div
            data-aos="fade-right"
            data-aos-easing="ease-in-out"
            data-aos-duration="500"
            className="bg-white py-2 pl-2 rounded-xl"
          >
            <div
              data-aos="fade-left"
              data-aos-delay="100"
              data-aos-anchor="#example-anchor"
              data-aos-offset="500"
              data-aos-duration="500"
              className={`py-5 pl-10 bg-[#1a1c2c] rounded-xl bg-opacity-80 my-2 w-[90%]`}
            >
              <h3 className="font-bold text-lg text-white">HTML</h3>
              <h3 className="font-bold text-lg text-white">90%</h3>
            </div>
          </div>
          <div
            data-aos="fade-up"
            data-aos-delay="100"
            data-aos-easing="ease-in-out"
            data-aos-duration="500"
            className="bg-white py-2 pl-2 rounded-xl"
          >
            <div
              data-aos="fade-left"
              data-aos-delay="100"
              data-aos-anchor="#example-anchor"
              data-aos-offset="500"
              data-aos-duration="500"
              className={`py-5 pl-10 bg-[#1a1c2c] rounded-xl bg-opacity-80 my-2 w-[80%]`}
            >
              <h3 className="font-bold text-lg text-white">CSS</h3>
              <h6 className="font-bold text-lg text-white">80%</h6>
            </div>
          </div>
          <div
            data-aos="fade-up"
            data-aos-delay="100"
            data-aos-easing="ease-in-out"
            data-aos-duration="500"
            className="bg-white py-2 pl-2 rounded-xl"
          >
            <div
              data-aos="fade-left"
              data-aos-delay="100"
              data-aos-anchor="#example-anchor"
              data-aos-offset="500"
              data-aos-duration="500"
              className={`py-5 pl-10 bg-[#1a1c2c] rounded-xl bg-opacity-80 my-2 w-[70%]`}
            >
              <h3 className="font-bold text-lg text-white">Javascript</h3>
              <h6 className="font-bold text-lg text-white">70%</h6>
            </div>
          </div>
          <div
            data-aos="fade-up"
            data-aos-delay="100"
            data-aos-easing="ease-in-out"
            data-aos-duration="500"
            className="bg-white py-2 pl-2 rounded-xl"
          >
            <div
              data-aos="fade-left"
              data-aos-delay="100"
              data-aos-anchor="#example-anchor"
              data-aos-offset="500"
              data-aos-duration="500"
              className={`py-5 pl-10 bg-[#1a1c2c] rounded-xl bg-opacity-80 my-2 w-[85%]`}
            >
              <h3 className="font-bold text-lg text-white">BootStrap</h3>
              <h6 className="font-bold text-lg text-white">85%</h6>
            </div>
          </div>
          <div
            data-aos="fade-up"
            data-aos-delay="100"
            data-aos-easing="ease-in-out"
            data-aos-duration="500"
            className="bg-white py-2 pl-2 rounded-xl"
          >
            <div
              data-aos="fade-left"
              data-aos-delay="100"
              data-aos-anchor="#example-anchor"
              data-aos-offset="500"
              data-aos-duration="500"
              className={`py-5 pl-10 bg-[#1a1c2c] rounded-xl bg-opacity-80 my-2 w-[95%]`}
            >
              <h3 className="font-bold text-lg text-white">Tailwind</h3>
              <h6 className="font-bold text-lg text-white">95%</h6>
            </div>
          </div>
          <div
            data-aos="fade-up"
            data-aos-delay="100"
            data-aos-easing="ease-in-out"
            data-aos-duration="500"
            className="bg-white py-2 pl-2 rounded-xl"
          >
            <div
              data-aos="fade-left"
              data-aos-delay="100"
              data-aos-anchor="#example-anchor"
              data-aos-offset="500"
              data-aos-duration="500"
              className={`py-5 pl-10 bg-[#1a1c2c] rounded-xl bg-opacity-80 my-2 w-[85%]`}
            >
              <h3 className="font-bold text-lg text-white">React</h3>
              <h6 className="font-bold text-lg text-white">85%</h6>
            </div>
          </div>
          <div
            data-aos="fade-up"
            data-aos-delay="100"
            data-aos-easing="ease-in-out"
            data-aos-duration="500"
            className="bg-white py-2 pl-2 rounded-xl"
          >
            <div
              data-aos="fade-left"
              data-aos-delay="100"
              data-aos-anchor="#example-anchor"
              data-aos-offset="500"
              data-aos-duration="500"
              className="py-5 pl-10 bg-[#1a1c2c] rounded-xl bg-opacity-80 my-2 w-[45%]"
            >
              <h3 className="font-bold text-lg text-white">Mongodb</h3>
              <h6 className="font-bold text-lg  text-white">45%</h6>
            </div>
          </div>
          <div
            data-aos="fade-up"
            data-aos-delay="100"
            data-aos-easing="ease-in-out"
            data-aos-duration="500"
            className="bg-white py-2 pl-2 rounded-xl"
          >
            <div
              data-aos="fade-left"
              data-aos-delay="100"
              data-aos-anchor="#example-anchor"
              data-aos-offset="500"
              data-aos-duration="500"
              className="py-5 pl-10 bg-[#1a1c2c] rounded-xl bg-opacity-80 my-2 w-[35%]"
            >
              <h3 className="font-bold text-lg text-white">Nodejs</h3>
              <h6 className="font-bold text-lg text-white">35%</h6>
            </div>
          </div>
        </div>
      </div> */}

      {/* <div className="parent">
       
        <div className="row">
          <div className="item">
            <div className="circle">
              <div className="innerCircle">1</div>
            </div>
          </div>
          <div className="connectingline"></div>
          <div className="item">
            <div className="circle">
              <div className="innerCircle">2</div>
            </div>
          </div>
          <div className="connectingline"></div>
          <div className="item">
            <div className="circle">
              <div className="innerCircle">3</div>
            </div>
          </div>
          <div className="connectingline"></div>
          <div className="item">
            <div className="circle">
              <div className="innerCircle">4</div>
            </div>
          </div>
          <div className="verticalConnection"></div>
        </div>
        <div className="row">
          <div className="item">
            <div className="circle">
              <div className="innerCircle">5</div>
            </div>
          </div>
          <div className="connectingline"></div>
          <div className="item">
            <div className="circle">
              <div className="innerCircle">6</div>
            </div>
          </div>
          <div className="connectingline"></div>
          <div className="item">
            <div className="circle">
              <div className="innerCircle">7</div>
            </div>
          </div>
          <div className="connectingline"></div>
          <div className="item">
            <div className="circle">
              <div className="innerCircle">7</div>
            </div>
          </div>
        </div>
        
        <div className="row">
          <div className="item">
            <div className="circle">
              <div className="innerCircle">6</div>
            </div>
          </div>
          <div className="connectingline"></div>
          <div className="item">
            <div className="circle">
              <div className="innerCircle">7</div>
            </div>
          </div>
        </div>
      </div> */}

      {/* <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-[50px] mx-auto w-[95%] mt-[80px]">
        <Skill name="HTML" skillPoint={85}></Skill>
        <Skill name="CSS" skillPoint={75}></Skill>
        <Skill name="JAVASCRIPT" skillPoint={90}></Skill>
        <Skill name="REACT" skillPoint={87}></Skill>
        <Skill name="TAILWIND CSS" skillPoint={95}></Skill>
        <Skill name="BOOTSTRAP" skillPoint={70}></Skill>
        <Skill name="NODEJS" skillPoint={80}></Skill>
        <Skill name="TYPESCRIPT" skillPoint={83}></Skill>
        <Skill name="EXPRESS" skillPoint={75}></Skill>
        <Skill name="MONGODB" skillPoint={98}></Skill>
      </div> */}
    </div>
  );
};

export default Skills;
