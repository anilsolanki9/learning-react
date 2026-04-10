import React from "react";
import { Zap } from "lucide-react";
import SvgCard from "./SvgCard";

const LeftContent = () => {
  return (
    <div className="flex-1 space-y-10 flex flex-col">
      <h1 className="text-6xl font-bold">E-com market is expected to exceed $300B in 2027</h1>
      <div className="flex gap-3">
        <Zap stroke="blue" size={52} strokeWidth={1.5} />
        <p className="text-xl w-7/10">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos, reprehenderit nobis eveniet et sequi architecto nesciunt autem mollitia aspernatur quae.</p>
      </div>

      <div className="flex flex-1 gap-5">
        <SvgCard percent={26.7} text="Expected annual growth of eCom market size" />
        <SvgCard percent={25} text="E-com share of the organized retail in 2020" />
      </div>
    </div>
  );
};

export default LeftContent;
