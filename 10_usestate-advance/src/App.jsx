import React, { useEffect, useState } from "react";

const App = () => {
  // const [num, setNum] = useState(10);

  // const [user, setUser] = useState({ name: "Anil", age: 21 });

  // useEffect(() => {
  //   console.log(num);
  // }, [num]);

  return (
    <div className="bg-slate-500 min-h-screen p-10 space-y-10 text-5xl text-white">
      <h1>
        {/* {user.name}, {user.age} */}
      </h1>

      <button
        // onClick={() => {
        //   setNum(user + 1); // async fnc h
        //   let newUser = { ...user };
        //   newUser.age++;
        //   newUser.name = "Sarthak";
        //   setUser(newUser);
        // }}
        className="bg-black px-10 py-3 rounded-xl text-white active:scale-95 transition-all duration-200"
      >
        Click
      </button>
    </div>
  );
};

export default App;
