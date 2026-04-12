import React from "react";
import { Link, NavLink, useNavigate } from "react-router-dom";

const Navbar = () => {
  const navigate = useNavigate();

  const goBack = () => {
    console.log("Back btn clicked");
    navigate(-1);
  };

  const goNext = () => {
    console.log("Next btn clicked");
    navigate(+1);
  };

  return (
    <div className="flex px-8 py-4 bg-slate-500 justify-between items-center">
      <h3 className="text-3xl font-bold uppercase">Sheryians</h3>

      <div className="flex gap-3 text-xl items-center">
        <NavLink
          className={({ isActive }) => (isActive ? "text-yellow-300" : "text-white")}
          to="/"
        >
          Home
        </NavLink>
        <NavLink
          className={({ isActive }) => (isActive ? "text-yellow-300" : "text-white")}
          to="/about"
        >
          About
        </NavLink>
        <NavLink
          className={({ isActive }) => (isActive ? "text-yellow-300" : "text-white")}
          to="/product"
        >
          Product
        </NavLink>

        <NavLink
          className={({ isActive }) => (isActive ? "text-yellow-300" : "text-white")}
          to="/cources"
        >
          Cources
        </NavLink>

        <button
          onClick={goBack}
          className="bg-black font-medium px-4 py-2 text-white rounded-lg cursor-pointer active:scale-95"
        >
          Back
        </button>

        <button
          onClick={goNext}
          className="bg-black font-medium px-4 py-2 text-white rounded-lg cursor-pointer active:scale-95"
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default Navbar;
