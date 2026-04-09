import React from "react";
import { BriefcaseBusiness } from "lucide-react";
import { NavLink, useNavigate } from "react-router-dom";

const Navbar = () => {
  const navigate = useNavigate();

  return (
    <div className="px-10 py-3  bg-slate-800 text-lg 3xl:text-3xl">
      <div className="flex justify-between items-center w-9/10 max-w-350 mx-auto">
        <BriefcaseBusiness size={50} strokeWidth={1.3} />

        <ul className="flex items-center gap-6">
          <li className="bg-emerald-600 px-5 py-1 rounded-md active:scale-95 transition-all duration-150">
            <NavLink style={({ isActive }) => (isActive ? { color: "yellow" } : { color: "whitesmoke" })} to="/">
              Home
            </NavLink>
          </li>
          <li className="bg-emerald-600 px-5 py-1 rounded-md active:scale-95 transition-all duration-150 whitespace-nowrap">
            <NavLink style={({ isActive }) => (isActive ? { color: "yellow" } : { color: "whitesmoke" })} to="/allcards">
              All Cards
            </NavLink>
          </li>
          <li className="bg-emerald-600 px-5 py-1 rounded-md active:scale-95 transition-all duration-150">
            <button
              className="cursor-pointer"
              onClick={() => {
                navigate(-1);
              }}
            >
              Back
            </button>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
