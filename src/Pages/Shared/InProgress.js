import React, { useState } from "react";
import { BsExclamationCircle } from "react-icons/bs";
import { IoClose } from "react-icons/io5";
const InProgress = () => {
  const [showInProgress, setShowInProgress] = useState(true);

  return (
    <>
      {showInProgress && (
        <div className="w-[100vw] bg-white mb-5 relative">
          <div className="mx-auto w-full max-w-[1440px] text-red-500 py-5 text-[24px] font-semibold text-center flex justify-center items-center">
            <BsExclamationCircle className="mr-2" />
            This site is still in development
          </div>
          <div
            onClick={() => setShowInProgress(!showInProgress)}
            className="cursor-pointer absolute top-[50%] text-[24px] -translate-y-[50%] right-[2%] text-red-500  p-3 border-2 border-transparent hover:border-red-500 rounded-full "
          >
            <IoClose />
          </div>
        </div>
      )}
    </>
  );
};

export default InProgress;
