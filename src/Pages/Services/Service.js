import React from "react";

const Service = ({ description, category, jobTitle }) => {
  return (
    // bg-[#303241]
    <div className="bg-[#1a1c2c] hover:bg-[#6c1ec49b] duration-300 p-5 rounded-md drop-shadow-lg">
      <h6 className="mb-10 font-roboto font-semibold text-[#ee874fd4] text-xs">
        {category}
      </h6>
      <h3 className="font-bold text-2xl mb-8 text-white drop-shadow-xl shadow-black">
        {jobTitle}
      </h3>
      <p className="mb-5 text-[#b0aebb] pb-20">{description}</p>
    </div>
  );
};

export default Service;
