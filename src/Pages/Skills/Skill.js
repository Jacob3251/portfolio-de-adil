import React from "react";
import { useState } from "react";

const Skill = ({ name, skillPoint }) => {
  const [val, setVal] = useState(0);

  const valIncreaser = (value) => {
    if (val < value) {
      for (let i = 0; i < value; i++) {
        setTimeout(() => {
          setVal(val + 1);
        }, 5);
      }
    }
  };
  return (
    <div className=" w-[60%] mx-auto">
      <div
        onMouseEnter={valIncreaser(skillPoint)}
        className="flex justify-between  items-center space-x-5"
      >
        <h3 className="text-2xl font-semibold">{name}</h3>

        <div
          className="radial-progress bg-[#1a1c2c] text-white border-4 border-[#1a1c2c]"
          style={{ "--value": val }}
        >
          {val} %
        </div>
      </div>
    </div>
  );
};

export default Skill;
