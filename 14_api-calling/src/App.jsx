import React, { useEffect, useState } from "react";
import axios from "axios";

const App = () => {
  const [data, setData] = useState([]);

  const getData = async () => {
    const response = await axios.get("https://picsum.photos/v2/list");
    console.log(response.data);
    setData(response.data);
  };

  return (
    <div className="min-h-screen bg-black/90 text-white p-5">
      <button
        className="px-6 py-2 bg-white text-black rounded-2xl text-2xl cursor-pointer active:scale-95"
        onClick={() => {
          getData();
        }}
      >
        Get Data
      </button>

      <div className="flex gap-5 flex-wrap">
        {data.map((dt, idx) => {
          return (
            <div
              className="h-50 w-100 bg-slate-600 relative"
              key={idx}
            >
              <img
                className="w-full h-full absolute z-0 object-cover object-center"
                src={dt.download_url}
                alt=""
              />
              <div className="absolute z-1 inset-0 p-5 text-white text-4xl">
                <h1>{dt.author}</h1>
              </div>

              <p></p>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default App;
