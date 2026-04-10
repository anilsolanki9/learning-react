import React, { useEffect, useState } from "react";
import Card from "./components/Card";

const App = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");

  const [cardsData, setCardsData] = useState(localStorage.getItem("cardsData") ? JSON.parse(localStorage.getItem("cardsData")) : []);

  const submitHandler = (e) => {
    e.preventDefault();
    console.log("Submitted");
    setCardsData((prev) => [...prev, { name, email }]);

    setName("");
    setEmail("");
  };

  useEffect(() => {
    localStorage.setItem("cardsData", JSON.stringify(cardsData));
  }, [cardsData]);

  return (
    <div className="bg-black text-3xl min-h-screen text-white">
      <form
        onSubmit={submitHandler}
        action=""
      >
        <input
          className="px-5 py-2 bg-black/80 ring-2 ring-amber-300 rounded-2xl m-5 outline-none"
          type="text"
          name=""
          id=""
          placeholder="Enter your name"
          value={name}
          onChange={(e) => {
            setName(e.target.value);
          }}
        />

        <input
          className="px-5 py-2 bg-black/80 ring-2 ring-amber-300 rounded-2xl m-5 outline-none"
          type="text"
          name=""
          id=""
          placeholder="Enter your email"
          value={email}
          onChange={(e) => {
            setEmail(e.target.value);
          }}
        />

        <input
          className="px-5 py-2 bg-amber-300 text-black cursor-pointer active:scale-95 rounded-2xl m-5 outline-none"
          type="submit"
          name=""
          id=""
          value="Submit"
        />
      </form>

      <div className="all-cards px-10 py-5 flex flex-wrap gap-4">
        {cardsData.map((card, idx) => {
          return (
            <Card
              key={idx}
              name={card.name}
              email={card.email}
            />
          );
        })}
      </div>
    </div>
  );
};

export default App;
