import React, { useEffect, useState } from "react";
import Button from "./components/Button";

const App = () => {
  const [theme, setTheme] = useState("light");

  useEffect(() => {
    const root = document.documentElement;

    root.classList.toggle("dark", theme === "dark");
    localStorage.setItem("theme", theme);
  }, [theme]);

  useEffect(() => {
    const saved = localStorage.getItem("theme");

    if (saved) {
      setTheme(saved);
    } else {
      const systemDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
      setTheme(systemDark ? "dark" : "light");
    }
  }, []);

  return (
    <div className="bg-gray-500 min-h-screen p-4 space-x-4 dark:bg-zinc-800">
      <div onClick={() => setTheme((prev) => (prev === "dark" ? "light" : "dark"))} className="cursor-pointer px-5 py-2 bg-zinc-800 text-white w-fit m-3 rounded-2xl active:scale-95 select-none">
        Change Theme
      </div>

      <Button variant="secondary" size="md">
        Hello
      </Button>

      <Button variant="danger" size="lg" disabled={true}>
        Hello
      </Button>
    </div>
  );
};

export default App;
