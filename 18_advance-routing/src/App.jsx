import React from "react";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import About from "./pages/About";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Product from "./pages/Product";
import NotFound404 from "./pages/NotFound404";
import Men from "./pages/Men";
import Women from "./pages/Women";
import Kids from "./pages/Kids";
import Cources from "./pages/Cources";
import CourseDetail from "./pages/CourseDetail";

const App = () => {
  return (
    <div className="min-h-screen bg-zinc-600 text-white flex flex-col">
      <Navbar />

      <div className="flex-1 flex flex-col">
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
            path="/product"
            element={<Product />}
          >
            <Route
              path="men"
              element={<Men />}
            />

            <Route
              path="women"
              element={<Women />}
            />

            <Route
              path="kids"
              element={<Kids />}
            />
          </Route>

          <Route
            path="/cources"
            element={<Cources />}
          />

          <Route
            path="/cources/:id"
            element={<CourseDetail />}
          />

          <Route
            path="*"
            element={<NotFound404 />}
          />
        </Routes>
      </div>

      <Footer />
    </div>
  );
};

export default App;
