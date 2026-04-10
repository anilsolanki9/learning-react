import React from "react";
import { ArrowUpRight } from "lucide-react";

const LeftContent = () => {
  return (
    <div className="flex-1/3 py-5 flex flex-col justify-between">
      <div className="space-y-4">
        <h1 className="text-6xl font-bold">Prospective Costomer Segmentation</h1>
        <p className="text-xl w-8/10">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Hic commodi sequi veritatis delectus velit, amet inventore quis sint expedita pariatur!</p>
      </div>

      <div className="bg-zinc-400/50 p-2 w-fit rounded-full">
        <ArrowUpRight size={62} strokeWidth={2.25} />
      </div>
    </div>
  );
};

export default LeftContent;
