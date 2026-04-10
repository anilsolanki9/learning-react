import React from "react";

const App = () => {
  // const btnCLicked = () => {
  //   console.log("click");
  // };

  const inpChange = (evt) => {
    console.log(evt.target.value);
  };

  return (
    <div className="p-5 space-y-5">
      <h1>Hello gyus</h1>

      {/* <button
        className="bg-black text-white px-5 py-2 rounded cursor-pointer"
        onClick={btnCLicked}
      >
        Change User
      </button> */}

      <input
        // onChange={inpChange}
        onChange={(evt) => {
          inpChange(evt);
        }}
        className="px-5 py-2 bg-zinc-400 text-black text-2xl font-bold"
        type="text"
        name=""
        id=""
      />
    </div>
  );
};

export default App;
