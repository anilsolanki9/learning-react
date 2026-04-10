import React from "react";
import LeftContent from "./LeftContent";
import RightImagesCards from "./RightImagesCards";

const Page1Content = ({cardsData}) => {
  return (
    <div className="flex-1 flex gap-3">
      <LeftContent />

      <RightImagesCards cardsData={cardsData} />
    </div>
  );
};

export default Page1Content;
