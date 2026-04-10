import React from "react";
import Navbar from "../components/Navbar";
import Page2Content from "../components/section2/Page2Content";

const Section2 = () => {
  return (
    <div className="py-5 w-full h-screen max-h-200 flex flex-col gap-5">
      <Navbar left="Market Trends" right="Digital Banking Platform" />

      <Page2Content />
    </div>
  );
};

export default Section2;
