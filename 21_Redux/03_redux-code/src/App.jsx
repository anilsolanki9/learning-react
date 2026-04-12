import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { decrement, increment, incrementByAmmount } from "./redux/features/counterSlice";

const App = () => {
  const dispatch = useDispatch();
  const count = useSelector((state) => state.counter.value);

  const [num, setNum] = useState(0);

  return (
    <div className="min-h-screen bg-black text-white">
      <h1 className="text-7xl">Count: {count}</h1>
      <button
        onClick={() => {
          dispatch(increment());
        }}
        className="px-5 py-1 bg-emerald-500 text-white font-bold mx-3 active:scale-95"
      >
        Increment
      </button>

      <button
        onClick={() => {
          dispatch(decrement());
        }}
        className="px-5 py-1 bg-emerald-500 text-white font-bold mx-3 active:scale-95"
      >
        Decrement
      </button>

      <input
        className="bg-white/30 border-emerald-500 px-5 py-1 font-bold"
        type="text"
        placeholder="Enter ammont..."
        onChange={(e) => {
          setNum(e.target.value);
        }}
      />
      <button
        onClick={() => {
          dispatch(incrementByAmmount(Number(num)));
        }}
        className="px-5 py-1 bg-emerald-500 text-white font-bold mx-3 active:scale-95"
      >
        Inc by Ammount
      </button>
    </div>
  );
};

export default App;
