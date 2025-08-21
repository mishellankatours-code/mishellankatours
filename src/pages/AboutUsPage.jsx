import React, { useState } from "react";
import {
  Heart,
  Shield,
  Users,
  Award,
  MapPin,
  Camera,
  Compass,
  Star,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";

import pp1 from "../assets/pp1.jpg";

// Mock Footer component
const Footer = () => (
  <div className="text-center text-gray-600">
    <p>&copy; 2024 Mishellanka Tours. All rights reserved.</p>
  </div>
);

export default function AboutUsPage() {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

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

  // Previous tours images
  const previousTours = [
    {
      title: "Sigiriya Ancient Rock Fortress",
      location: "Central Province",
      image: pp1,
      date: "March 2024",
    },
    {
      title: "Temple of the Sacred Tooth",
      location: "Kandy",
      image:
        "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
      date: "February 2024",
    },
    {
      title: "Yala National Park Safari",
      location: "Southern Province",
      image:
        "https://images.unsplash.com/photo-1549366021-9f761d040fb1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
      date: "January 2024",
    },
    {
      title: "Galle Fort Heritage Walk",
      location: "Southern Coast",
      image:
        "https://images.unsplash.com/photo-1567473030492-533b30c5494c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
      date: "December 2023",
    },
    {
      title: "Tea Plantation Experience",
      location: "Nuwara Eliya",
      image:
        "https://images.unsplash.com/photo-1563822249548-6a32b6ae7b6b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
      date: "November 2023",
    },
    {
      title: "Mirissa Whale Watching",
      location: "Southern Coast",
      image:
        "https://images.unsplash.com/photo-1559827260-dc66d52bef19?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
      date: "October 2023",
    },
    {
      title: "Polonnaruwa Ancient City",
      location: "North Central Province",
      image:
        "https://images.unsplash.com/photo-1539650116574-75c0c6d73c6e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
      date: "September 2023",
    },
    {
      title: "Ella Nine Arch Bridge",
      location: "Uva Province",
      image:
        "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
      date: "August 2023",
    },
  ];

  const nextImage = () => {
    setCurrentImageIndex((prev) => (prev + 1) % previousTours.length);
  };

  const prevImage = () => {
    setCurrentImageIndex(
      (prev) => (prev - 1 + previousTours.length) % previousTours.length
    );
  };

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

      {/* Previous Tours Section */}
      <section className="py-16 px-6 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-800 mb-4">
              Our Previous Tours
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Take a glimpse into the incredible journeys we've crafted for our
              travelers across Sri Lanka's most spectacular destinations
            </p>
          </div>

          {/* Featured Tour Image */}
          <div className="relative mb-12">
            <div className="relative h-96 md:h-[500px] rounded-3xl overflow-hidden shadow-2xl">
              <img
                src={previousTours[currentImageIndex].image}
                alt={previousTours[currentImageIndex].title}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent"></div>

              {/* Navigation Buttons */}
              <button
                onClick={prevImage}
                className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/20 backdrop-blur-sm hover:bg-white/30 text-white p-3 rounded-full transition-all duration-300 hover:scale-110"
              >
                <ChevronLeft className="w-6 h-6" />
              </button>
              <button
                onClick={nextImage}
                className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/20 backdrop-blur-sm hover:bg-white/30 text-white p-3 rounded-full transition-all duration-300 hover:scale-110"
              >
                <ChevronRight className="w-6 h-6" />
              </button>

              {/* Tour Info Overlay */}
              <div className="absolute bottom-6 left-6 right-6 text-white">
                <h3 className="text-3xl font-bold mb-2">
                  {previousTours[currentImageIndex].title}
                </h3>
                <div className="flex items-center justify-between">
                  <p className="text-lg opacity-90 flex items-center gap-2">
                    <MapPin className="w-5 h-5" />
                    {previousTours[currentImageIndex].location}
                  </p>
                  <span className="bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full text-sm">
                    {previousTours[currentImageIndex].date}
                  </span>
                </div>
              </div>
            </div>

            {/* Image Indicators */}
            <div className="flex justify-center mt-6 gap-2">
              {previousTours.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentImageIndex(index)}
                  className={`w-3 h-3 rounded-full transition-all duration-300 ${
                    index === currentImageIndex
                      ? "bg-blue-600 w-8"
                      : "bg-gray-300 hover:bg-gray-400"
                  }`}
                />
              ))}
            </div>
          </div>

          {/* Thumbnail Grid */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {previousTours.slice(0, 8).map((tour, index) => (
              <div
                key={index}
                onClick={() => setCurrentImageIndex(index)}
                className={`relative cursor-pointer group rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 ${
                  index === currentImageIndex ? "ring-4 ring-blue-500" : ""
                }`}
              >
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={tour.image}
                    alt={tour.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
                  <div className="absolute bottom-3 left-3 right-3 text-white">
                    <h4 className="font-semibold text-sm mb-1 line-clamp-2">
                      {tour.title}
                    </h4>
                    <p className="text-xs opacity-90 flex items-center gap-1">
                      <MapPin className="w-3 h-3" />
                      {tour.location}
                    </p>
                  </div>
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
