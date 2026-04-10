import React from "react";
import LeftContent from "./LeftContent";
import RightContent from "./RightContent";

const Page2Content = () => {
  return (
    <div className="flex-1 flex gap-4">
      <LeftContent />

      <RightContent />
    </div>
  );
};

export default Page2Content;
