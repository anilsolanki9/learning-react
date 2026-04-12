import React from "react";
import ThemeContext, { ThemeDataContext } from "../context/ThemeContext";

const Navbar = () => {
  return (
    <div className="flex justify-between items-center px-10 py-6 bg-slate-500 text-white">
      <h1>Navbar</h1>

      <div className="flex text-lg gap-5 list-none">
        <li>Home</li>
        <li>About</li>
        <li>Cources</li>
        <li>Products</li>
      </div>
    </div>
  );
};

export default Navbar;
