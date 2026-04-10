import React from "react";
import Section1 from "./pages/Section1";
import Section2 from "./pages/Section2";
import Section3 from "./pages/Section3";

const App = () => {
  const cardsData = [
    {
      id: 1,
      title: "Explore",
      image: "https://images.unsplash.com/photo-1588516903720-8ceb67f9ef84?q=80&w=1944&auto=format&fit=crop",
      description: "Discover new places, experience diverse cultures, and create unforgettable memories while exploring beautiful landscapes and hidden gems around the world.",
    },
    {
      id: 2,
      title: "Relax",
      image: "https://images.unsplash.com/photo-1571234018566-1d3cc5d2991a?q=80&w=1974&auto=format&fit=crop",
      description: "Take a break from daily stress, unwind your mind, and enjoy peaceful moments in calming environments designed to refresh your energy completely.",
    },
    {
      id: 3,
      title: "Adventure",
      image: "https://images.unsplash.com/photo-1706153068532-c3d0cb01bbaa?q=80&w=2071&auto=format&fit=crop",
      description: "Push your limits, try thrilling activities, and embrace exciting journeys that bring adrenaline, challenge, and unforgettable experiences into your life.",
    },
  ];

  return (
    <div className="min-h-screen w-full bg-gray-300 text-gray-900 font-sans flex flex-col">
      <div className="w-full flex-1 max-w-360 mx-auto">
        <Section1 cardsData={cardsData} />
        <Section2 />
        {/* <Section3 /> */}
      </div>
    </div>
  );
};

export default App;
