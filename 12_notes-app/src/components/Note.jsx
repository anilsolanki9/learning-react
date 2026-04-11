import React from "react";

const Note = ({ title, desc, isImp, id, removeNote }) => {
  return (
    <div className="note relative bg-[#593933] px-4 py-5 text-white rounded-2xl">
      {isImp && <div className="bg-yellow-400 w-fit px-2 py-1 text-sm text-black font-bold rounded-lg absolute top-0 left-0 -translate-x-1/2 -translate-y-1/2">imp</div>}

      <div className="w-8/10 space-y-2">
        <h2 className="text-xl md:text-2xl lg:text-3xl font-semibold">{title}</h2>
        <div>{desc}</div>
      </div>

      <div
        onClick={(e) => {
          removeNote(e.target.id);
        }}
        id={id}
        className="absolute top-1/2 right-0 -translate-x-1/2 -translate-y-1/2 bg-red-500 px-3 py-1 rounded-lg cursor-pointer active:scale-95 select-none ring-0 hover:ring-2 ring-white/50 transition-all duration-200 active:ring-white"
      >
        Delete
      </div>
    </div>
  );
};

export default Note;
