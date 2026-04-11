import React from "react";
import { useState } from "react";
import { useEffect } from "react";

const App = () => {
  const [num, setNum] = useState(0);

  const [num2, setNum2] = useState(100);

  useEffect(
    function () {
      console.log("Use effect runnig...");
    },
    [num, num2],
  );

  return (
    <div>
      <div>The value of num is : {num}</div>
      <div>The value of num2 is : {num2}</div>

      <button
        className="px-5 py-1 bg-slate-400 m-3"
        onClick={() => {
          setNum(num + 1);
        }}
      >
        Change num
      </button>

      <button
        className="px-5 py-1 bg-slate-400 m-3"
        onClick={() => {
          setNum2(num2 + 100);
        }}
      >
        Change num2
      </button>
    </div>
  );
};

export default App;
