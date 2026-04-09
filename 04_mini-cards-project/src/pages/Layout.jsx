import React from "react";
import Navbar from "../components/Navbar";
import { Outlet } from "react-router-dom";

const Layout = () => {

  return (
    <div className="flex flex-col min-h-screen bg-slate-950 text-slate-100">
      <Navbar />

      <main className="w-9/10 max-w-350 mx-auto h-full grow flex flex-col">
        <Outlet />
      </main>
    </div>
  );
};

export default Layout;
