import React from "react";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const navigate = useNavigate();

  return (
    <div className="h-full flex-1 flex flex-col gap-4 justify-center items-center">
      <h1 className="text-5xl">I am Home Page</h1>
      <button
        onClick={() => {
          navigate("/allcards");
        }}
        className="text-lg bg-emerald-600 px-5 py-1 rounded-md active:scale-95 transition-all duration-150 cursor-pointer"
      >
        All Cards
      </button>
    </div>
  );
};

export default Home;
