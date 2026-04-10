import React from "react";
import Strip from "./Strip";

const RightContent = () => {
  return (
    <div className="flex-1 flex gap-15 items-end px-3 relative">
      <Strip value={43} year={2019} />
      <Strip value={66} year={2019} />
      <Strip value={78} year={2019} />
      <Strip value={92} year={2019} />
      <Strip value={110} year={2019} />
      <Strip value={153} year={2019} />
      <Strip value={194} year={2019} />
      <Strip value={245} year={2019} />
      <Strip value={276} year={2019} />

      <div className="absolute top-35 left-20 bg-black text-white font-bold text-2xl px-5 py-2 rounded-full">26.5% CODR</div>
    </div>
  );
};

export default RightContent;
