import React from "react";
import Navbar from "./components/Navbar";
import { useState } from "react";
import { useEffect } from "react";

const App = () => {
  const [theme, setTheme] = useState("light");

  const [appTheme, setAppTheme] = useState({
    bgPrimary: "-black",
    textPrimary: "-white",
    boxBgPrimary: "slate-400",
  });

  useEffect(() => {
    if (theme === "light") {
      setAppTheme({
        bgPrimary: "bg-white/80",
        textPrimary: "text-black/90",
        boxBgPrimary: "bg-slate-400",
      });
    } else {
      setAppTheme({
        bgPrimary: "bg-black/80",
        textPrimary: "text-white/80",
        boxBgPrimary: "bg-slate-800",
      });
    }
  }, [theme]);

  return (
    <div className={`min-h-screen ${appTheme.bgPrimary} ${appTheme.textPrimary}`}>
      <Navbar
        theme={theme}
        setTheme={setTheme}
      />
      <h1>Hello</h1>
      <p>I am text</p>
      <div className={`${appTheme.boxBgPrimary} h-100 w-100 ${appTheme.textPrimary} text-4xl`}>
        <h1>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Minima, id?</h1>
      </div>
    </div>
  );
};

export default App;
