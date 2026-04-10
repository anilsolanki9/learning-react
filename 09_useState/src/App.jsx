import React, { useState } from "react";

const App = () => {
  // let age = 21;
  // function inc() {
  //   age++;
  //   console.log(age);
  // }
  // UI me change nahi dikhega, thus  we use useState

  const [age, setAge] = useState(21);

  const users = ["Anil", "Solanki", "Sarthak", "Manish"];
  const [id, setId] = useState(0);

  const [count, setCount] = useState(0);

  return (
    <div className="bg-black/60 min-h-screen text-white">
      <h1 className="text-3xl mb-4">Age: {age}</h1>
      <h2>User Name : {users[id]}</h2>
      <button
        // onClick={inc}
        onClick={() => {
          setAge(age + 1);
        }}
        className="bg-black text-white px-5 py-2 rounded text-xl cursor-pointer active:scale-95 mx-2"
      >
        Add 1
      </button>

      <button
        onClick={() => {
          if (id < users.length - 1) {
            setId(id + 1);
          } else setId(0);
        }}
        className="bg-black text-white px-5 py-2 rounded text-xl cursor-pointer active:scale-95"
      >
        Change User
      </button>

      <div className="bg-slate-600 text-white w-150 h-100 mx-auto flex flex-col justify-center items-center gap-5 rounded-4xl shadow-lg shadow-black/30">
        <h2 className="text-6xl font-bold font-mono">{count}</h2>
        <div className="flex gap-5 text-2xl">
          <button
            onClick={() => {
              setCount(count - 1);
            }}
            className="bg-black text-white px-10 py-2 rounded-lg font-semibold active:scale-85 transition-all duration-300 cursor-pointer outline-1 outline-transparent hover:outline-amber-300 outline-offset-2"
          >
            Dec
          </button>

          <button
            onClick={() => {
              setCount(count + 1);
            }}
            className="bg-black text-white px-10 py-2 rounded-lg font-semibold active:scale-85 transition-all duration-300 cursor-pointer outline-1 outline-transparent hover:outline-amber-300 outline-offset-2"
          >
            Inc
          </button>

          <button
            onClick={() => {
              setCount(count + 5);
            }}
            className="bg-black text-white px-10 py-2 rounded-lg font-semibold active:scale-85 transition-all duration-300 cursor-pointer outline-1 outline-transparent hover:outline-amber-300 outline-offset-2"
          >
            Jump +5
          </button>
        </div>
      </div>
    </div>
  );
};

export default App;
