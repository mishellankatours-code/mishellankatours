import { useEffect, useMemo, useState, useCallback } from "react";
import { AnimatePresence, motion } from "framer-motion";

// 👉 Put your hero images in /src/assets and import them here
import img1 from "../assets/hero-1.jpeg";
import img2 from "../assets/hero-2.jpeg";
import img3 from "../assets/hero-3.jpeg";

const SLIDE_DURATION = 6000; // ms between auto slides
const TRANSITION_MS = 900;   // crossfade/slide time

export default function HeroSection() {
  // Slides with optional caption/cta
  const slides = useMemo(
    () => [
      { src: img1, title: "Weddings", subtitle: "Real moments. Real emotions." },
      { src: img2, title: "Portraits", subtitle: "Light, texture, personality." },
      { src: img3, title: "Events",   subtitle: "Stories you’ll revisit forever." },
    ],
    []
  );

  const [index, setIndex] = useState(0);
  const [direction, setDirection] = useState(1); // 1 next, -1 prev

  const goTo = useCallback((i, dir = 1) => {
    setDirection(dir);
    setIndex((prev) => (i + slides.length) % slides.length);
  }, [slides.length]);

  const next = useCallback(() => goTo(index + 1, 1), [index, goTo]);
  const prev = useCallback(() => goTo(index - 1, -1), [index, goTo]);

  // Auto-advance
  useEffect(() => {
    const t = setTimeout(next, SLIDE_DURATION);
    return () => clearTimeout(t);
  }, [index, next]);

  // Variants for the image transition (slide + fade)
  const variants = {
    enter: (dir) => ({
      x: dir > 0 ? "10%" : "-10%",
      opacity: 0,
      scale: 1.02,
    }),
    center: { x: "0%", opacity: 1, scale: 1 },
    exit: (dir) => ({
      x: dir > 0 ? "-10%" : "10%",
      opacity: 0,
      scale: 1.02,
    }),
  };

  return (
    <section className="relative h-[90vh] md:h-screen overflow-hidden">
      {/* Image layer */}
      <div className="absolute inset-0">
        <AnimatePresence custom={direction}>
          <motion.div
            key={index}
            className="absolute inset-0"
            custom={direction}
            variants={variants}
            initial="enter"
            animate="center"
            exit="exit"
            transition={{ duration: TRANSITION_MS / 1000, ease: "easeInOut" }}
          >
            {/* Background image */}
            <div
              className="w-full h-full bg-center bg-cover"
              style={{ backgroundImage: `url(${slides[index].src})` }}
            />
            {/* Subtle parallax overlay flare */}
            <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-black/30 via-black/20 to-black/50" />
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Content overlay */}
      <div className="relative z-10 h-full flex items-center justify-center text-white px-6">
        <motion.div
          key={`caption-${index}`}
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.15 }}
          className="text-center"
        >
          <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight drop-shadow-md">
            {slides[index].title}
          </h1>
          <p className="mt-3 text-lg md:text-2xl text-white/90 max-w-2xl mx-auto">
            {slides[index].subtitle}
          </p>
          <div className="mt-6 flex items-center justify-center gap-3">
            <a
              href="/portfolio"
              className="px-6 py-3 rounded-xl bg-white text-gray-900 font-medium hover:bg-white/90 transition"
            >
              View Portfolio
            </a>
            <a
              href="/contact"
              className="px-6 py-3 rounded-xl border border-white/70 hover:bg-white/10 transition"
            >
              Book a Session
            </a>
          </div>
        </motion.div>
      </div>

      {/* Controls */}
      <button
        aria-label="Previous slide"
        onClick={prev}
        className="absolute left-4 top-1/2 -translate-y-1/2 z-20 rounded-full bg-black/35 hover:bg-black/50 backdrop-blur px-3 py-2 text-white"
      >
        ‹
      </button>
      <button
        aria-label="Next slide"
        onClick={next}
        className="absolute right-4 top-1/2 -translate-y-1/2 z-20 rounded-full bg-black/35 hover:bg-black/50 backdrop-blur px-3 py-2 text-white"
      >
        ›
      </button>

      {/* Dots */}
      <div className="absolute bottom-5 left-1/2 -translate-x-1/2 z-20 flex gap-2">
        {slides.map((_, i) => (
          <button
            key={i}
            aria-label={`Go to slide ${i + 1}`}
            onClick={() => goTo(i, i > index ? 1 : -1)}
            className={[
              "h-2 w-8 rounded-full transition",
              i === index ? "bg-white" : "bg-white/40 hover:bg-white/60",
            ].join(" ")}
          />
        ))}
      </div>
    </section>
  );
}


