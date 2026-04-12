import React, { createContext, useEffect, useState } from "react";

export const ThemeDataContext = createContext();

const ThemeContext = ({ children }) => {
  const [theme, setTheme] = useState("light");

  useEffect(() => {
    console.log(theme);
  }, [theme]);

  return (
    <div>
      <ThemeDataContext.Provider value={[theme, setTheme]}>{children}</ThemeDataContext.Provider>
    </div>
  );
};

export default ThemeContext;
