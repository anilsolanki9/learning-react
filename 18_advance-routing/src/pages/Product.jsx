import React from "react";
import { NavLink, Outlet } from "react-router-dom";

const Product = () => {
  return (
    <div className="flex px-8 py-2 flex-col">
      <div className="space-y-3">
        <h3 className="text-xl font-bold uppercase">Produts Page</h3>

        <div className="flex gap-3 text-md">
          <NavLink
            className={({ isActive }) => (isActive ? "text-yellow-300" : "text-white") + ` bg-black px-2 py-1 rounded-lg active:scale-95`}
            to="/product/men"
          >
            Mens Products
          </NavLink>

          <NavLink
            className={({ isActive }) => (isActive ? "text-yellow-300" : "text-white") + ` bg-black px-2 py-1 rounded-lg active:scale-95`}
            to="/product/women"
          >
            Womens Products
          </NavLink>

          <NavLink
            className={({ isActive }) => (isActive ? "text-yellow-300" : "text-white") + ` bg-black px-2 py-1 rounded-lg active:scale-95`}
            to="/product/kids"
          >
            Kids Products
          </NavLink>
        </div>
      </div>

      <Outlet />
    </div>
  );
};

export default Product;
