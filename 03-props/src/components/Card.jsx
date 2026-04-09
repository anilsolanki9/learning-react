import React from "react";

const Card = (props) => {
  return (
    <div className="w-full max-h-fit text-center p-5 bg-zinc-500 text-white rounded-lg">
      <img className="w-34 h-34 rounded-full mx-auto" src={props.img} alt="" />
      <h2 className="text-2xl">{props.user}</h2>
      <p>Age : {props.age}</p>
      <p>{props.desc}</p>
    </div>
  );
};

export default Card;
