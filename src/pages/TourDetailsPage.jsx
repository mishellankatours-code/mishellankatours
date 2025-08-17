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
    3: {
      title: "10 Days Tours",
      subtitle: "10-Day Sri Lanka Heritage, Nature & Culture Tour",
      duration: "10 Days / 9 Nights",
      image: tour1,
      rating: 4.9,
      reviews: 132,
      groupSize: "2-20 people",
      difficulty: "Moderate",
      highlights: [
        "Climb Sigiriya Rock Fortress",
        "Explore Ancient Polonnaruwa & Dambulla Caves",
        "Wildlife Safari at Minneriya & Yala",
        "Temple of the Tooth Relic in Kandy",
        "Scenic train ride from Nuwara Eliya to Ella",
        "Nine Arch Bridge & Little Adam’s Peak",
        "Whale Watching in Mirissa",
        "Galle Fort & Turtle Hatchery",
        "Bentota Beach & Madu River Safari",
      ],
      itinerary: [
        {
          day: 1,
          title: "Arrival in Sri Lanka – Transfer to Sigiriya",
          description:
            "Meet and greet at Bandaranaike International Airport, transfer to Sigiriya hotel for check-in and relaxation.",
          activities: [
            "Airport pickup by CEYLON EYEFUL TOURS representative",
            "Drive to Sigiriya",
            "Hotel check-in",
            "Relaxation & overnight stay",
          ],
        },
        {
          day: 2,
          title: "Polonnaruwa & Minneriya Safari",
          description:
            "Explore the ancient ruins of Polonnaruwa, then enjoy an exciting safari at Minneriya National Park.",
          activities: [
            "Tour Polonnaruwa archaeological city",
            "Visit Shiva Devale & King Parakramabahu’s Palace",
            "Minneriya National Park jeep safari",
            "Return to Sigiriya for overnight stay",
          ],
        },
        {
          day: 3,
          title: "Sigiriya Rock Fortress, Dambulla & Matale",
          description:
            "Climb Sigiriya Rock Fortress, visit Dambulla Cave Temple, Hiriwadunna village, Spice Garden, and Matale Temple before heading to Kandy.",
          activities: [
            "Climb Sigiriya Rock Fortress (Lion Rock)",
            "Visit Dambulla Golden Temple (UNESCO site)",
            "Hiriwadunna village experience with bullock cart & boat ride",
            "Matale Spice Garden visit",
            "Matale Muthumariamman Temple",
            "Transfer to Kandy & overnight stay",
          ],
        },
        {
          day: 4,
          title: "Kandy City Tour",
          description:
            "Explore the cultural capital of Sri Lanka including sacred temples, gardens, museums, and cultural shows.",
          activities: [
            "Temple of the Tooth Relic",
            "Bahirawakanda Buddha Statue & Kandy Viewpoint",
            "Visit local market & Gem Museum",
            "Peradeniya Royal Botanical Gardens",
            "Kandy Cultural Dance Show",
            "Evening shopping & leisure",
          ],
        },
        {
          day: 5,
          title: "Kandy → Nuwara Eliya → Ella Train Ride",
          description:
            "Enjoy a scenic journey through tea plantations, waterfalls, and misty highlands ending with the famous train ride to Ella.",
          activities: [
            "Stop at Ramboda Falls",
            "Visit Damro Labookellie Tea Centre",
            "Tour Gregory Lake & Nuwara Eliya town",
            "Visit Nuwara Eliya Post Office",
            "Train ride from Nanu Oya to Ella",
            "Overnight stay in Ella",
          ],
        },
        {
          day: 6,
          title: "Ella City Tour",
          description:
            "Explore Ella’s highlights including the Nine Arch Bridge, Little Adam’s Peak, Flying Ravana Zipline, and Ella Rock.",
          activities: [
            "Visit Nine Arch Bridge",
            "Hike Little Adam’s Peak",
            "Flying Ravana zipline adventure",
            "Ella Rock hiking experience",
            "Return to hotel & overnight stay",
          ],
        },
        {
          day: 7,
          title: "Ella → Yala via Tissamaharama",
          description:
            "Journey to Yala with stops at Ravana Falls before embarking on a thrilling Yala National Park safari.",
          activities: [
            "Stop at Ravana Falls",
            "Safari adventure in Yala National Park",
            "Spot leopards, elephants & exotic wildlife",
            "Dinner & overnight stay near Yala",
          ],
        },
        {
          day: 8,
          title: "Yala → Mirissa",
          description:
            "Travel to Mirissa and enjoy a relaxing beach evening at Coconut Tree Hill and Mirissa Bay.",
          activities: [
            "Drive to Mirissa",
            "Visit Coconut Tree Hill viewpoint",
            "Leisure time at Mirissa beach",
            "Overnight stay in Mirissa",
          ],
        },
        {
          day: 9,
          title: "Mirissa Whale Watching & Transfer to Bentota",
          description:
            "Go whale and dolphin watching in Mirissa before heading to Bentota with stops at Galle Fort, Turtle Hatchery, and Madu River.",
          activities: [
            "Whale & dolphin watching excursion",
            "Explore Galle Fort (UNESCO site)",
            "Visit Turtle Hatchery in Galle",
            "Boat ride on Madu River",
            "Overnight stay in Bentota",
          ],
        },
        {
          day: 10,
          title: "Bentota → Airport Departure",
          description:
            "After breakfast, transfer to Bandaranaike International Airport for your departure flight.",
          activities: [
            "Hotel breakfast",
            "Beach relaxation (time permitting)",
            "Scenic drive to airport",
            "Departure flight",
          ],
        },
      ],
      inclusions: [
        "Air-conditioned vehicle with professional driver",
        "English-speaking tour guide",
        "Airport pickup and drop-off",
        "Whale watching tour in Mirissa (seasonal)",
        "Train journey through hill country (subject to availability)",
        "Cultural show in Kandy",
      ],

      exclusions: [
        "International flight tickets",
        "Visa fees",
        "Travel insurance",
        "Personal expenses (shopping, laundry, etc.)",
        "Lunch meals (except mentioned)",
        "Tips for guide and driver",
        "Optional activities (Ayurvedic spa, adventure sports, etc.)",
        "Alcoholic beverages",
      ],

      whatWeOffer: [
        "24/7 customer support during the tour",
        "Friendly and experienced local guides",
        "Comfortable and safe accommodation",
        "Private, air-conditioned transportation",
        "Flexible and customizable itinerary options",
        "Wildlife and nature exploration opportunities",
        "Authentic Sri Lankan cultural experiences",
        "Emergency medical assistance support",
        "Satisfaction guarantee with professional service",
      ],
    },
    4: {
      title: "5 Days Sri Lanka Cultural Discovery Tour",
      subtitle:
        "Step back in time and explore Sri Lanka’s cultural soul on this 5-day heritage-packed journey.",
      duration: "05 Days / 04 Nights",
      image: tour1,
      rating: 4.9,
      reviews: 98,
      groupSize: "2-15 people",
      difficulty: "Easy - Moderate",
      highlights: [
        "Explore Dambulla Golden Cave Temple (UNESCO)",
        "Climb the iconic Sigiriya Rock Fortress",
        "Visit the sacred city of Anuradhapura & Mihintale",
        "Discover the ancient ruins of Polonnaruwa",
        "Wildlife Safari at Minneriya National Park",
        "Matale Spice Garden & Nalanda Gedige Temple",
        "Temple of the Tooth Relic in Kandy",
        "Visit Gadaladeniya, Lankatilaka & Embekka Temples",
      ],
      itinerary: [
        {
          day: 1,
          title: "Arrival in Sri Lanka – Transfer to Sigiriya via Dambulla",
          description:
            "Meet and greet at Bandaranaike International Airport by CEYLON EYEFUL TOURS representative. On the way to Sigiriya, visit the famous Dambulla Golden Cave Temple (UNESCO). Evening check-in at Sigiriya hotel.",
          activities: [
            "Airport pickup & welcome",
            "Drive to Sigiriya",
            "Visit Dambulla Golden Temple (Rangiri Dambulla Cave Temple)",
            "Hotel check-in, dinner & overnight stay in Sigiriya",
          ],
        },
        {
          day: 2,
          title: "Sigiriya → Anuradhapura & Mihintale → Return to Sigiriya",
          description:
            "Explore the ancient city of Anuradhapura, home to sacred stupas and monasteries. Visit Mihintale, the cradle of Buddhism in Sri Lanka. Return to Sigiriya for overnight stay.",
          activities: [
            "Visit Mihintale (Mahinda’s Hill, ancient Buddhist site)",
            "Tour Anuradhapura sacred city & Atamasthana (Eight Sacred Places)",
            "Explore Jaya Sri Maha Bodhi, Ruwanwelisaya & Thuparamaya",
            "Return to Sigiriya hotel & overnight stay",
          ],
        },
        {
          day: 3,
          title: "Sigiriya → Polonnaruwa & Minneriya Safari → Sigiriya",
          description:
            "Discover the ruins of Polonnaruwa, Sri Lanka’s second ancient capital. Later, enjoy a thrilling safari at Minneriya National Park, famous for wild elephants.",
          activities: [
            "Visit Polonnaruwa archaeological city",
            "Explore Royal Palace of King Parakramabahu",
            "Shiva Devale & ancient Brahmanic monuments",
            "Minneriya National Park jeep safari",
            "Return to Sigiriya hotel for dinner & overnight stay",
          ],
        },
        {
          day: 4,
          title: "Sigiriya Rock Fortress → Matale → Transfer to Kandy",
          description:
            "Climb the iconic Sigiriya Rock Fortress, then proceed to Kandy via Matale. En route, visit the Spice Garden, Nalanda Gedige Temple, and Muthumariamman Temple.",
          activities: [
            "Climb Sigiriya Rock Fortress (Lion Rock, UNESCO site)",
            "Visit Matale Spice Garden",
            "Explore Nalanda Gedige Temple",
            "Visit Matale Muthumariamman Temple",
            "Arrive in Kandy, evening leisure & overnight stay",
          ],
        },
        {
          day: 5,
          title: "Kandy City Tour & Departure",
          description:
            "On your final day, explore the highlights of Kandy including the Temple of the Tooth Relic, Embekka Devalaya, Lankatilaka Viharaya, and Gadaladeniya Vihara before transfer to the airport.",
          activities: [
            "Visit Temple of the Tooth Relic (Sri Dalada Maligawa, UNESCO site)",
            "Explore Embekka Devalaya (famous for wood carvings)",
            "Visit Lankatilaka Viharaya",
            "Explore Gadaladeniya Vihara Temple",
            "Transfer to Bandaranaike International Airport for departure",
          ],
        },
      ],
      inclusions: [
        "Air-conditioned vehicle with professional driver",
        "English-speaking cultural tour guide",
        "Airport pickup and drop-off",
        "Minneriya National Park safari",
      ],
      exclusions: [
        "Travel insurance",
        "Personal expenses (shopping, laundry, etc.)",
        "Lunch meals (except mentioned)",
        "Tips for guide and driver",
        "Optional activities (Ayurvedic spa, adventure sports, etc.)",
        "Alcoholic beverages",
      ],
      whatWeOffer: [
        "24/7 customer support during the tour",
        "Friendly and knowledgeable cultural guides",
        "Comfortable & safe accommodation",
        "Private, air-conditioned transportation",
        "Flexible and customizable itinerary options",
        "Authentic Sri Lankan heritage experiences",
        "Emergency medical assistance support",
        "Satisfaction guarantee with professional service",
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
