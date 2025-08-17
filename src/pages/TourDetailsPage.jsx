import React from "react";
import { useParams, useNavigate } from "react-router-dom";
import {
  Clock,
  MapPin,
  Users,
  Star,
  Camera,
  Mountain,
  TreePine,
  Compass,
  Check,
  X,
  Calendar,
  Car,
  Home,
  Utensils,
  Plane,
  Shield,
  ArrowLeft,
  Phone,
  Mail,
} from "lucide-react";
import Footer from "../components/Footer";

// Import your images
import tour1 from "../assets/tour1.jpg";
import tour2 from "../assets/tour2.jpg";

const TourDetailsPage = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  // Tour data with detailed information
  const tourDetails = {
    1: {
      title: "8-Days Tours",
      subtitle: "8-Days Sri Lanka Cultural & Nature Sightseeing Tour",
      duration: "8 Days / 7 Nights",
      image: tour1,
      rating: 4.8,
      reviews: 124,
      groupSize: "2-15 people",
      difficulty: "Easy to Moderate",
      highlights: [
        "Sigiriya Rock Fortress",
        "Dambulla Cave Temple",
        "Polonnaruwa Ancient City",
        "Kandy Temple of the Tooth",
        "Scenic Train to Ella",
        "Yala Safari",
        "Mirissa Coconut Hill",
        "Galle Fort & Turtle Hatchery",
      ],

      itinerary: [
        {
          day: 1,
          title: "Arrival and Sigiriya Stay",
          description:
            "Meet and greet at Bandaranaike International Airport by CEYLON EYEFUL TOURS representative. Transfer to Sigiriya via Dambulla Golden Cave Temple, a UNESCO heritage site with 2000 years of history, murals, and 157 Buddha statues.",
          activities: [
            "Airport pickup",
            "Golden Cave Temple tour (Dambulla)",
            "Hotel check-in at Sigiriya",
          ],
        },
        {
          day: 2,
          title: "Sigiriya – Polonnaruwa – Minneriya – Sigiriya",
          description:
            "Explore the ancient city of Polonnaruwa with its ruins, temples, and King Parakramabahu’s palace. Afternoon safari at Minneriya National Park to witness elephants and wildlife, then return to Sigiriya.",
          activities: [
            "Polonnaruwa ancient city tour",
            "Visit King Parakramabahu’s palace",
            "Minneriya National Park safari",
            "Overnight stay in Sigiriya",
          ],
        },
        {
          day: 3,
          title: "Sigiriya to Kandy",
          description:
            "Climb the Sigiriya Rock Fortress (Lion Rock). Visit Hiriwadunna village for traditional lunch and local activities. Explore Matale Spice Garden and Muthumariamman Temple before reaching Kandy.",
          activities: [
            "Sigiriya Rock Fortress climb",
            "Hiriwadunna village tour & lunch",
            "Spice Garden visit",
            "Matale Muthumariamman Temple",
            "Arrival in Kandy (dinner & overnight)",
          ],
        },
        {
          day: 4,
          title: "Kandy City Tour",
          description:
            "Full day exploring Kandy: Temple of the Tooth, Bahirawakanda Buddha statue, city viewpoint, gem museum, Peradeniya Botanical Gardens, cultural dance show, and shopping.",
          activities: [
            "Temple of the Tooth Relic",
            "Bahirawakanda Buddha statue",
            "Kandy viewpoint",
            "Gem & gemological museum",
            "Peradeniya Royal Botanical Gardens",
            "Kandy Cultural Dance Show",
            "Shopping in Kandy",
          ],
        },
        {
          day: 5,
          title: "Kandy – Nuwara Eliya – Ella",
          description:
            "Drive through tea country, visiting Ramboda Falls, Labookellie Tea Centre, Gregory Lake, and Nuwara Eliya Post Office. Board train from Nanu Oya to Ella for a scenic ride through hills, valleys, and tea plantations.",
          activities: [
            "Ramboda Falls",
            "Labookellie Tea Centre & Garden",
            "Gregory Lake",
            "Nuwara Eliya Post Office",
            "Train ride to Ella",
          ],
        },
        {
          day: 6,
          title: "Ella – Yala (via Tissamaharama)",
          description:
            "Morning hike to Little Adam’s Peak, visit Nine Arch Bridge and Ravana Falls. Continue to Yala National Park for an evening safari, then dinner and overnight stay near Yala.",
          activities: [
            "Little Adam’s Peak hike",
            "Nine Arch Bridge visit",
            "Ravana Falls",
            "Yala National Park safari",
            "Dinner & overnight near Yala",
          ],
        },
        {
          day: 7,
          title: "Yala – Mirissa",
          description:
            "Travel to Mirissa and visit Coconut Tree Hill, a stunning headland with panoramic views of the Indian Ocean. Free time to explore Mirissa town before overnight stay.",
          activities: [
            "Drive to Mirissa",
            "Visit Coconut Tree Hill",
            "Leisure time in Mirissa",
          ],
        },
        {
          day: 8,
          title: "Mirissa – Galle – Bentota – Departure",
          description:
            "Final day exploring southern coast: Galle Fort, Turtle Hatchery, and boat safari on the Madhu River before transfer to airport for departure.",
          activities: [
            "Visit Galle Fort",
            "Turtle Hatchery Farm",
            "Madhu River boat safari",
            "Airport transfer for departure",
          ],
        },
      ],
      inclusions: [
        "7 nights accommodation in 3-star hotels",
        "Daily breakfast and 4 dinners",
        "Air-conditioned vehicle with driver",
        "English-speaking tour guide",
        "All entrance fees to mentioned sites",
        "Airport transfers",
        "Tea plantation visit and tasting",
        "Cultural dance show tickets",
        "Train journey (subject to availability)",
      ],
      exclusions: [
        "International flight tickets",
        "Visa fees",
        "Travel insurance",
        "Personal expenses",
        "Lunch meals (except mentioned)",
        "Tips for guide and driver",
        "Camera/video permits at sites",
        "Optional activities",
        "Alcoholic beverages",
      ],
      whatWeOffer: [
        "24/7 customer support during tour",
        "Experienced local guides",
        "Comfortable accommodation",
        "Safe and reliable transportation",
        "Flexible itinerary options",
        "Photography assistance",
        "Cultural immersion experiences",
        "Emergency medical support",
        "Money-back satisfaction guarantee",
      ],
    },
    2: {
      title: "3 Days Tours",
      subtitle: "3 Days Bentota, Galle & Colombo Tour",
      duration: "3 Days / 2 Nights",
      image: tour2,
      rating: 4.9,
      reviews: 89,
      groupSize: "2-12 people",
      difficulty: "Easy",
      highlights: [
        "Bentota Beach & Water Sports",
        "Turtle Hatchery & Madhu River Safari",
        "Galle Fort Exploration",
        "Colombo City Tour & Shopping",
      ],
      itinerary: [
        {
          day: 1,
          title: "Airport to Bentota Hotel",
          description:
            "Arrive at Bandaranaike International Airport and transfer to your hotel in Bentota. Relax and enjoy leisure time at the hotel.",
          activities: [
            "Airport pickup by CEYLON EYEFUL TOURS representative",
            "Scenic drive to Bentota",
            "Hotel check-in",
            "Leisure time and overnight stay in Bentota",
          ],
        },
        {
          day: 2,
          title: "Bentota Excursions & Galle Tour",
          description:
            "Enjoy a full day of activities in Bentota including water sports, turtle hatchery, Madu River safari, and a cultural heritage visit to Galle Fort.",
          activities: [
            "Bentota Beach relaxation",
            "Water sports: water skiing, snorkeling, diving, banana boat rides, windsurfing",
            "Visit Turtle Hatchery Farm",
            "Galle Fort city tour",
            "Madhu River boat safari",
            "Return to Bentota for overnight stay",
          ],
        },
        {
          day: 3,
          title: "Colombo City Tour & Departure",
          description:
            "Explore Colombo highlights including Gangaramaya Temple, Beira Lake, Galle Face Green, Independence Memorial Hall, and the Old Dutch Hospital before airport transfer.",
          activities: [
            "Gangaramaya Temple visit",
            "Beira Lake walk",
            "Galle Face Green promenade",
            "Independence Memorial Hall & Museum",
            "Shopping & dining at Old Dutch Hospital",
            "Airport transfer or Colombo drop-off",
          ],
        },
      ],
      inclusions: [
        "2 nights hotel accommodation",
        "Daily breakfast and 1 dinner",
        "Transportation with driver",
        "English-speaking guide",
        "All entrance fees",
        "Cultural show tickets",
      ],
      exclusions: [
        "International flights",
        "Visa fees",
        "Personal expenses",
        "Lunch meals",
        "Travel insurance",
        "Tips",
      ],
      whatWeOffer: [
        "Expert cultural guides",
        "Comfortable accommodation",
        "24/7 support",
        "Flexible scheduling",
        "Photography assistance",
        "Cultural experiences",
      ],
    },
    // Add more tour details for other packages...
  };

  const tour = tourDetails[id];

  if (!tour) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-gray-800 mb-4">
            Tour Not Found
          </h1>
          <button
            onClick={() => navigate("/packages")}
            className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors"
          >
            Back to Packages
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-green-50">
      {/* Hero Section */}
      <section className="relative h-96 overflow-hidden">
        <img
          src={tour.image}
          alt={tour.title}
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent"></div>

        {/* Back Button */}
        <button
          onClick={() => navigate("/packages")}
          className="absolute top-6 left-6 bg-white/90 backdrop-blur-sm p-3 rounded-full hover:bg-white transition-all duration-300"
        >
          <ArrowLeft className="w-6 h-6 text-gray-700" />
        </button>

        {/* Hero Content */}
        <div className="absolute bottom-0 left-0 right-0 p-8">
          <div className="max-w-7xl mx-auto">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-4">
              {tour.title}
            </h1>
            <p className="text-xl text-white/90 mb-6">{tour.subtitle}</p>

            {/* Quick Stats */}
            <div className="flex flex-wrap gap-6 text-white">
              <div className="flex items-center gap-2">
                <Clock className="w-5 h-5" />
                <span>{tour.duration}</span>
              </div>
              <div className="flex items-center gap-2">
                <Users className="w-5 h-5" />
                <span>{tour.groupSize}</span>
              </div>
              <div className="flex items-center gap-2">
                <Star className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                <span>
                  {tour.rating} ({tour.reviews} reviews)
                </span>
              </div>
              <div className="flex items-center gap-2">
                <Mountain className="w-5 h-5" />
                <span>{tour.difficulty}</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-6 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-12">
            {/* Tour Highlights */}
            <section className="bg-white rounded-3xl shadow-lg p-8">
              <h2 className="text-3xl font-bold text-gray-800 mb-6">
                Tour Highlights
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {tour.highlights.map((highlight, index) => (
                  <div
                    key={index}
                    className="flex items-center gap-3 p-4 bg-gradient-to-r from-blue-50 to-green-50 rounded-xl"
                  >
                    <MapPin className="w-5 h-5 text-green-600" />
                    <span className="text-gray-700">{highlight}</span>
                  </div>
                ))}
              </div>
            </section>

            {/* Daily Itinerary */}
            <section className="bg-white rounded-3xl shadow-lg p-8">
              <h2 className="text-3xl font-bold text-gray-800 mb-8">
                Daily Itinerary
              </h2>
              <div className="space-y-6">
                {tour.itinerary.map((day, index) => (
                  <div
                    key={index}
                    className="border-l-4 border-blue-600 pl-6 pb-8"
                  >
                    <div className="flex items-center gap-4 mb-3">
                      <div className="bg-blue-600 text-white w-8 h-8 rounded-full flex items-center justify-center font-bold text-sm">
                        {day.day}
                      </div>
                      <h3 className="text-xl font-bold text-gray-800">
                        {day.title}
                      </h3>
                    </div>
                    <p className="text-gray-600 mb-4">{day.description}</p>
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
                      {day.activities.map((activity, idx) => (
                        <div
                          key={idx}
                          className="flex items-center gap-2 text-sm text-gray-500"
                        >
                          <Calendar className="w-4 h-4 text-green-600" />
                          <span>{activity}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </section>

            {/* Inclusions & Exclusions */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {/* Inclusions */}
              <section className="bg-white rounded-3xl shadow-lg p-8">
                <h2 className="text-2xl font-bold text-gray-800 mb-6 flex items-center gap-3">
                  <Check className="w-6 h-6 text-green-600" />
                  Tour Inclusions
                </h2>
                <ul className="space-y-3">
                  {tour.inclusions.map((item, index) => (
                    <li
                      key={index}
                      className="flex items-start gap-3 text-gray-600"
                    >
                      <Check className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </section>

              {/* Exclusions */}
              <section className="bg-white rounded-3xl shadow-lg p-8">
                <h2 className="text-2xl font-bold text-gray-800 mb-6 flex items-center gap-3">
                  <X className="w-6 h-6 text-red-600" />
                  Tour Exclusions
                </h2>
                <ul className="space-y-3">
                  {tour.exclusions.map((item, index) => (
                    <li
                      key={index}
                      className="flex items-start gap-3 text-gray-600"
                    >
                      <X className="w-5 h-5 text-red-600 mt-0.5 flex-shrink-0" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </section>
            </div>

            {/* What We Offer */}
            <section className="bg-white rounded-3xl shadow-lg p-8">
              <h2 className="text-3xl font-bold text-gray-800 mb-6 flex items-center gap-3">
                <Shield className="w-7 h-7 text-blue-600" />
                What We Offer
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {tour.whatWeOffer.map((offer, index) => (
                  <div
                    key={index}
                    className="flex items-center gap-3 p-4 bg-gradient-to-r from-blue-50 to-green-50 rounded-xl"
                  >
                    <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
                    <span className="text-gray-700 text-sm">{offer}</span>
                  </div>
                ))}
              </div>
            </section>
          </div>

          {/* Sidebar */}
          <div className="space-y-8">
            {/* Pricing Card */}
            <div className="bg-white rounded-3xl shadow-lg p-8 sticky top-6">
              <div className="space-y-4 mb-8">
                <div className="flex justify-between items-center py-2 border-b border-gray-100">
                  <span className="text-gray-600">Duration</span>
                  <span className="font-semibold">{tour.duration}</span>
                </div>
                <div className="flex justify-between items-center py-2 border-b border-gray-100">
                  <span className="text-gray-600">Group Size</span>
                  <span className="font-semibold">{tour.groupSize}</span>
                </div>
                <div className="flex justify-between items-center py-2 border-b border-gray-100">
                  <span className="text-gray-600">Difficulty</span>
                  <span className="font-semibold">{tour.difficulty}</span>
                </div>
              </div>

              <div className="space-y-4">
                <button className="w-full bg-gradient-to-r from-green-600 to-blue-600 hover:from-green-700 hover:to-blue-700 text-white font-semibold py-4 px-6 rounded-2xl transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl">
                  Book Now
                </button>
                <button className="w-full border-2 border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white font-semibold py-4 px-6 rounded-2xl transition-all duration-300">
                  Get Quote
                </button>
              </div>

              <div className="mt-8 pt-6 border-t border-gray-100">
                <h3 className="font-bold text-gray-800 mb-4">Need Help?</h3>
                <div className="space-y-3">
                  <div className="flex items-center gap-3 text-gray-600">
                    <Phone className="w-5 h-5 text-blue-600" />
                    <span>+94 76 204 4065</span>
                  </div>
                  <div className="flex items-center gap-3 text-gray-600">
                    <Mail className="w-5 h-5 text-blue-600" />
                    <span>mishellankatours@gmail.com</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <div className="bg-gray-100 py-8 mt-16">
        <Footer />
      </div>
    </div>
  );
};

export default TourDetailsPage;
