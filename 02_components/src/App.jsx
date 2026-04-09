import React from "react";
import Navbar from "./components/Navbar";
import AllCards from "./components/AllCards";

const App = () => {
  return (
    <div className="app">
      <Navbar />

      <AllCards />
    </div>
  );
};

export default App;
