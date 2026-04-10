import React from "react";
import { ArrowUpRight } from "lucide-react";

const SvgCard = ({ percent, text }) => {
  return (
    <div className="flex-1 text-black h-full relative">
      <img className="drop-shadow-md drop-shadow-black/40" src="./card.svg" alt="" />

      <div className="absolute inset-0 py-15 px-10 flex flex-col justify-end gap-4">
        <h2 className="text-5xl font-bold">{percent}%</h2>
        <p>{text}</p>
      </div>

      <div className="absolute top-12 -right-6 -translate-x-1/2 -translate-y-1/2 bg-[#D9D9D9] rounded-full p-3 drop-shadow-md drop-shadow-black/40">
        <ArrowUpRight size={52} strokeWidth={1.7} />
      </div>
    </div>
  );
};

export default SvgCard;
