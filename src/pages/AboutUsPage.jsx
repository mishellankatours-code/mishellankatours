export default function AboutUsPage() {
  return (
    <section className="relative py-16 px-6 bg-gray-50">
      <div className="max-w-6xl mx-auto text-center">
        {/* Heading */}
        <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
          About <span className="text-emerald-600">Us</span>
        </h2>
        <p className="text-lg md:text-xl text-gray-700 max-w-3xl mx-auto">
          At <span className="font-semibold">Mishellanka Tours</span>, we are
          passionate about showcasing the true beauty of Sri Lanka. Our mission
          is to provide unforgettable travel experiences that connect you with
          the island’s culture, nature, and people.
        </p>
      </div>

      {/* Photos Section */}
      <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-10 max-w-5xl mx-auto">
        <div className="flex flex-col items-center">
          <img
            src="https://images.unsplash.com/photo-1507525428034-b723cf961d3e"
            alt="Beach"
            className="w-40 h-40 object-cover rounded-full shadow-lg"
          />
          <h4 className="mt-4 text-xl font-semibold text-emerald-700">
            Stunning Beaches
          </h4>
          <p className="text-gray-600 text-center">
            Golden sands, clear waters, and unforgettable sunsets.
          </p>
        </div>

        <div className="flex flex-col items-center">
          <img
            src="https://images.unsplash.com/photo-1548013146-72479768bada"
            alt="Culture"
            className="w-40 h-40 object-cover rounded-full shadow-lg"
          />
          <h4 className="mt-4 text-xl font-semibold text-emerald-700">
            Rich Culture
          </h4>
          <p className="text-gray-600 text-center">
            Ancient heritage sites and vibrant traditions.
          </p>
        </div>

        <div className="flex flex-col items-center">
          <img
            src="https://images.unsplash.com/photo-1501785888041-af3ef285b470"
            alt="Wildlife"
            className="w-40 h-40 object-cover rounded-full shadow-lg"
          />
          <h4 className="mt-4 text-xl font-semibold text-emerald-700">
            Wildlife & Nature
          </h4>
          <p className="text-gray-600 text-center">
            Exotic animals and breathtaking natural beauty.
          </p>
        </div>
      </div>

      {/* Our Values */}
      <div className="mt-16 max-w-4xl mx-auto text-center">
        <h3 className="text-3xl font-bold text-gray-900 mb-6">Our Values</h3>
        <p className="text-lg text-gray-700">
          We believe in{" "}
          <span className="text-emerald-600 font-semibold">
            authentic travel
          </span>
          ,
          <span className="text-emerald-600 font-semibold">
            {" "}
            sustainability
          </span>
          , and
          <span className="text-emerald-600 font-semibold">
            {" "}
            community support
          </span>
          . Every journey with us is crafted to inspire, connect, and create
          lifelong memories.
        </p>
        {/* Partners / Logos Section */}
        <div className="mt-16 py-12 bg-white">
          <div className="max-w-6xl mx-auto flex flex-wrap items-center justify-center gap-10">
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/5/59/Trustpilot_logo.svg"
              alt="Trustpilot"
              className="h-12"
            />
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/4/48/TourRadar_Logo.svg"
              alt="TourRadar"
              className="h-12"
            />
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/3/32/Sri_Lanka_Tourism_Logo.svg"
              alt="Sri Lanka Tourism"
              className="h-12"
            />
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/2/27/Safe_Travels_Logo.svg"
              alt="Safe Travels"
              className="h-12"
            />
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/5/5c/Tripadvisor_logo.svg"
              alt="Tripadvisor"
              className="h-12"
            />
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/7/77/GetYourGuide_Logo.svg"
              alt="GetYourGuide"
              className="h-12"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
