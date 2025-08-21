import { useMemo, useState, useCallback, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Footer from "../components/Footer";
import {
  X,
  ZoomIn,
  ChevronLeft,
  ChevronRight,
  Image as ImageIcon,
} from "lucide-react";

import pp1 from "../assets/pp1.jpg";
import pp2 from "../assets/pp2.jpg";
import pp3 from "../assets/pp3.jpg";
import pp4 from "../assets/pp4.jpg";
import pp5 from "../assets/pp5.jpg";
import pp6 from "../assets/pp6.jpg";
import pp7 from "../assets/pp7.jpg";
import pp8 from "../assets/pp8.jpg";
import pp9 from "../assets/pp9.jpg";
import pp10 from "../assets/pp10.jpg";
import pp11 from "../assets/pp11.jpg";
import pp12 from "../assets/pp12.jpg";

const IMAGES = [
  {
    id: 1,
    image: pp1,
    h: 1067,
    title: "Sigiriya Rock",
    tags: ["Culture", "Nature"],
  },
  {
    id: 2,
    image: pp2,
    w: 1600,
    h: 1067,
    title: "Mirissa Beach",
    tags: ["Beaches"],
  },
  {
    id: 3,
    image: pp3,
    w: 1600,
    h: 1067,
    title: "Tea Country",
    tags: ["Nature", "Hiking"],
  },
  {
    id: 4,
    image: pp4,
    w: 1600,
    h: 1067,
    title: "Galle Fort",
    tags: ["Culture", "City"],
  },
  {
    id: 5,
    image: pp5,
    w: 1600,
    h: 1067,
    title: "Yala Safari",
    tags: ["Wildlife", "Nature"],
  },
  {
    id: 6,
    image: pp6,
    w: 1600,
    h: 1067,
    title: "Arugam Bay",
    tags: ["Beaches", "Surf"],
  },
  {
    id: 7,
    image: pp7,
    w: 1600,
    h: 1067,
    title: "Udawalawe",
    tags: ["Wildlife", "Nature"],
  },
  {
    id: 8,
    image: pp8,
    w: 1600,
    h: 1067,
    title: "Batticaloa Lagoon",
    tags: ["Beaches", "City"],
  },
  { id: 9, image: pp9, w: 1600, h: 1067, title: "Pasikuda", tags: ["Beaches"] },
  {
    id: 10,
    image: pp10,
    w: 1600,
    h: 1067,
    title: "Kandy",
    tags: ["Culture", "City"],
  },
  {
    id: 11,
    image: pp11,
    w: 1600,
    h: 1067,
    title: "Trincomalee",
    tags: ["Beaches", "Culture"],
  },
  { id: 12, image: pp12, h: 1067, title: "Negombo", tags: ["Beaches", "City"] },
];

const ALL_TAG = "All";

const fadeIn = {
  hidden: { opacity: 0, y: 12, scale: 0.98 },
  show: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { duration: 0.35, ease: "easeOut" },
  },
};

export default function Gallery() {
  const [activeTag, setActiveTag] = useState(ALL_TAG);
  const [lightboxIdx, setLightboxIdx] = useState(-1);

  const tags = useMemo(() => {
    const t = new Set([ALL_TAG]);
    IMAGES.forEach((img) => img.tags.forEach((x) => t.add(x)));
    return Array.from(t);
  }, []);

  const filtered = useMemo(() => {
    if (activeTag === ALL_TAG) return IMAGES;
    return IMAGES.filter((img) => img.tags.includes(activeTag));
  }, [activeTag]);

  const openAt = useCallback(
    (id) => {
      const idx = filtered.findIndex((x) => x.id === id);
      if (idx >= 0) setLightboxIdx(idx);
    },
    [filtered]
  );

  useEffect(() => {
    const onKey = (e) => {
      if (lightboxIdx < 0) return;
      if (e.key === "Escape") setLightboxIdx(-1);
      if (e.key === "ArrowRight")
        setLightboxIdx((i) => (i + 1) % filtered.length);
      if (e.key === "ArrowLeft")
        setLightboxIdx((i) => (i - 1 + filtered.length) % filtered.length);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [lightboxIdx, filtered.length]);

  return (
    <div className="min-h-screen bg-gradient-to-b from-white via-blue-50/30 to-green-50/20">
      {/* Header */}
      <section className="pt-24 pb-6 text-center">
        <motion.h1
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-4xl md:text-6xl font-extrabold"
        >
          Photo{" "}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-green-600">
            Gallery
          </span>
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1, duration: 0.5 }}
          className="mt-3 text-gray-600 max-w-2xl mx-auto"
        >
          Explore Sri Lanka’s beaches, wildlife, heritage, and tea country — all
          in one scroll.
        </motion.p>
      </section>

      {/* Filters */}
      <div className="max-w-6xl mx-auto px-4">
        <div className="flex flex-wrap justify-center gap-2 md:gap-3 mb-6">
          {tags.map((tag) => {
            const active = activeTag === tag;
            return (
              <button
                key={tag}
                onClick={() => setActiveTag(tag)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition
                  ${
                    active
                      ? "bg-gradient-to-r from-blue-600 to-green-600 text-white shadow"
                      : "bg-white text-gray-700 border border-gray-200 hover:border-gray-300"
                  }`}
              >
                {tag}
              </button>
            );
          })}
        </div>
      </div>

      {/* Masonry Grid */}
      <div className="max-w-6xl mx-auto px-4 pb-20">
        <motion.div
          layout
          className="columns-1 sm:columns-2 lg:columns-3 gap-4"
        >
          <AnimatePresence initial={false}>
            {filtered.map((img) => (
              <motion.figure
                key={img.id}
                layout
                variants={fadeIn}
                initial="hidden"
                animate="show"
                exit={{ opacity: 0, scale: 0.98 }}
                className="mb-4 break-inside-avoid group relative cursor-zoom-in"
                onClick={() => openAt(img.id)}
              >
                <img
                  src={img.image} // ✅ fixed here
                  alt={img.title}
                  loading="lazy"
                  className="w-full rounded-2xl shadow-sm transition-transform duration-300 group-hover:-translate-y-1"
                />
                {/* overlay */}
                <div className="pointer-events-none absolute inset-0 rounded-2xl bg-gradient-to-t from-black/40 via-black/5 to-transparent opacity-0 group-hover:opacity-100 transition" />
                {/* caption */}
                <div className="pointer-events-none absolute left-3 bottom-3 right-3 opacity-0 group-hover:opacity-100 transition">
                  <div className="flex items-center gap-2 text-white/90">
                    <ZoomIn className="w-4 h-4" />
                    <figcaption className="font-semibold drop-shadow">
                      {img.title}
                    </figcaption>
                  </div>
                  <div className="mt-1 flex flex-wrap gap-1">
                    {img.tags.map((t) => (
                      <span
                        key={t}
                        className="text-[10px] bg-white/80 text-gray-800 px-1.5 py-0.5 rounded"
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.figure>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>

      {/* Lightbox */}
      <AnimatePresence>
        {lightboxIdx >= 0 && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[60] bg-black/80 backdrop-blur-sm"
            onClick={() => setLightboxIdx(-1)}
          >
            <div className="absolute inset-0 flex items-center justify-center p-4 md:p-8">
              <motion.div
                initial={{ opacity: 0, y: 20, scale: 0.98 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, scale: 0.98 }}
                className="relative max-w-5xl w-full"
                onClick={(e) => e.stopPropagation()}
              >
                <img
                  src={filtered[lightboxIdx].image} // ✅ fixed here
                  alt={filtered[lightboxIdx].title}
                  className="w-full max-h-[78vh] object-contain rounded-xl shadow-2xl"
                />

                <div className="mt-3 text-center text-white/90">
                  <div className="font-semibold">
                    {filtered[lightboxIdx].title}
                  </div>
                </div>

                {/* Controls */}
                <button
                  className="absolute -top-10 right-0 text-white/90 hover:text-white"
                  onClick={() => setLightboxIdx(-1)}
                  aria-label="Close"
                >
                  <X className="w-6 h-6" />
                </button>
                <button
                  className="absolute inset-y-0 left-0 px-3 md:px-5 text-white/80 hover:text-white"
                  onClick={() =>
                    setLightboxIdx(
                      (i) => (i - 1 + filtered.length) % filtered.length
                    )
                  }
                  aria-label="Previous"
                >
                  <ChevronLeft className="w-7 h-7" />
                </button>
                <button
                  className="absolute inset-y-0 right-0 px-3 md:px-5 text-white/80 hover:text-white"
                  onClick={() =>
                    setLightboxIdx((i) => (i + 1) % filtered.length)
                  }
                  aria-label="Next"
                >
                  <ChevronRight className="w-7 h-7" />
                </button>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Empty state */}
      {filtered.length === 0 && (
        <div className="pb-24">
          <div className="max-w-6xl mx-auto px-4">
            <div className="border rounded-2xl bg-white p-8 text-center text-gray-600">
              <div className="flex justify-center mb-3">
                <ImageIcon className="w-6 h-6 text-gray-400" />
              </div>
              No images for <b>{activeTag}</b> yet. Try another filter.
            </div>
          </div>
        </div>
      )}

      {/* Footer */}
      <div className="bg-gray-100 py-8 mt-16">
        <Footer />
      </div>
    </div>
  );
}
