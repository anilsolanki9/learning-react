import React from "react";

const Strip = ({ value, year }) => {
  const maxValue = 300;
  const heightPercent = (value / maxValue) * 100;

  return (
    <div style={{ height: heightPercent + "%" }} className="strip bg-black/80 w-4 relative rounded-full">
      <h4 className="absolute bottom-full font-bold">{value}</h4>
      <p className="top-full absolute font-bold left-1/2 -translate-x-1/2">{year}</p>
    </div>
  );
};

export default Strip;
