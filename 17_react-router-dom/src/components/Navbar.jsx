import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="px-6 py-5 bg-slate-400 flex justify-between">
      <h1>Navbar</h1>

      <div className="flex gap-5">
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
        <Link to="/cources">Cources</Link>
        <Link to="/product">Product</Link>
      </div>
    </div>
  );
};

export default Navbar;
