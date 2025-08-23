import { useMemo, useRef, useState, useEffect } from "react";
import { MapPin, X, ChevronLeft, ChevronRight, ExternalLink } from "lucide-react";

/**
 * HOW IT WORKS
 * - Uses a static map image (any PNG/JPG/SVG). Place pins using percentage coords.
 * - Clicking a pin opens the detail panel with a mini photo slider.
 * - Keyboard accessible (Tab through pins, Enter/Space to open).
 *
 * TODO: replace MAP_URL with your preferred map (transparent SVG looks great).
 */
const MAP_URL =
  "https://upload.wikimedia.org/wikipedia/commons/7/79/Map_of_Sri_Lanka_Provinces.png"; // placeholder bg (swap with your sri lanka map image)

const PLACES = [
  // x,y are percentages relative to the map container
  {
    id: 1,
    name: "Negombo",
    region: "Western Province",
    x: 20,
    y: 68,
    blurb:
      "Beach town known for the Dutch canal, seafood, and early-morning fish markets.",
    photos: [
      "https://zmplowykbzkeekwhrmos.supabase.co/storage/v1/object/public/sri%20lanka%20images/florian-wehde-szpz0b1Q6IE-unsplash.jpg",
    ],
    bestFor: ["Beaches", "Seafood", "Boat rides"],
    gmap: "https://maps.app.goo.gl/hAXGRpVGh1WhppSi7",
  },
  {
    id: 2,
    name: "Colombo",
    region: "Western Province",
    x: 22,
    y: 77,
    blurb:
      "Sri Lanka’s bustling capital; galleries, temples, street food, and the Galle Face Green.",
    photos: [
      "https://zmplowykbzkeekwhrmos.supabase.co/storage/v1/object/public/sri%20lanka%20images/tharoushan-kandarajah-KtDXt7DyfVM-unsplash.jpg",
    ],
    bestFor: ["City life", "Food", "Museums"],
    gmap: "https://maps.app.goo.gl/Vedy7YPnn7TPvkiF6",
  },
  {
    id: 3,
    name: "Galle",
    region: "Southern Province",
    x: 32,
    y: 102,
    blurb:
      "UNESCO-listed fort city with Dutch-era ramparts, boutique streets, and ocean views.",
    photos: [
      "https://zmplowykbzkeekwhrmos.supabase.co/storage/v1/object/public/sri%20lanka%20images/shainee-fernando-WDVMyBsSSwY-unsplash.jpg",
    ],
    bestFor: ["Heritage", "Photography", "Cafés"],
    gmap: "https://maps.app.goo.gl/UfZw7BHCjotgxC829",
  },
  {
    id: 4,
    name: "Hikkaduwa",
    region: "Southern Province",
    x: 32,
    y: 97,
    blurb: "Coral reefs, surfing spots, and laid-back beach vibes.",
    photos: [
      "https://zmplowykbzkeekwhrmos.supabase.co/storage/v1/object/public/sri%20lanka%20images/beautiful-tropical-beach-sea.jpg",
    ],
    bestFor: ["Snorkeling", "Surfing"],
    gmap: "https://maps.app.goo.gl/osNxaYDF7bMYxXks7",
  },
  {
    id: 5,
    name: "Yala",
    region: "Southern Province",
    x: 70,
    y: 93,
    blurb:
      "Sri Lanka’s most famous national park with high chances to spot leopards and elephants.",
    photos: [
      "https://zmplowykbzkeekwhrmos.supabase.co/storage/v1/object/public/sri%20lanka%20images/udara-karunarathna-MXY2UUe1C4g-unsplash.jpg",
    ],
    bestFor: ["Wildlife", "Safaris"],
    gmap: "https://maps.app.goo.gl/Urec8gsi4Dhgo4RN8",
  },
  {
    id: 6,
    name: "Nuwara Eliya",
    region: "Central Province",
    x: 50,
    y: 75,
    blurb:
      "Misty tea country with colonial charm, waterfalls, and cool weather.",
    photos: [
      "https://zmplowykbzkeekwhrmos.supabase.co/storage/v1/object/public/sri%20lanka%20images/heshan-weeramanthri-ytNk5s_4Wys-unsplash.jpg",
    ],
    bestFor: ["Tea estates", "Hikes", "Waterfalls"],
    gmap: "https://maps.app.goo.gl/fcrWFhgs2drb6d7m9",
  },
  {
    id: 7,
    name: "Kandy",
    region: "Central Province",
    x: 45,
    y: 66,
    blurb:
      "Sacred city home to the Temple of the Tooth, surrounded by hills and a serene lake.",
    photos: [
      "https://zmplowykbzkeekwhrmos.supabase.co/storage/v1/object/public/sri%20lanka%20images/supun-batagoda-xAV7NSUeeLc-unsplash.jpg",
    ],
    bestFor: ["Culture", "Temples", "City walks"],
    gmap: "https://maps.app.goo.gl/sFdMb1q2dTs1mTpQ7",
  },
  {
    id: 8,
    name: "Sigiriya",
    region: "Central Province",
    x: 44,
    y: 54,
    blurb:
      "Iconic rock fortress with ancient frescoes and stunning views at sunrise.",
    photos: [
      "https://imagizer.imageshack.com/img924/741/3T5FhV.jpg",
    ],
    bestFor: ["UNESCO", "Hikes", "History"],
    gmap: "https://maps.app.goo.gl/nvDn562pDmZNdosY6",
  },
  {
    id: 9,
    name: "Pasikuda",
    region: "Eastern Province",
    x: 85,
    y: 64,
    blurb:
      "Shallow turquoise bay famous for long, safe swims and calm seas.",
    photos: [
      "https://zmplowykbzkeekwhrmos.supabase.co/storage/v1/object/public/sri%20lanka%20images/pasikudah-beach-you-would.jpg",
    ],
    bestFor: ["Calm beaches", "Families"],
    gmap: "https://maps.app.goo.gl/rRoNiccyNyKWM7F69",
  },
  {
    id: 10,
    name: "Jaffna",
    region: "Northern Province",
    x: 37,
    y: 12,
    blurb:
      "Rich Tamil culture, colorful kovils, and unique cuisine at the island’s northern tip.",
    photos: [
      "https://zmplowykbzkeekwhrmos.supabase.co/storage/v1/object/public/sri%20lanka%20images/eshan-malaviarachchi-Z3XO2B2Db7Q-unsplash.jpg",
    ],
    bestFor: ["Culture", "Temples", "Food"],
    gmap: "https://maps.app.goo.gl/nMM3gCocb8ro7LYZ6",
  },
  {
    id: 11,
    name: "Arugam Bay",
    region: "Eastern Province",
    x: 85,
    y: 86,
    blurb: "World-class right-hand point break and relaxed surf town.",
    photos: [
      "https://zmplowykbzkeekwhrmos.supabase.co/storage/v1/object/public/sri%20lanka%20images/LS_Aru_Elephant-Rock_Desktop_1920x700.jpg",
    ],
    bestFor: ["Surfing", "Beaches"],
    gmap: "https://maps.app.goo.gl/6RNE7JXdH82C9cCi7",
  },
  {
    id: 12,
    name: "Batticaloa",
    region: "Eastern Province",
    x: 85,
    y: 59,
    blurb:
      "Lagoon city with serene bridges, lighthouses, and quiet beaches.",
    photos: [
      "https://zmplowykbzkeekwhrmos.supabase.co/storage/v1/object/public/sri%20lanka%20images/LS_Desktop_1920x7001-3.jpg",
    ],
    bestFor: ["Beaches", "Calm vibes"],
    gmap: "https://goo.gl/maps/1e2hD8x7tSf",
  },
  {
    id: 14,
    name: "Trincomalee (Koneswaram Temple)",
    region: "Eastern Province",
    x: 72,
    y: 43,
    blurb:
      "Clifftop kovil and pristine beaches; perfect blend of culture and sea.",
    photos: [
      "https://zmplowykbzkeekwhrmos.supabase.co/storage/v1/object/public/sri%20lanka%20images/nadun-ranasinghe-Crx7Ktg5LgY-unsplash.jpg",
    ],
    bestFor: ["Temples", "Snorkeling", "Beaches"],
    gmap: "https://maps.app.goo.gl/TWDPCwssUWUnYxkS8",
  },
];

export default function ThingsToDoMap() {
  const [active, setActive] = useState(PLACES[2]); // default to Galle so the panel isn't empty
  const [slideIdx, setSlideIdx] = useState(0);
  const panelRef = useRef(null);

  // reset slider when place changes
  useEffect(() => setSlideIdx(0), [active]);

  const nextPhoto = () =>
    setSlideIdx((i) => (i + 1) % (active?.photos?.length || 1));
  const prevPhoto = () =>
    setSlideIdx((i) =>
      (i - 1 + (active?.photos?.length || 1)) % (active?.photos?.length || 1)
    );

  const pins = useMemo(
    () =>
      PLACES.map((p) => (
        <button
          key={p.id}
          className={`absolute -translate-x-1/2 -translate-y-full focus:outline-none group`}
          style={{ left: `${p.x}%`, top: `${p.y}%` }}
          onClick={() => setActive(p)}
          onKeyDown={(e) => {
            if (e.key === "Enter" || e.key === " ") {
              e.preventDefault();
              setActive(p);
            }
          }}
          aria-label={`${p.name}, ${p.region}`}
        >
          {/* pin */}
          <div className="relative">
            <div className="w-9 h-9 rounded-full bg-white shadow-md flex items-center justify-center ring-2 ring-blue-600/70 group-hover:ring-blue-600 transition">
              <MapPin className="w-5 h-5 text-blue-700" />
            </div>
            {/* number bubble (optional) */}
            {/* <span className="absolute -top-2 -right-2 bg-blue-600 text-white text-[10px] font-bold px-1.5 py-0.5 rounded">
              {p.id}
            </span> */}
          </div>

          {/* label on hover (desktop) */}
          <span className="hidden md:block mt-1 text-xs font-semibold text-blue-900 bg-white/80 px-2 py-0.5 rounded shadow-sm opacity-0 translate-y-1 group-hover:opacity-100 group-hover:translate-y-0 transition">
            {p.name}
          </span>
        </button>
      )),
    []
  );

  return (
    <section className="py-16 px-4 md:px-6 bg-white">
      <div className="max-w-7xl mx-auto grid lg:grid-cols-12 gap-8 items-start">
        {/* Left: Title + blurb */}
        <div className="lg:col-span-4">
          <h2 className="text-5xl md:text-6xl font-extrabold leading-[0.95]">
            THINGS
            <br />
            TO DO
            <br />
            <span className="text-gray-600 text-3xl md:text-4xl font-semibold">
              IN SRI LANKA
            </span>
          </h2>

          <p className="mt-6 text-gray-600 leading-relaxed">
            We want to share Sri Lanka&apos;s extraordinarily diverse and
            authentic story with the world. Tap a pin to discover places,
            tips on what to do, when to go, and where to make your next
            favourite memory.
          </p>
        </div>

        {/* Middle: Map with pins */}
        <div className="lg:col-span-4 relative">
          <div className="rounded-3xl overflow-hidden shadow-xl bg-gradient-to-b from-blue-50 to-white">
            <div className="relative pt-[140%]"> {/* aspect box */}
              <img
                src={MAP_URL}
                alt="Sri Lanka map"
                className="absolute inset-0 w-full h-full object-cover"
              />
              {/* light vignette to improve contrast */}
              <div className="absolute inset-0 bg-gradient-to-br from-white/10 via-transparent to-blue-200/10 pointer-events-none" />
              {/* pins */}
              {pins}
            </div>
          </div>
        </div>

        {/* Right: Detail panel */}
        <div className="lg:col-span-4">
          <div
            ref={panelRef}
            className="bg-white rounded-3xl shadow-xl overflow-hidden border border-gray-100"
          >
            {/* photo slider */}
            <div className="relative h-56 md:h-64">
              {active?.photos?.map((src, i) => (
                <img
                  key={i}
                  src={src}
                  alt={`${active?.name} photo ${i + 1}`}
                  className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-500 ${
                    i === slideIdx ? "opacity-100" : "opacity-0"
                  }`}
                />
              ))}

              <button
                onClick={prevPhoto}
                className="absolute left-3 top-1/2 -translate-y-1/2 bg-white/70 hover:bg-white text-gray-800 p-2 rounded-full shadow"
                aria-label="Previous photo"
              >
                <ChevronLeft className="w-5 h-5" />
              </button>
              <button
                onClick={nextPhoto}
                className="absolute right-3 top-1/2 -translate-y-1/2 bg-white/70 hover:bg-white text-gray-800 p-2 rounded-full shadow"
                aria-label="Next photo"
              >
                <ChevronRight className="w-5 h-5" />
              </button>

              {active?.photos?.length > 1 && (
                <div className="absolute bottom-3 left-1/2 -translate-x-1/2 flex gap-2">
                  {active.photos.map((_, i) => (
                    <span
                      key={i}
                      className={`w-2 h-2 rounded-full ${
                        i === slideIdx ? "bg-white" : "bg-white/50"
                      }`}
                    />
                  ))}
                </div>
              )}
            </div>

            {/* content */}
            <div className="p-6">
              <div className="flex items-start justify-between gap-4">
                <div>
                  <h3 className="text-2xl font-extrabold">
                    {active?.name}
                  </h3>
                  <p className="text-sm text-gray-500 mt-0.5">
                    {active?.region}
                  </p>
                </div>
                <a
                  href={active?.gmap}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-1 text-blue-600 hover:text-blue-700 font-medium"
                >
                  Google Maps <ExternalLink className="w-4 h-4" />
                </a>
              </div>

              <p className="mt-3 text-gray-700 leading-relaxed">{active?.blurb}</p>

              {active?.bestFor?.length ? (
                <div className="mt-4 flex flex-wrap gap-2">
                  {active.bestFor.map((t, i) => (
                    <span
                      key={i}
                      className="text-xs bg-blue-50 text-blue-700 border border-blue-100 px-2 py-1 rounded-full"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              ) : null}
            </div>
          </div>
        </div>
      </div>

      {/* Mobile bottom sheet (optional): shows when detail panel is off-screen on small screens */}
      <div className="lg:hidden mt-6">
        <div className="bg-white/80 border border-gray-200 rounded-2xl p-4 backdrop-blur supports-[backdrop-filter]:bg-white/60">
          <div className="flex items-center justify-between">
            <div>
              <div className="font-semibold">{active?.name}</div>
              <div className="text-xs text-gray-500">{active?.region}</div>
            </div>
            <button
              onClick={() => {
                // scroll back to map area
                window.scrollTo({ top: 0, behavior: "smooth" });
              }}
              className="text-gray-600 hover:text-gray-900"
              aria-label="Back to map"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
