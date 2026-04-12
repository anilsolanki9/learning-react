import React from "react";

const Navbar = ({ theme, setTheme }) => {
  return (
    <div className="flex px-8 py-4 bg-slate-500 justify-between items-center">
      <h3 className="text-3xl font-bold uppercase">Sheryians</h3>

      <div className="flex gap-3 text-xl items-center">
        <button
          onClick={() => {
            theme === "light" ? setTheme("dark") : setTheme("light");
          }}  
          className="bg-black text-white px-3 py-1 rounded-md cursor-pointer active:scale-95"
        >
          Change Theme
        </button>
      </div>
    </div>
  );
};

export default Navbar;
