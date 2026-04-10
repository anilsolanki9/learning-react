import React from "react";
import Page1 from "./pages/Page1";
import Page2 from "./pages/Page2";
import Page3 from "./pages/Page3";

const App = () => {
  const pageScrolling = (speed) => {
    // console.log("Page scrolling...at speed: ", speed);
    if (speed > 0) console.log("scroll down");
    else console.log("Scroll up");
  };

  return (
    <div
      onWheel={(e) => {
        // console.log(e.deltaY); // speed of y scroll

        pageScrolling(e.deltaY);
      }}
    >
      <Page1 />
      <Page2 />
      <Page3 />
    </div>
  );
};

export default App;

/*
<div
  onMouseMove={(e) => {
    console.log(e.clientX, e.clientY);
  }}
  className="h-100 w-100 bg-red-500"
>
  Hello
</div>
*/
