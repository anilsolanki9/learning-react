import React, { useState } from "react";

const Card = (props) => {
  const webseries = props.webseries;

  const [loaded, setLoaded] = useState(false);

  return (
    <div className="bg-zinc-600 rounded-2xl flex flex-col sm:flex-row justify-center gap-5 p-5 h-fit">
      <div className="flex-2 aspect-4/3 overflow-hidden relative">
        {!loaded && <div className="absolute inset-0 bg-zinc-800 animate-pulse rounded-2xl flex justify-center items-center">Loading...</div>}

        <img onLoad={() => setLoaded(true)} className={`h-full w-full object-cover object-center rounded-2xl ${loaded ? "opacity-100" : "opacity-0"}`} src={`cardsImages/${webseries.id}.png`} alt="" />
      </div>

      <div className="flex-3">
        <h2 className="text-2xl">
          <span className="text-blue-400">Title</span> : {webseries.title}
        </h2>
        <p className="text-yellow-300 font-bold">
          <span className="text-blue-400">Rating</span> : {webseries.rating}
        </p>
        <p className="text-sm leading-6">
          <span className="text-blue-400 font-bold">Summary</span> : {webseries.summary}
        </p>
      </div>
    </div>
  );
};

export default Card;
