import Footer from "../components/Footer";
import React from "react";
import {
  Clock,
  MapPin,
  Users,
  Star,
  Camera,
  Mountain,
  TreePine,
  Compass,
} from "lucide-react";

import tour1 from "../assets/tour1.jpg";
import tour2 from "../assets/tour2.jpg";
import tour3 from "../assets/tour3.jpg";

const PackagesPage = () => {
  const packages = [
    {
      id: 1,
      title: "8-Days Tours",
      subtitle: "8-Days Sri Lanka Cultural & Nature Sightseeing Tour",
      duration: "2 Days",
      image: tour1,
      highlights: [
        "Tea Plantation Visit",
        "Local Village Tour",
        "Scenic Viewpoints",
      ],

      rating: 4.8,
      reviews: 124,
    },
    {
      id: 2,
      title: "3 Days Tours",
      subtitle: "3 Days, Tours",
      duration: "3 Days",
      image: tour2,
      highlights: [
        "Temple of the Tooth",
        "Cultural Heritage Sites",
        "Traditional Cuisine",
      ],
      rating: 4.9,
      reviews: 89,
    },
    {
      id: 3,
      title: "4 Days Tours",
      subtitle: "4 Days, Tours",
      duration: "4 Days",
      image: tour3,
      highlights: [
        "Cave Temples",
        "Ancient Rock Paintings",
        "Meditation Experience",
      ],
      rating: 4.9,
      reviews: 156,
    },
    {
      id: 4,
      title: "8 Days Tours",
      subtitle: "8 Days, Tours",
      duration: "8 Days",
      image: tour2,
      highlights: [
        "Golden Buddha Statue",
        "Mountain Climbing",
        "Sunrise Views",
      ],
      rating: 5.0,
      reviews: 203,
    },
    {
      id: 5,
      title: "2 Days Tours",
      subtitle: "2 Days, Tours",
      duration: "2 Days",
      image: tour1,
      highlights: [
        "Tea Plantation Visit",
        "Local Village Tour",
        "Scenic Viewpoints",
      ],

      rating: 4.8,
      reviews: 124,
    },
    {
      id: 6,
      title: "2 Days Tours",
      subtitle: "2 Days, Tours",
      duration: "2 Days",
      image: tour3,
      highlights: [
        "Tea Plantation Visit",
        "Local Village Tour",
        "Scenic Viewpoints",
      ],

      rating: 4.8,
      reviews: 124,
    },
    {
      id: 7,
      title: "2 Days Tours",
      subtitle: "2 Days, Tours",
      duration: "2 Days",
      image: tour1,
      highlights: [
        "Tea Plantation Visit",
        "Local Village Tour",
        "Scenic Viewpoints",
      ],

      rating: 4.8,
      reviews: 124,
    },
    {
      id: 8,
      title: "2 Days Tours",
      subtitle: "2 Days, Tours",
      duration: "2 Days",
      image: tour1,
      highlights: [
        "Tea Plantation Visit",
        "Local Village Tour",
        "Scenic Viewpoints",
      ],

      rating: 4.8,
      reviews: 124,
    },
  ];

  const features = [
    { icon: <Mountain className="w-6 h-6" />, text: "Mountain Adventures" },
    { icon: <Camera className="w-6 h-6" />, text: "Photo Opportunities" },
    { icon: <TreePine className="w-6 h-6" />, text: "Nature Exploration" },
    { icon: <Compass className="w-6 h-6" />, text: "Expert Guides" },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-green-50">
      {/* Hero Section */}
      <section className="relative py-20 px-6 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-600/10 to-green-600/10"></div>
        <div className="relative max-w-7xl mx-auto text-center">
          <h1 className="text-5xl md:text-7xl font-bold text-gray-800 mb-6">
            Tour{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-green-600">
              Packages
            </span>
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Discover the beauty of Sri Lanka with our carefully crafted tour
            packages. From short getaways to extended adventures, we have
            something for every traveler.
          </p>

          {/* Features */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-12 max-w-4xl mx-auto">
            {features.map((feature, index) => (
              <div
                key={index}
                className="flex flex-col items-center p-4 bg-white/80 backdrop-blur-sm rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300"
              >
                <div className="text-blue-600 mb-3">{feature.icon}</div>
                <span className="text-sm font-medium text-gray-700">
                  {feature.text}
                </span>
              </div>
            ))}
          </div>

          {/* Grid Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-16 max-w-4xl mx-auto">
            <div className="text-center p-6 bg-white rounded-2xl shadow-lg">
              <h3 className="text-3xl font-bold text-blue-600 mb-2">500+</h3>
              <p className="text-gray-600">Happy Travelers</p>
            </div>
            <div className="text-center p-6 bg-white rounded-2xl shadow-lg">
              <h3 className="text-3xl font-bold text-green-600 mb-2">4.9</h3>
              <p className="text-gray-600">Average Rating</p>
            </div>
            <div className="text-center p-6 bg-white rounded-2xl shadow-lg">
              <h3 className="text-3xl font-bold text-blue-600 mb-2">15+</h3>
              <p className="text-gray-600">Tour Packages</p>
            </div>
            <div className="text-center p-6 bg-white rounded-2xl shadow-lg">
              <h3 className="text-3xl font-bold text-green-600 mb-2">24/7</h3>
              <p className="text-gray-600">Support</p>
            </div>
          </div>
        </div>
      </section>

      {/* Packages Grid */}
      <section className="py-16 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-8">
            {packages.map((pkg) => (
              <div
                key={pkg.id}
                className="group relative bg-white rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-500 overflow-hidden transform hover:-translate-y-2"
              >
                {/* Image */}
                <div className="relative h-64 overflow-hidden rounded-t-3xl">
                  <img
                    src={pkg.image}
                    alt={pkg.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent"></div>

                  {/* Duration Badge */}
                  <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full">
                    <div className="flex items-center gap-1 text-sm font-medium text-gray-700">
                      <Clock className="w-4 h-4" />
                      {pkg.duration}
                    </div>
                  </div>

                  {/* Rating Badge */}
                  <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full">
                    <div className="flex items-center gap-1 text-sm font-medium text-gray-700">
                      <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                      {pkg.rating}
                    </div>
                  </div>
                </div>

                {/* Content */}
                <div className="p-6">
                  <h3 className="text-2xl font-bold text-gray-800 mb-2">
                    {pkg.title}
                  </h3>
                  <p className="text-gray-500 mb-4">{pkg.subtitle}</p>

                  {/* Highlights */}
                  <ul className="space-y-2 mb-6">
                    {pkg.highlights.map((highlight, idx) => (
                      <li
                        key={idx}
                        className="flex items-center gap-2 text-sm text-gray-600"
                      >
                        <MapPin className="w-4 h-4 text-green-600" />
                        {highlight}
                      </li>
                    ))}
                  </ul>

                  {/* Reviews */}
                  <div className="flex items-center gap-2 mb-6 text-sm text-gray-500">
                    <Users className="w-4 h-4" />
                    <span>{pkg.reviews} reviews</span>
                  </div>
                  {/* CTA Button */}
                  <button className="w-full mt-4 bg-gradient-to-r from-green-600 to-blue-600 hover:from-green-700 hover:to-blue-700 text-white font-semibold py-3 px-6 rounded-2xl transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl">
                    SEE MORE
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Bottom CTA Section */}
      <section className="py-16 px-6 bg-gradient-to-r from-blue-600 to-green-600 text-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-6">Ready for Your Adventure?</h2>
          <p className="text-xl opacity-90 mb-8">
            Let us create unforgettable memories for you with our expertly
            guided tours through the beautiful landscapes of Sri Lanka.
          </p>
          {/* CTA Buttons Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 justify-center max-w-md mx-auto">
            <button className="bg-white text-blue-600 hover:bg-gray-100 font-semibold py-3 px-6 lg:px-8 rounded-2xl transition-all duration-300 transform hover:scale-105 shadow-lg">
              Contact Us Now
            </button>
            <button className="border-2 border-white text-white hover:bg-white hover:text-blue-600 font-semibold py-3 px-6 lg:px-8 rounded-2xl transition-all duration-300 transform hover:scale-105">
              View All Tours
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
};

export default PackagesPage;
