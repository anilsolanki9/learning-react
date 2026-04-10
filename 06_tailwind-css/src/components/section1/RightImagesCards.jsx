import React from "react";
import { ArrowRight } from "lucide-react";

const RightImagesCards = ({ cardsData }) => {
  console.log(cardsData);
  return (
    <div className="flex-2/3">
      <div className="w-full h-full flex gap-4">
        {cardsData.map((card) => {
          return (
            <div className="flex-1/3 bg-gray-500 rounded-4xl relative overflow-hidden">
              <img className="w-full h-full object-cover object-center" src={card.image} alt="" />

              <div className="absolute inset-0 bg-black/50 flex flex-col justify-between p-5">
                <span className="w-10 h-10 text-2xl flex justify-center items-center font-semibold rounded-full bg-white text-black">{card.id}</span>

                <div className="space-y-5 text-white text-xl">
                  <p>{card.description}</p>

                  <div className="flex justify-between">
                    <button className="px-6 py-2 bg-blue-400 rounded-full">{card.title}</button>
                    <button className="px-3 py-2 bg-blue-400 rounded-full">
                      <ArrowRight size={22} strokeWidth={2.25} />
                    </button>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default RightImagesCards;
