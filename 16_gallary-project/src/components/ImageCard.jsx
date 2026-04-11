import React from "react";

const ImageCard = ({ imgData, setLoadedCount }) => {
  const handleLoad = () => {
    setLoadedCount((prev) => prev + 1);
  };

  const handleError = () => {
    // ✅ important: failed image bhi count ho jaye
    setLoadedCount((prev) => prev + 1);
  };

  return (
    <a
      target="_blank"
      href={imgData.url}
      className="w-full h-72 rounded-2xl overflow-hidden bg-gray-800 relative group"
    >
      <img
        onLoad={handleLoad}
        onError={handleError}
        className="h-full w-full object-cover"
        src={imgData.download_url}
        alt=""
        loading="lazy"
      />

      <div className="text-2xl text-white px-5 py-10 bg-linear-to-t from-black to-transparent absolute bottom-0 left-0 right-0 opacity-0 group-hover:opacity-100 transition-all duration-300">{imgData.author}</div>
    </a>
  );
};

export default ImageCard;
