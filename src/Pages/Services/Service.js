import React from "react";

const Service = ({ description, category, jobTitle }) => {
  return (
    <div
      className="bg-[#303241]  p-5 rounded-md drop-shadow-lg"
      data-aos="fade-up"
      data-aos-easing="ease-out-cubic"
      data-aos-duration="1000"
    >
      <h6 className="mb-10 font-roboto font-semibold text-[#F09666] text-xs">
        {category}
      </h6>
      <h3 className="font-bold text-2xl mb-8 text-[#D0CAE5] drop-shadow-xl shadow-black">
        {jobTitle}
      </h3>
      <p className="mb-5 text-[#8F8BA3] pb-20">{description}</p>
    </div>
  );
};

export default Service;
