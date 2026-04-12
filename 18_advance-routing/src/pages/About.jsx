import React from "react";
import { useNavigate } from "react-router-dom";

const About = () => {
  const navigate = useNavigate();

  const btnClicked = () => {
    console.log("Btn clicked");
    navigate("/");
  };

  return (
    <div>
      <div>About Page</div>

      <div className="p-4 space-x-3">
        <button
          onClick={btnClicked}
          className="bg-black font-medium px-4 py-2 text-white rounded-lg cursor-pointer active:scale-95"
        >
          Go to Home
        </button>

      </div>
    </div>
  );
};

export default About;
