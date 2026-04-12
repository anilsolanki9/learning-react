import React from "react";
import { fetchPhotos, fetchVideos } from "./api/mediaApi";

const App = () => {
  return (
    <div className="text-2xl min-h-screen bg-black text-white">
      <h1>Hello </h1>

      <div className="flex gap-4 m-4">
        <button
          onClick={async () => {
            const data = await fetchPhotos("cat");
            console.log(data.results);
          }}
          className="px-4 py-2 bg-white text-4xl text-black rounded-2xl cursor-pointer active:scale-95"
        >
          Get Photoes
        </button>

        <button
          onClick={async () => {
            const data = await fetchVideos("cat");
            console.log(data.videos);
          }}
          className="px-4 py-2 bg-white text-4xl text-black rounded-2xl cursor-pointer active:scale-95"
        >
          Get Videos
        </button>
      </div>
    </div>
  );
};

export default App;
