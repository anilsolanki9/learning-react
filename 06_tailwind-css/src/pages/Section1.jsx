import React from "react";
import Navbar from "../components/Navbar";
import Page1Content from "../components/section1/Page1Content";

const Section1 = ({ cardsData }) => {
  return (
    <div className="py-5 w-full h-screen max-h-200 flex flex-col gap-5">
      <Navbar left="Target Audience" right="Digital Banking Platform" />

      <Page1Content cardsData={cardsData} />
    </div>
  );
};

export default Section1;
