import React from "react";
import {
  Waves,
  TreePine,
  Building2,
  Star,
  Users,
  MapPin,
  Award,
  Shield,
  Compass,
  Camera,
} from "lucide-react";

export default function WelcomePage() {
  const highlights = [
    {
      icon: <Waves className="w-8 h-8" />,
      title: "Beautiful Beaches",
      description:
        "Relax on golden sands in Unawatuna, Mirissa, and Arugam Bay — perfect for sun-seekers, surfers, and nature lovers.",
      image:
        "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
      gradient: "from-blue-500 to-cyan-500",
    },
    {
      icon: <TreePine className="w-8 h-8" />,
      title: "Wildlife & Nature",
      description:
        "Explore lush jungles, national parks, and spot elephants, leopards, and rare birds in their natural habitats.",
      image:
        "https://images.unsplash.com/photo-1564760055775-d63b17a55c44?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2006&q=80",
      gradient: "from-green-500 to-emerald-500",
    },
    {
      icon: <Building2 className="w-8 h-8" />,
      title: "Rich Culture & Heritage",
      description:
        "Discover ancient temples, UNESCO heritage sites, and vibrant traditions that showcase the island's history.",
      image:
        "https://images.unsplash.com/photo-1544735716-392fe2489ffa?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
      gradient: "from-orange-500 to-red-500",
    },
  ];

  const whyChooseUs = [
    {
      icon: <Star className="w-6 h-6" />,
      title: "Personalized Tours",
      description:
        "We craft experiences tailored to your interests, from adventure seekers to cultural explorers.",
      color: "from-purple-500 to-pink-500",
    },
    {
      icon: <Users className="w-6 h-6" />,
      title: "Expert Local Guides",
      description:
        "Travel with passionate local guides who share insider stories and hidden gems.",
      color: "from-blue-500 to-indigo-500",
    },
    {
      icon: <Award className="w-6 h-6" />,
      title: "Best Value",
      description:
        "Affordable packages without compromising comfort, safety, or quality.",
      color: "from-green-500 to-teal-500",
    },
    {
      icon: <Shield className="w-6 h-6" />,
      title: "Safety First",
      description:
        "Your safety and comfort are our top priorities on every adventure.",
      color: "from-red-500 to-orange-500",
    },
    {
      icon: <Compass className="w-6 h-6" />,
      title: "Unique Experiences",
      description:
        "Access to hidden gems and exclusive locations off the beaten path.",
      color: "from-yellow-500 to-amber-500",
    },
    {
      icon: <Camera className="w-6 h-6" />,
      title: "Memorable Moments",
      description:
        "Create Instagram-worthy memories with stunning photo opportunities.",
      color: "from-pink-500 to-rose-500",
    },
  ];

  const stats = [
    { number: "2500+", label: "Happy Travelers" },
    { number: "100+", label: "Destinations" },
    { number: "15+", label: "Years Experience" },
    { number: "4.9★", label: "Customer Rating" },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-green-50">
      {/* Hero Section */}
      <section className="relative py-20 px-6 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-600/10 to-green-600/10"></div>
        <div className="relative max-w-7xl mx-auto text-center">
          <h1 className="text-5xl md:text-7xl font-bold text-gray-800 mb-6">
            Welcome to{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-green-600">
              Sri Lanka
            </span>
          </h1>
          <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed mb-8">
            Known as the{" "}
            <span className="font-bold text-green-600">
              Pearl of the Indian Ocean
            </span>
            , Sri Lanka is blessed with golden beaches, lush tea plantations,
            ancient cities, rich culture, and breathtaking wildlife. Whether you
            seek relaxation, adventure, or cultural discovery – Sri Lanka has it
            all.
          </p>

          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-12 max-w-4xl mx-auto">
            {stats.map((stat, index) => (
              <div
                key={index}
                className="bg-white/80 backdrop-blur-sm rounded-2xl shadow-lg p-6 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1"
              >
                <div className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-green-600 mb-2">
                  {stat.number}
                </div>
                <div className="text-sm text-gray-600">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Highlights Section */}
      <section className="py-16 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-800 mb-4">
              Discover Paradise
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Experience the diverse beauty and rich heritage of Sri Lanka
              through unforgettable adventures
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {highlights.map((highlight, index) => (
              <div
                key={index}
                className="group relative bg-white rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-500 overflow-hidden transform hover:-translate-y-2"
              >
                {/* Image */}
                <div className="relative h-64 overflow-hidden rounded-t-3xl">
                  <img
                    src={highlight.image}
                    alt={highlight.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent"></div>

                  {/* Icon */}
                  <div
                    className={`absolute top-4 left-4 bg-gradient-to-r ${highlight.gradient} p-3 rounded-full text-white shadow-lg`}
                  >
                    {highlight.icon}
                  </div>
                </div>

                {/* Content */}
                <div className="p-6">
                  <h3 className="text-2xl font-bold text-gray-800 mb-3">
                    {highlight.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    {highlight.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-16 px-6 bg-gradient-to-r from-blue-600/5 to-green-600/5">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-800 mb-4">
              Why Choose Us?
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We're committed to providing exceptional experiences that exceed
              your expectations
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {whyChooseUs.map((feature, index) => (
              <div
                key={index}
                className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 group"
              >
                <div
                  className={`flex items-center justify-center w-12 h-12 bg-gradient-to-r ${feature.color} rounded-xl text-white mb-4 group-hover:scale-110 transition-transform duration-300`}
                >
                  {feature.icon}
                </div>
                <h3 className="text-lg font-bold text-gray-800 mb-2">
                  {feature.title}
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonial Section */}
      <section className="py-16 px-6 bg-white">
        <div className="max-w-4xl mx-auto text-center">
          <div className="bg-gradient-to-r from-blue-600 to-green-600 rounded-3xl p-8 text-white shadow-2xl">
            <div className="flex justify-center mb-4">
              {[...Array(5)].map((_, i) => (
                <Star
                  key={i}
                  className="w-6 h-6 fill-yellow-400 text-yellow-400"
                />
              ))}
            </div>
            <blockquote className="text-xl md:text-2xl font-medium mb-6 italic">
              "Our trip to Sri Lanka with Mishellanka Tours was absolutely
              incredible. The guides were knowledgeable, the experiences were
              authentic, and every moment was perfectly planned. Highly
              recommended!"
            </blockquote>
            <div className="flex items-center justify-center gap-4">
              <img
                src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=387&q=80"
                alt="Customer"
                className="w-12 h-12 rounded-full object-cover"
              />
              <div className="text-left">
                <div className="font-semibold">Sarah Johnson</div>
                <div className="text-sm opacity-90">Travel Enthusiast</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-6 bg-gradient-to-r from-blue-600 to-green-600 text-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-6">
            Ready for Your Sri Lankan Adventure?
          </h2>
          <p className="text-xl opacity-90 mb-8">
            Let us create unforgettable memories as you explore the wonders of
            the Pearl of the Indian Ocean.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-white text-blue-600 hover:bg-gray-100 font-semibold py-3 px-8 rounded-2xl transition-all duration-300 transform hover:scale-105 shadow-lg">
              Explore Our Tours
            </button>
            <button className="border-2 border-white text-white hover:bg-white hover:text-blue-600 font-semibold py-3 px-8 rounded-2xl transition-all duration-300 transform hover:scale-105">
              Contact Us Today
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}
