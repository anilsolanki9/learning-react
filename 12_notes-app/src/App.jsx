import React, { useEffect, useState } from "react";
import LeftForm from "./components/LeftForm";
import RightAllNotes from "./components/RightAllNotes";

const App = () => {
  const [notesData, setNotesData] = useState(localStorage.getItem("notesData") ? JSON.parse(localStorage.getItem("notesData")) : []);

  const addNote = ({ title, desc, isImp }) => {
    let newNotesData = [...notesData];
    newNotesData.push({ title, desc, isImp });
    setNotesData(newNotesData);
  };

  const removeNote = (index) => {
    let newNotesData = [...notesData];
    newNotesData.splice(index, 1);
    setNotesData(newNotesData);
  };

  useEffect(() => {
    localStorage.setItem("notesData", JSON.stringify(notesData));
  }, [notesData]);

  return (
    <div className="w-full min-h-screen relative">
      <div className="layer bg-[url(https://images.unsplash.com/photo-1773672726538-885c0d878033?q=80&w=1932&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D)] w-full h-full absolute inset-0 bg-cover"></div>
      <div className="layer2 w-full h-full absolute inset-0 bg-linear-to-tr from-black/70 to-zinc-900/50 backdrop-blur-xs"></div>

      <div className="absolute z-1 w-full h-screen inset-0 flex p-5 gap-5">
        <LeftForm addNote={addNote} />

        <RightAllNotes
          notesData={notesData}
          removeNote={removeNote}
        />
      </div>
    </div>
  );
};

export default App;
