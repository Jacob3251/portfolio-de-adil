import React from "react";

const Service = ({ description, category, jobTitle }) => {
  return (
    <div
      className="bg-[white] shadow-2xl hover:shadow-[#cccccc] p-5 rounded-md"
      data-aos="fade-up"
      data-aos-easing="ease-out-cubic"
      data-aos-duration="1000"
    >
      <h6 className="mb-10 font-roboto font-semibold text-[#8f9bb3] text-xs">
        {category}
      </h6>
      <h3 className="font-bold text-2xl mb-8 text-[#1a1c2c]">{jobTitle}</h3>
      <p className="mb-5 text-[#5a7d9a] pb-20">{description}</p>
    </div>
  );
};

export default Service;
