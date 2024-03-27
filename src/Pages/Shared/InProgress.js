import React from "react";
import { BsExclamationCircle } from "react-icons/bs";
const InProgress = () => {
  return (
    <div className="w-full bg-white">
      <div className="mx-auto w-full max-w-[1440px] text-red-500 py-5 text-[24px] font-semibold text-center flex justify-center items-center">
        <BsExclamationCircle className="mr-2" />
        This site is still in development
      </div>
    </div>
  );
};

export default InProgress;
