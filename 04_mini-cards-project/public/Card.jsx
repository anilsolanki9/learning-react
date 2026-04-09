import React, { useState } from "react";

import { Bookmark } from "lucide-react";

const Card = ({ jobData }) => {
  const [isSaved, setIsSaved] = useState(jobData.isSaved);

  return (
    <div className="flex flex-col justify-between bg-white text-black w-80 h-95 rounded-4xl">
      {/* top */}
      <div className="p-5 space-y-3">
        <div className="flex justify-between items-start">
          <img className="w-15 h-15 object-cover object-center rounded-full ring-2 ring-offset-6 ring-zinc-400" src={jobData.logo} alt="" />

          <button
            onClick={() => {
              setIsSaved((prev) => (prev ? false : true));
            }}
            className="flex items-center border px-2 py-1 rounded border-zinc-500 cursor-pointer"
          >
            <span>{isSaved ? "Saved" : "Save"}</span>
            <Bookmark size={24} strokeWidth={2} className={isSaved ? `fill-zinc-400 stroke-zinc-700` : ""} />
          </button>
        </div>

        <div>
          <h3 className="text-xl font-bold">
            {jobData.company} <span className="text-xs font-semibold text-zinc-500">{jobData.posted}</span>
          </h3>
          <h2 className="text-2xl font-bold">{jobData.role}</h2>
          <div className="flex flex-wrap gap-3 mt-2">
            {jobData.tags.map((tag) => {
              return <div className="bg-zinc-300 text-black rounded-sm px-3 py-1">{tag}</div>;
            })}
          </div>
        </div>
      </div>

      {/* bottom */}
      <div className=" p-5 border-t border-zinc-300 flex justify-between items-center">
        <div className="flex flex-col items-center">
          <h3 className="text-2xl font-bold">${jobData.pay}/hr</h3>
          <p className="text-zinc-400">{jobData.location}</p>
        </div>

        <div className="px-4 py-1 bg-black text-white rounded-md cursor-pointer transition-all duration-200 ring-1 hover:ring-1 ring-black ring-offset-0 hover:ring-offset-2">Apply Now</div>
      </div>
    </div>
  );
};

export default Card;
