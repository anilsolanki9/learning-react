import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Cources from "./pages/Cources";
import Navbar from "./components/Navbar";
import Product from "./pages/Product";

const App = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />

      <div className="bg-slate-800 flex-1 text-5xl flex justify-center items-center">
        <Routes>
          <Route
            path="/"
            element={<Home />}
          />

          <Route
            path="/about"
            element={<About />}
          />

          <Route
            path="/cources"
            element={<Cources />}
          />

          <Route
            path="/product"
            element={<Product />}
          />
        </Routes>
      </div>
    </div>
  );
};

export default App;
