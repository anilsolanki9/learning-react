import React, { useContext } from "react";
import { ThemeDataContext } from "../context/ThemeContext";

const Button = () => {
  const [theme, setTheme] = useContext(ThemeDataContext);

  return (
    <button
      onClick={() => {
        theme === "light" ? setTheme("dark") : setTheme("light");
      }}
      className="bg-black text-white px-4 py-1 rounded-md cursor-pointer active:scale-95"
    >
      Change Theme
    </button>
  );
};

export default Button;
