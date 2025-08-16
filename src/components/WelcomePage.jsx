export default function WelcomePage() {
  return (
    <section className="relative py-16 px-6 bg-gradient-to-b from-white to-gray-50">
      <div className="max-w-6xl mx-auto text-center">
        {/* Heading */}
        <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
          Welcome to <span className="text-emerald-600">Sri Lanka</span>
        </h2>
        <p className="text-lg md:text-xl text-gray-700 max-w-3xl mx-auto">
          Known as the{" "}
          <span className="font-semibold">Pearl of the Indian Ocean</span>, Sri
          Lanka is blessed with golden beaches, lush tea plantations, ancient
          cities, rich culture, and breathtaking wildlife. Whether you seek
          relaxation, adventure, or cultural discovery – Sri Lanka has it all.
        </p>
      </div>

      {/* Highlights */}
      <div className="mt-12 grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
        <div className="p-6 bg-white rounded-2xl shadow hover:shadow-lg transition">
          <h3 className="text-xl font-semibold text-emerald-600 mb-3">
            🌴 Beautiful Beaches
          </h3>
          <p className="text-gray-600">
            Relax on golden sands in Unawatuna, Mirissa, and Arugam Bay —
            perfect for sun-seekers, surfers, and nature lovers.
          </p>
        </div>

        <div className="p-6 bg-white rounded-2xl shadow hover:shadow-lg transition">
          <h3 className="text-xl font-semibold text-emerald-600 mb-3">
            🐘 Wildlife & Nature
          </h3>
          <p className="text-gray-600">
            Explore lush jungles, national parks, and spot elephants, leopards,
            and rare birds in their natural habitats.
          </p>
        </div>

        <div className="p-6 bg-white rounded-2xl shadow hover:shadow-lg transition">
          <h3 className="text-xl font-semibold text-emerald-600 mb-3">
            🏯 Rich Culture & Heritage
          </h3>
          <p className="text-gray-600">
            Discover ancient temples, UNESCO heritage sites, and vibrant
            traditions that showcase the island’s history.
          </p>
        </div>
      </div>

      {/* Why Choose Us */}
      <div className="mt-16 text-center">
        <h3 className="text-3xl font-bold text-gray-900 mb-6">
          Why Choose Us?
        </h3>
        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          <div className="p-6 bg-emerald-50 rounded-2xl shadow-sm">
            <h4 className="text-xl font-semibold text-emerald-700 mb-2">
              🌟 Personalized Tours
            </h4>
            <p className="text-gray-700">
              We craft experiences tailored to your interests, from adventure
              seekers to cultural explorers.
            </p>
          </div>
          <div className="p-6 bg-emerald-50 rounded-2xl shadow-sm">
            <h4 className="text-xl font-semibold text-emerald-700 mb-2">
              🚐 Expert Local Guides
            </h4>
            <p className="text-gray-700">
              Travel with passionate local guides who share insider stories and
              hidden gems.
            </p>
          </div>
          <div className="p-6 bg-emerald-50 rounded-2xl shadow-sm">
            <h4 className="text-xl font-semibold text-emerald-700 mb-2">
              💰 Best Value
            </h4>
            <p className="text-gray-700">
              Affordable packages without compromising comfort, safety, or
              quality.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
