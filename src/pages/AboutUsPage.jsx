import React from "react";
import Footer from "../components/Footer";
import {
  Heart,
  Shield,
  Users,
  Award,
  MapPin,
  Camera,
  Compass,
  Star,
} from "lucide-react";

export default function AboutUsPage() {
  const features = [
    {
      icon: <MapPin className="w-8 h-8" />,
      title: "Stunning Beaches",
      description:
        "Golden sands, clear waters, and unforgettable sunsets along Sri Lanka's pristine coastline.",
      image:
        "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2073&q=80",
      gradient: "from-blue-500 to-cyan-500",
    },
    {
      icon: <Camera className="w-8 h-8" />,
      title: "Rich Culture",
      description:
        "Ancient heritage sites, vibrant traditions, and spiritual experiences that connect you with history.",
      image:
        "https://images.unsplash.com/photo-1548013146-72479768bada?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
      gradient: "from-orange-500 to-red-500",
    },
    {
      icon: <Compass className="w-8 h-8" />,
      title: "Wildlife & Nature",
      description:
        "Exotic animals, lush rainforests, and breathtaking natural beauty in protected reserves.",
      image:
        "https://images.unsplash.com/photo-1501785888041-af3ef285b470?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
      gradient: "from-green-500 to-emerald-500",
    },
  ];

  const values = [
    {
      icon: <Heart className="w-6 h-6" />,
      title: "Authentic Travel",
      description: "Experience genuine local culture and traditions",
    },
    {
      icon: <Shield className="w-6 h-6" />,
      title: "Sustainability",
      description: "Protecting the environment for future generations",
    },
    {
      icon: <Users className="w-6 h-6" />,
      title: "Community Support",
      description: "Supporting local communities and businesses",
    },
    {
      icon: <Award className="w-6 h-6" />,
      title: "Excellence",
      description: "Delivering exceptional experiences every time",
    },
  ];

  const partners = [
    {
      name: "Trustpilot",
      logo: "https://upload.wikimedia.org/wikipedia/commons/5/59/Trustpilot_logo.svg",
    },
    {
      name: "TourRadar",
      logo: "https://upload.wikimedia.org/wikipedia/commons/4/48/TourRadar_Logo.svg",
    },
    {
      name: "Sri Lanka Tourism",
      logo: "https://upload.wikimedia.org/wikipedia/commons/3/32/Sri_Lanka_Tourism_Logo.svg",
    },
    {
      name: "Safe Travels",
      logo: "https://upload.wikimedia.org/wikipedia/commons/2/27/Safe_Travels_Logo.svg",
    },
    {
      name: "Tripadvisor",
      logo: "https://upload.wikimedia.org/wikipedia/commons/5/5c/Tripadvisor_logo.svg",
    },
    {
      name: "GetYourGuide",
      logo: "https://upload.wikimedia.org/wikipedia/commons/7/77/GetYourGuide_Logo.svg",
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-green-50">
      {/* Hero Section */}
      <section className="relative py-20 px-6 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-600/10 to-green-600/10"></div>
        <div className="relative max-w-7xl mx-auto text-center">
          <h1 className="text-5xl md:text-7xl font-bold text-gray-800 mb-6">
            About{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-green-600">
              Us
            </span>
          </h1>
          <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
            At{" "}
            <span className="font-bold text-green-600">Mishellanka Tours</span>,
            we are passionate about showcasing the true beauty of Sri Lanka. Our
            mission is to provide unforgettable travel experiences that connect
            you with the island's culture, nature, and people.
          </p>

          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-12 max-w-4xl mx-auto">
            <div className="bg-white/80 backdrop-blur-sm rounded-2xl shadow-lg p-6 hover:shadow-xl transition-all duration-300">
              <div className="text-3xl font-bold text-blue-600 mb-2">500+</div>
              <div className="text-sm text-gray-600">Happy Travelers</div>
            </div>
            <div className="bg-white/80 backdrop-blur-sm rounded-2xl shadow-lg p-6 hover:shadow-xl transition-all duration-300">
              <div className="text-3xl font-bold text-green-600 mb-2">50+</div>
              <div className="text-sm text-gray-600">Tour Packages</div>
            </div>
            <div className="bg-white/80 backdrop-blur-sm rounded-2xl shadow-lg p-6 hover:shadow-xl transition-all duration-300">
              <div className="text-3xl font-bold text-orange-600 mb-2">10+</div>
              <div className="text-sm text-gray-600">Years Experience</div>
            </div>
            <div className="bg-white/80 backdrop-blur-sm rounded-2xl shadow-lg p-6 hover:shadow-xl transition-all duration-300">
              <div className="flex items-center justify-center gap-1 text-3xl font-bold text-yellow-600 mb-2">
                4.9 <Star className="w-6 h-6 fill-yellow-400 text-yellow-400" />
              </div>
              <div className="text-sm text-gray-600">Customer Rating</div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-800 mb-4">
              What Makes Us Special
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Discover the diverse beauty of Sri Lanka through our expertly
              curated experiences
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div
                key={index}
                className="group relative bg-white rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-500 overflow-hidden transform hover:-translate-y-2"
              >
                {/* Image */}
                <div className="relative h-64 overflow-hidden rounded-t-3xl">
                  <img
                    src={feature.image}
                    alt={feature.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent"></div>

                  {/* Icon */}
                  <div
                    className={`absolute top-4 left-4 bg-gradient-to-r ${feature.gradient} p-3 rounded-full text-white shadow-lg`}
                  >
                    {feature.icon}
                  </div>
                </div>

                {/* Content */}
                <div className="p-6">
                  <h3 className="text-2xl font-bold text-gray-800 mb-3">
                    {feature.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    {feature.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-16 px-6 bg-gradient-to-r from-blue-600/5 to-green-600/5">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-800 mb-4">
              Our Values
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Every journey with us is crafted to inspire, connect, and create
              lifelong memories
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((value, index) => (
              <div
                key={index}
                className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1"
              >
                <div className="flex items-center justify-center w-12 h-12 bg-gradient-to-r from-blue-600 to-green-600 rounded-xl text-white mb-4">
                  {value.icon}
                </div>
                <h3 className="text-lg font-bold text-gray-800 mb-2">
                  {value.title}
                </h3>
                <p className="text-gray-600 text-sm">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Partners Section */}
      <section className="py-16 px-6 bg-white">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-gray-800 mb-4">
            Trusted Partners
          </h2>
          <p className="text-gray-600 mb-12 max-w-2xl mx-auto">
            We're proud to work with industry-leading partners to ensure the
            highest quality experiences
          </p>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 items-center">
            {partners.map((partner, index) => (
              <div
                key={index}
                className="group flex items-center justify-center p-4 bg-gray-50 rounded-2xl hover:bg-white hover:shadow-lg transition-all duration-300 transform hover:scale-105"
              >
                <img
                  src={partner.logo}
                  alt={partner.name}
                  className="h-8 opacity-70 group-hover:opacity-100 transition-opacity duration-300"
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-6 bg-gradient-to-r from-blue-600 to-green-600 text-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-6">
            Ready to Explore Sri Lanka?
          </h2>
          <p className="text-xl opacity-90 mb-8">
            Let us create an unforgettable adventure that showcases the best of
            our beautiful island nation.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-white text-blue-600 hover:bg-gray-100 font-semibold py-3 px-8 rounded-2xl transition-all duration-300 transform hover:scale-105">
              Start Planning
            </button>
            <button className="border-2 border-white text-white hover:bg-white hover:text-blue-600 font-semibold py-3 px-8 rounded-2xl transition-all duration-300 transform hover:scale-105">
              View Our Tours
            </button>
          </div>
        </div>
      </section>
      {/* Footer */}
      <div className="bg-gray-100 py-8 mt-16">
        <Footer />
      </div>
    </div>
  );
}
