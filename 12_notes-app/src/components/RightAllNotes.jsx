import React from "react";
import Note from "./Note";

const RightAllNotes = ({ notesData, removeNote }) => {
  return (
    <div className="flex-4 bg-zinc-700/50 p-5 px-10 rounded-2xl flex flex-col">
      <h2 className="text-xl md:text-3xl lg:text-4xl text-white font-bold">My Notes</h2>

      <div className="all-notes flex-1 py-7 px-5 flex flex-col gap-5 overflow-y-scroll [&::-webkit-scrollbar]:hidden scrollbar-hide">
        {notesData.map((note, idx) => {
          return (
            <Note
              key={idx}
              id={idx}
              title={note.title}
              desc={note.desc}
              isImp={note.isImp}
              removeNote={removeNote}
            />
          );
        })}
      </div>
    </div>
  );
};

export default RightAllNotes;
