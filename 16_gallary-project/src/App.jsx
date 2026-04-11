import React, { useEffect, useState } from "react";
import axios from "axios";
import ImageCard from "./components/ImageCard";

const App = () => {
  const [gallaryData, setGallaryData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [loadedCount, setLoadedCount] = useState(0);
  const [pgNumber, setPgNumber] = useState(2);

  useEffect(() => {
    const getData = async () => {
      setLoading(true);
      setLoadedCount(0); // ✅ reset count

      const { data } = await axios.get(`https://picsum.photos/v2/list?page=${pgNumber}&limit=30`);

      setGallaryData(data);
    };

    getData();
    console.log(pgNumber);
  }, [pgNumber]);

  useEffect(() => {
    if (gallaryData.length > 0 && loadedCount === gallaryData.length) {
      setLoading(false);
    }
  }, [loadedCount, gallaryData]);

  return (
    <div className="bg-black/80 text-white min-h-screen relative flex flex-col">
      {/* ✅ Loading Overlay */}
      {loading && (
        <div className="fixed inset-0 bg-black/70 flex justify-center items-center z-50">
          <h1 className="text-2xl font-bold">Loading images...</h1>
        </div>
      )}

      <div className="fixed bottom-5 right-5 flex items-center gap-3 z-50">
        <button
          onClick={() => {
            if (pgNumber > 2) setPgNumber(pgNumber - 1);
          }}
          className={`px-5 py-2 text-2xl text-black font-bold rounded-2xl cursor-pointer active:scale-95 bg-emerald-500 ${pgNumber == 2 ? "opacity-50 cursor-not-allowed pointer-events-none" : "opacity-100"}`}
        >
          Previous
        </button>
        <h3 className="text-2xl text-shadow-xs text-shadow-black">Page : {pgNumber - 1}</h3>
        <button
          onClick={() => {
            setPgNumber((prev) => prev + 1);
          }}
          className="px-5 py-2 text-2xl bg-emerald-500 text-black font-bold rounded-2xl cursor-pointer active:scale-95"
        >
          Next
        </button>
      </div>

      {/* ✅ Images always render (important) */}
      <div className={`flex-1 w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 gap-5 p-5 transition-opacity duration-500 ${loading ? "opacity-0" : "opacity-100"}`}>
        {gallaryData.map((imgData) => (
          <ImageCard
            key={imgData.id}
            imgData={imgData}
            setLoadedCount={setLoadedCount}
          />
        ))}
      </div>
    </div>
  );
};

export default App;
