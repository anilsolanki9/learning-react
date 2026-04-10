import React from "react";

const Card = ({ name = "Guest", email = "Unavailable" }) => {
  return (
    <div className="card bg-slate-600 w-fit px-10 py-2 rounded-xl">
      <h1>Name: {name}</h1>
      <p>Email: {email}</p>
    </div>
  );
};

export default Card;
