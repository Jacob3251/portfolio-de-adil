import React, { useRef } from "react";
import emailjs from "@emailjs/browser";
import { MdEmail, MdLocationOn, MdPhoneInTalk } from "react-icons/md";
import toast from "react-hot-toast";
const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_l8ongkc",
        "template_ga2bm0f",
        form.current,
        "nnyK3rcz4lwd-AVYF"
      )
      .then(
        (result) => {
          // console.log(result);
          toast.success("Query Submitted!!");
          e.target.reset();
        },
        (error) => {
          // console.log(error.text);
          toast.error("Query Submission Error!!");
        }
      );
  };
  return (
    <div className="w-full mb-44 px-5 md:px-20  mb-40 mx-auto py-2">
      <div className="flex items-center justify-center my-4 space-x-4">
        {/* <h6 className=" text-lg text-white">MY</h6> */}
        <h6 className="text-white font-bold font-roboto text-3xl ">
          &lt; CONTACT ME !! / &gt;
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

      {/* MAIN CONTACT COMPONENT */}
      <div className="flex flex-col-reverse md:flex-row my-8 md:my-16 justify-start items-start  md:space-x-[50px]">
        <div className="mt-[50px] lg:mt-0 w-full lg:w-[50%] flex flex-col justify-start items-start text-white ">
          <div>
            <h3 className="text-[24px] font-roboto font-semibold tracking-wider mb-2">
              Don't hesitate, let me know
            </h3>
            <div className="text-[14px]  flex justify-start items-center space-x-1 mb-2  font-roboto">
              <MdLocationOn className="text-[18px]"></MdLocationOn>
              <p>Sylhet, Bangladesh</p>
            </div>
            <div className="text-[14px] flex justify-start items-center space-x-1 mb-2  font-roboto">
              <MdPhoneInTalk className="text-[18px]"></MdPhoneInTalk>
              <p>+8801754974851</p>
            </div>
            <div className="text-[14px] flex justify-start items-center space-x-1 mb-2  font-roboto">
              <MdEmail className="text-[18px]"></MdEmail>
              <a
                href="mailto:jacobfrye3251@gmail.com"
                className="hover:text-purple-700"
              >
                jacobfrye3251@gmail.com
              </a>
            </div>
          </div>
        </div>
        <div className="w-full lg:w-[50%]">
          <form
            className=" w-full flex flex-col space-y-5"
            ref={form}
            onSubmit={sendEmail}
          >
            <input
              type="text"
              className="py-3 px-5 rounded-md font-roboto text-[14px] bg-[#1a1c2c] placeholder:tracking-wider placeholder:text-white drop-shadow-md"
              placeholder="Full Name"
              name="user_name"
            />

            <input
              type="email"
              className="py-3 px-5 rounded-md font-roboto text-[14px] bg-[#1a1c2c] placeholder:tracking-wider placeholder:text-white drop-shadow-md"
              placeholder="Email"
              name="user_email"
            />

            <textarea
              className="py-3 px-5 rounded-md font-roboto text-[14px] bg-[#1a1c2c] placeholder:tracking-wider placeholder:text-white drop-shadow-md"
              placeholder="Message"
              name="message"
            />
            <input
              type="submit"
              className="py-2 w-full  drop-shadow-md px-5 duration-300 translate-y-0 hover:translate-y-[-3px] brightness-95 hover:brightness-110 rounded-md font-roboto text-[14px] bg-purple-800 text-white font-semibold tracking-wider"
              value="Send"
            />
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
