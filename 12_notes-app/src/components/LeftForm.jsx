import React, { useState } from "react";

const LeftForm = ({ addNote }) => {
  const [title, setTitle] = useState("");
  const [desc, setDesc] = useState("");
  const [isImp, setIsImp] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();

    addNote({ title, desc, isImp });
    setTitle("");
    setDesc("");
    setIsImp(false);
  };

  return (
    <div className="flex-3 rounded-4xl flex justify-center items-center">
      <form
        onSubmit={handleSubmit}
        className="flex flex-col items-center gap-3"
      >
        <input
          required
          value={title}
          onChange={(e) => {
            setTitle(e.target.value);
          }}
          type="text"
          name=""
          id=""
          placeholder="Task title..."
          className=" px-10 py-3 bg-slate-500 border-none outline-none rounded-2xl text-2xl font-semibold text-white inset-shadow-sm inset-shadow-slate-700"
        />

        <input
          required
          value={desc}
          onChange={(e) => {
            setDesc(e.target.value);
          }}
          type="text"
          name=""
          id=""
          placeholder="Task details..."
          className=" px-10 py-3 bg-slate-500 border-none outline-none rounded-2xl text-2xl font-semibold text-white inset-shadow-sm inset-shadow-slate-700"
        />

        <label
          className="place-self-start flex gap-5 select-none text-2xl text-white font-semibold"
          htmlFor="chk"
        >
          <span>Mark as Important</span>
          <div>
            <input
              checked={isImp}
              onChange={(e) => {
                setIsImp(e.target.checked);
              }}
              type="checkbox"
              name=""
              id="chk"
              className="scale-150 accent-amber-500"
            />
          </div>
        </label>

        <input
          type="submit"
          value="Submit"
          className=" px-10 py-3 bg-slate-500 border-none outline-none rounded-2xl text-2xl font-semibold text-white inset-shadow-sm inset-shadow-slate-700 cursor-pointer active:scale-90"
        />
      </form>
    </div>
  );
};

export default LeftForm;
