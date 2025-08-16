import { useEffect, useState } from "react";
import {
  ChevronLeft,
  ChevronRight,
  Play,
  MapPin,
  Calendar,
  Users,
} from "lucide-react";
import img1 from "../assets/1.jpg";
import img2 from "../assets/2.jpg";
import img3 from "../assets/3.jpg";

const slides = [
  {
    src: img1,
    title: "Discover Sri Lanka",
    subtitle: "Beaches, mountains, culture & wildlife",
    description:
      "Experience the breathtaking beauty of the Pearl of the Indian Ocean with our expertly guided tours",
    cta: "Explore Tours",
    features: ["Golden Beaches", "Tea Plantations", "Wildlife Safari"],
  },
  {
    src: img2,
    title: "Adventure Awaits",
    subtitle: "Hiking, surfing, and unforgettable journeys",
    description:
      "Embark on thrilling adventures that will create memories to last a lifetime",
    cta: "Book Adventure",
    features: ["Mountain Hiking", "Water Sports", "Cultural Sites"],
  },
  {
    src: img3,
    title: "Cultural Tours",
    subtitle: "Explore heritage and traditions",
    description:
      "Immerse yourself in ancient temples, rich traditions, and vibrant local culture",
    cta: "Cultural Journey",
    features: ["Ancient Temples", "Local Traditions", "Heritage Sites"],
  },
];

export default function HeroSection() {
  const [index, setIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  useEffect(() => {
    if (!isAutoPlaying) return;

    const timer = setInterval(() => {
      setIndex((prev) => (prev + 1) % slides.length);
    }, 6000);
    return () => clearInterval(timer);
  }, [isAutoPlaying]);

  const nextSlide = () => {
    setIndex((prev) => (prev + 1) % slides.length);
    setIsAutoPlaying(false);
    setTimeout(() => setIsAutoPlaying(true), 10000);
  };

  const prevSlide = () => {
    setIndex((prev) => (prev - 1 + slides.length) % slides.length);
    setIsAutoPlaying(false);
    setTimeout(() => setIsAutoPlaying(true), 10000);
  };

  const goToSlide = (slideIndex) => {
    setIndex(slideIndex);
    setIsAutoPlaying(false);
    setTimeout(() => setIsAutoPlaying(true), 10000);
  };

  return (
    <section className="relative h-[90vh] md:h-screen overflow-hidden">
      {/* Background Images */}
      <div className="absolute inset-0">
        {slides.map((slide, i) => (
          <div key={i} className="absolute inset-0">
            <img
              src={slide.src}
              alt={slide.title}
              className={`w-full h-full object-cover transition-all duration-1000 ${
                i === index ? "opacity-100 scale-100" : "opacity-0 scale-105"
              }`}
            />
            {/* Enhanced Gradient Overlay */}
            <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-black/20 to-black/60" />
            <div className="absolute inset-0 bg-gradient-to-r from-blue-900/20 to-green-900/20" />
          </div>
        ))}
      </div>

      {/* Navigation Arrows */}
      <button
        onClick={prevSlide}
        className="absolute left-4 md:left-8 top-1/2 -translate-y-1/2 z-20 bg-white/20 backdrop-blur-sm hover:bg-white/30 text-white p-3 rounded-full transition-all duration-300 hover:scale-110 group"
      >
        <ChevronLeft className="w-6 h-6 group-hover:-translate-x-0.5 transition-transform" />
      </button>

      <button
        onClick={nextSlide}
        className="absolute right-4 md:right-8 top-1/2 -translate-y-1/2 z-20 bg-white/20 backdrop-blur-sm hover:bg-white/30 text-white p-3 rounded-full transition-all duration-300 hover:scale-110 group"
      >
        <ChevronRight className="w-6 h-6 group-hover:translate-x-0.5 transition-transform" />
      </button>

      {/* Main Content */}
      <div className="relative z-10 h-full flex flex-col items-center justify-center text-center text-white px-6">
        {/* Animated Content */}
        <div className="max-w-5xl mx-auto">
          {/* Main Title */}
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold mb-6 leading-tight">
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-white to-blue-200 animate-fade-in">
              {slides[index].title}
            </span>
          </h1>

          {/* Subtitle */}
          <p className="text-xl md:text-3xl mb-6 text-blue-100 font-light max-w-4xl">
            {slides[index].subtitle}
          </p>

          {/* Description */}
          <p className="text-lg md:text-xl mb-8 text-gray-200 max-w-3xl mx-auto leading-relaxed">
            {slides[index].description}
          </p>

          {/* Features */}
          <div className="flex flex-wrap justify-center gap-4 mb-10">
            {slides[index].features.map((feature, idx) => (
              <div
                key={idx}
                className="bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full border border-white/20"
              >
                <span className="text-sm font-medium">{feature}</span>
              </div>
            ))}
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <button className="group bg-gradient-to-r from-blue-600 to-green-600 hover:from-blue-700 hover:to-green-700 text-white font-semibold py-4 px-8 rounded-2xl transition-all duration-300 transform hover:scale-105 shadow-2xl hover:shadow-3xl flex items-center gap-2">
              <Play className="w-5 h-5 group-hover:scale-110 transition-transform" />
              {slides[index].cta}
            </button>
            <button className="border-2 border-white/30 text-white hover:bg-white hover:text-gray-900 font-semibold py-4 px-8 rounded-2xl transition-all duration-300 transform hover:scale-105 backdrop-blur-sm">
              Watch Video
            </button>
          </div>
        </div>
      </div>

      {/* Slide Indicators */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20 lg:hidden">
        <div className="flex gap-3">
          {slides.map((_, i) => (
            <button
              key={i}
              onClick={() => goToSlide(i)}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${
                i === index
                  ? "bg-white scale-125"
                  : "bg-white/50 hover:bg-white/75"
              }`}
            />
          ))}
        </div>
      </div>

      {/* Progress Bar */}
      <div className="absolute bottom-0 left-0 right-0 h-1 bg-white/20 z-20">
        <div
          className="h-full bg-gradient-to-r from-blue-500 to-green-500 transition-all duration-300"
          style={{
            width: `${((index + 1) / slides.length) * 100}%`,
          }}
        />
      </div>

      {/* Slide Counter */}
      <div className="absolute top-8 right-8 z-20 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full border border-white/20">
        <span className="text-white text-sm font-medium">
          {String(index + 1).padStart(2, "0")} /{" "}
          {String(slides.length).padStart(2, "0")}
        </span>
      </div>

      {/* Auto-play indicator */}
      <div className="absolute top-8 left-8 z-20">
        <div
          className={`w-2 h-2 rounded-full transition-all duration-300 ${
            isAutoPlaying ? "bg-green-400 animate-pulse" : "bg-red-400"
          }`}
        />
      </div>
    </section>
  );
}
