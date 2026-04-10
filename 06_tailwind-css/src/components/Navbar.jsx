import React from "react";
import { CornerDownRight } from "lucide-react";

const Navbar = ({ left = "NA", right = "NA" }) => {
  return (
    <div className="flex justify-between items-center text-lg font-mono uppercase">
      <h2 className="px-4 py-2 bg-black text-white rounded-full">{left}</h2>
      <div className="flex gap-2 items-center justify-center bg-zinc-400/50 px-4 py-2 rounded-full">
        <CornerDownRight size={27} strokeWidth={2.25} />
        {right}
      </div>
    </div>
  );
};

export default Navbar;
