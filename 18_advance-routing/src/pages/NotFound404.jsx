import { useEffect, useState } from "react";

const generateStars = (count) => {
  return Array.from({ length: count }, (_, i) => ({
    id: i + Math.random(),
    size: Math.random() * 2 + 1,
    top: `${Math.random() * 50}%`,
    left: `${Math.random() * 100}%`,
    duration: Math.random() * 3 + 4,
    delay: Math.random() * 4,
    direction: Math.random() > 0.5 ? "left" : "right",
  }));
};

const NotFound404 = () => {
  const [stars, setStars] = useState([]);

  useEffect(() => {
    setStars(generateStars(30));

    const interval = setInterval(() => {
      setStars((prev) => [...prev.slice(-20), ...generateStars(10)]);
    }, 4000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative flex-1 w-full bg-black text-white flex items-center justify-center overflow-hidden">
      {/* 🌌 Background */}
      <div className="absolute inset-0 bg-space" />

      {/* ✨ Stars */}
      <div className="absolute inset-0">
        {stars.map((star) => (
          <div
            key={star.id}
            className={`absolute ${star.direction === "left" ? "animate-fall-left" : "animate-fall-right"}`}
            style={{
              top: star.top,
              left: star.left,
              width: `${star.size}px`,
              height: `${star.size}px`,
              animationDuration: `${star.duration}s`,
              animationDelay: `${star.delay}s`,
            }}
          >
            <div className="w-full h-full rounded-full bg-white opacity-80" />
          </div>
        ))}
      </div>

      {/* 🛸 UFO */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 animate-float animate-tilt">
        <img
          src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/8794272-p5k6GdbD8O2RIat5GWtUGJGkDgXoxf.png"
          alt="ufo"
          className="w-75"
        />
      </div>

      {/* 📄 Content */}
      <div className="relative z-10 text-center px-4">
        <h1 className="text-7xl font-bold mb-2">404</h1>
        <p className="text-gray-300 mb-6">Oops! Looks like this page got lost in space</p>
        <a
          href="/"
          className="px-6 py-3 bg-purple-600 rounded-lg hover:bg-purple-700 transition"
        >
          Return Home
        </a>
      </div>
    </div>
  );
};

export default NotFound404;
