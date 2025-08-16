import { useEffect, useState } from "react";
import img1 from "../assets/1.jpg";
import img2 from "../assets/2.jpg";
import img3 from "../assets/3.jpg";

const slides = [
  {
    src: img1,
    title: "Discover Sri Lanka",
    subtitle: "Beaches, mountains, culture & wildlife",
  },
  {
    src: img2,
    title: "Adventure Awaits",
    subtitle: "Hiking, surfing, and unforgettable journeys",
  },
  {
    src: img3,
    title: "Cultural Tours",
    subtitle: "Explore heritage and traditions",
  },
];

export default function HeroSection() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="relative h-[90vh] md:h-screen overflow-hidden">
      {/* Show slides */}
      <div className="absolute inset-0">
        {slides.map((slide, i) => (
          <img
            key={i}
            src={slide.src}
            alt={slide.title}
            className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-1000 ${
              i === index ? "opacity-100" : "opacity-0"
            }`}
          />
        ))}
        {/* Dark overlay for readability */}
        <div className="absolute inset-0 bg-black/40" />
      </div>

      {/* Content */}
      <div className="relative z-10 h-full flex flex-col items-center justify-center text-center text-white">
        <h1 className="text-4xl md:text-6xl font-bold">
          {slides[index].title}
        </h1>
        <p className="mt-3 text-lg md:text-2xl max-w-2xl">
          {slides[index].subtitle}
        </p>
      </div>
    </section>
  );
}
