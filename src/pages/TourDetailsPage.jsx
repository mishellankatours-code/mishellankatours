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
            "Meet and greet at Bandaranaike International Airport by MISHEL LANKA TOURS representative. Transfer to Sigiriya via Dambulla Golden Cave Temple, a UNESCO heritage site with 2000 years of history, murals, and 157 Buddha statues.",
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
            "Airport pickup by MISHEL LANKA TOURS representative",
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
            "Airport pickup by MISHEL LANKA TOURS representative",
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
            "Meet and greet at Bandaranaike International Airport by MISHEL LANKA TOURS representative. On the way to Sigiriya, visit the famous Dambulla Golden Cave Temple (UNESCO). Evening check-in at Sigiriya hotel.",
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

    5: {
      title: "12-Day Cultural Heritage Tour of Sri Lanka",
      subtitle:
        "Journey through time on this immersive 12-day cultural odyssey across Sri Lanka. Discover sacred temples, royal citadels, ancient cities, serene highlands, wildlife sanctuaries, and colonial towns—every step echoing centuries of history, faith, and tradition.",
      duration: "12 Days / 11 Nights",
      image: tour1,
      rating: 4.9,
      reviews: 156,
      groupSize: "2-20 people",
      difficulty: "Easy - Moderate",
      highlights: [
        "Colombo City exploration",
        "Gangaramaya & Kelaniya Temples",
        "Galle Fort & Madu River Safari",
        "Yala National Park safari",
        "Ella sightseeing – Ravana Falls, Nine Arch Bridge & Little Adam’s Peak",
        "Scenic train journey to Nuwara Eliya",
        "Lake Gregory & Sita Amman Temple visit",
        "Ramboda Falls & Tea Plantation experience",
        "Kandy cultural city tour & Temple of the Tooth",
        "Matale Spice Garden & Muthumariamman Temple",
        "Sigiriya Rock Fortress & Dambulla Cave Temple",
        "Polonnaruwa Ancient City & Minneriya Safari",
        "Anuradhapura Sacred City & Mihintale",
      ],
      itinerary: [
        {
          day: 1,
          title: "Arrival in Colombo",
          description:
            "Meet & greet at Bandaranaike International Airport by MISHEL LANKA TOURS representative. Transfer to Colombo for check-in, dinner, and overnight stay.",
          activities: [
            "Airport pickup & welcome",
            "Transfer to Colombo hotel",
            "Evening leisure in Colombo",
            "Dinner & overnight stay in Colombo",
          ],
        },
        {
          day: 2,
          title: "Colombo → Kelaniya & Gangaramaya Temples → Galle",
          description:
            "Visit Gangaramaya Temple on Beira Lake and Kelaniya Raja Maha Vihara, then head south to Galle. Stop at Balapitiya for Madu River safari and a visit to the Sea Turtle Hatchery.",
          activities: [
            "Explore Gangaramaya Temple",
            "Visit Kelaniya Raja Maha Vihara",
            "Boat ride on Madu River",
            "Visit Turtle Hatchery Farm",
            "Check-in & overnight stay in Galle",
          ],
        },
        {
          day: 3,
          title: "Galle → Yala National Park",
          description:
            "Morning visit to the UNESCO-listed Galle Fort before heading to Yala National Park for an adventurous safari.",
          activities: [
            "Explore Galle Fort",
            "Travel to Yala National Park",
            "Evening jeep safari at Yala",
            "Dinner & overnight stay near Yala",
          ],
        },
        {
          day: 4,
          title: "Yala → Ella",
          description:
            "Journey to Ella and explore its natural wonders including Ravana Falls, the Nine Arch Bridge, and Little Adam’s Peak.",
          activities: [
            "Visit Ravana Falls",
            "Walk across Nine Arch Bridge",
            "Hike Little Adam’s Peak",
            "Evening leisure & overnight stay in Ella",
          ],
        },
        {
          day: 5,
          title: "Ella → Train to Nuwara Eliya",
          description:
            "Experience one of the world’s most scenic train rides from Ella to Nanu Oya. Visit Lake Gregory, Nuwara Eliya Post Office, and the sacred Sita Amman Temple.",
          activities: [
            "Scenic train ride from Ella to Nuwara Eliya",
            "Boat ride & leisure at Lake Gregory",
            "Visit colonial Post Office",
            "Explore Sita Amman Temple",
            "Overnight stay in Nuwara Eliya",
          ],
        },
        {
          day: 6,
          title: "Nuwara Eliya → Ramboda → Kandy",
          description:
            "Visit Ramboda Falls and Damro Tea Plantation before reaching Kandy. End the day at Peradeniya Royal Botanical Gardens.",
          activities: [
            "Visit Ramboda Falls",
            "Tea tasting at Damro Tea Centre",
            "Tour Peradeniya Botanical Gardens",
            "Dinner & overnight stay in Kandy",
          ],
        },
        {
          day: 7,
          title: "Kandy City Tour",
          description:
            "Full-day tour in the cultural city of Kandy including the Temple of the Tooth Relic, Bahirawakanda Temple, city viewpoint, and local markets.",
          activities: [
            "Visit Temple of the Tooth Relic (UNESCO site)",
            "Explore Bahirawakanda Temple",
            "Kandy city viewpoint",
            "Shopping at Kandy market",
            "Overnight stay in Kandy",
          ],
        },
        {
          day: 8,
          title: "Kandy → Matale → Sigiriya",
          description:
            "Visit Matale Muthumariamman Temple and Spice Garden, then continue to Dambulla Cave Temple and climb Sigiriya Rock Fortress.",
          activities: [
            "Visit Muthumariamman Temple",
            "Tour Matale Spice Garden",
            "Explore Dambulla Cave Temple",
            "Climb Sigiriya Rock Fortress (UNESCO)",
            "Dinner & overnight stay in Sigiriya",
          ],
        },
        {
          day: 9,
          title: "Sigiriya → Polonnaruwa & Minneriya Safari",
          description:
            "Discover the ruins of Polonnaruwa ancient city followed by an exciting safari in Minneriya National Park. Experience Hiriwadunna village life before returning to Sigiriya.",
          activities: [
            "Explore Polonnaruwa ancient city",
            "Visit Royal Palace & Shiva Devale",
            "Evening Minneriya Safari",
            "Cultural experience at Hiriwadunna Village",
            "Overnight stay in Sigiriya",
          ],
        },
        {
          day: 10,
          title: "Sigiriya → Anuradhapura",
          description:
            "Travel to the UNESCO-listed sacred city of Anuradhapura, home to ancient stupas, lakes, and ruins.",
          activities: [
            "Tour Atamasthana (Eight Sacred Places)",
            "Visit Jaya Sri Maha Bodhi & Ruwanwelisaya",
            "Explore ancient ruins & monasteries",
            "Dinner & overnight stay in Anuradhapura",
          ],
        },
        {
          day: 11,
          title: "Anuradhapura City Tour & Mihintale",
          description:
            "Explore Mihintale, the birthplace of Buddhism in Sri Lanka, along with the historic monuments of Anuradhapura.",
          activities: [
            "Visit Mihintale Monastery",
            "Climb Mihintale Hill",
            "Explore Jetavanarama, Abhayagiriya, and Thuparamaya",
            "Return to hotel for overnight stay in Anuradhapura",
          ],
        },
        {
          day: 12,
          title: "Anuradhapura → Colombo Airport",
          description:
            "After breakfast, transfer to Bandaranaike International Airport for departure.",
          activities: [
            "Hotel breakfast & check-out",
            "Drive to Colombo Airport",
            "End of 12-Day Cultural Heritage Tour",
          ],
        },
      ],
      inclusions: [
        "Air-conditioned vehicle with professional driver",
        "English-speaking cultural tour guide",
        "Airport pickup and drop-off",
      ],
      exclusions: [
        "Travel insurance",
        "Personal expenses (shopping, laundry, etc.)",
        "Lunch meals (except mentioned)",
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
    6: {
      title: "14-Day Sightseeing Adventure Across Sri Lanka",
      subtitle:
        "Experience Sri Lanka like never before—historic cities, misty highlands, ancient temples, golden beaches, thrilling safaris, and authentic cultural encounters. This all-in-one sightseeing journey is perfect for travelers who crave discovery and diversity.",
      duration: "14 Days / 13 Nights",
      image: tour1,
      rating: 4.9,
      reviews: 132,
      groupSize: "2-20 people",
      difficulty: "Easy - Moderate",
      highlights: [
        "Relax in Negombo fishing village & Dutch heritage sites",
        "Explore sacred Anuradhapura & Mihintale",
        "Climb Sigiriya Rock Fortress (UNESCO)",
        "Discover ancient ruins of Polonnaruwa",
        "Wildlife safari at Minneriya & Yala National Park",
        "Visit Dambulla Golden Cave Temple (UNESCO)",
        "Spice Garden & Matale Muthumariamman Temple",
        "Kandy City Tour & Temple of the Tooth Relic",
        "Witness Pinnawala Elephant Orphanage",
        "Climb Adam’s Peak pilgrimage trail",
        "Scenic train ride from Nuwara Eliya to Ella",
        "Nine Arch Bridge, Little Adam’s Peak & Ravana Falls",
        "Beach bliss in Mirissa with whale watching",
        "Galle Fort, Turtle Hatchery & Madu River safari in Bentota",
      ],
      itinerary: [
        {
          day: 1,
          title: "Arrival in Sri Lanka – Airport → Negombo",
          description:
            "Meet and greet at Bandaranaike International Airport. Transfer to Negombo seaside hotel for rest and relaxation.",
          activities: [
            "Airport pickup & welcome",
            "Drive to Negombo",
            "Check-in at hotel & relax by the beach",
            "Dinner & overnight stay in Negombo",
          ],
        },
        {
          day: 2,
          title: "Negombo Sightseeing Tour",
          description:
            "Discover Negombo’s heritage and coastal charm. Visit fishing villages, Dutch-era monuments, and sandy beaches.",
          activities: [
            "Explore local fishing village",
            "Visit Dutch Fort & Dutch Clock Tower",
            "Relax at Negombo Beach Park",
            "Optional water sports activities",
            "Overnight stay in Negombo",
          ],
        },
        {
          day: 3,
          title: "Negombo → Anuradhapura via Mihintale",
          description:
            "Travel to the sacred city of Anuradhapura, visiting Mihintale – the cradle of Buddhism – along the way.",
          activities: [
            "Visit Mihintale Buddhist site",
            "Explore Anuradhapura’s Atamasthana (Eight Sacred Places)",
            "See Jaya Sri Maha Bodhi, Ruwanwelisaya & Thuparamaya",
            "Hotel check-in & overnight stay in Sigiriya",
          ],
        },
        {
          day: 4,
          title: "Sigiriya → Polonnaruwa & Minneriya Safari",
          description:
            "Discover Polonnaruwa’s ancient ruins and enjoy a thrilling safari at Minneriya National Park.",
          activities: [
            "Visit Polonnaruwa ancient capital",
            "Explore Royal Palace & Shiva Devale",
            "Evening jeep safari at Minneriya National Park",
            "Return to Sigiriya for overnight stay",
          ],
        },
        {
          day: 5,
          title: "Sigiriya → Dambulla → Matale → Kandy",
          description:
            "Climb Sigiriya Rock Fortress, explore Dambulla Cave Temple, spice garden, and Muthumariamman Temple before heading to Kandy.",
          activities: [
            "Climb Sigiriya Rock Fortress",
            "Visit Dambulla Golden Cave Temple (UNESCO)",
            "Spice Garden experience in Matale",
            "Muthumariamman Temple visit",
            "Evening arrival in Kandy for overnight stay",
          ],
        },
        {
          day: 6,
          title: "Kandy City Tour",
          description:
            "A full day exploring the cultural capital of Sri Lanka, with temples, viewpoints, and cultural performances.",
          activities: [
            "Temple of the Tooth Relic (UNESCO)",
            "Walk around Kandy Lake",
            "Visit Bahirawakanda Buddha Statue",
            "Gem Museum & Tea Factory visit",
            "Kandy Cultural Dance Show",
            "Overnight stay in Kandy",
          ],
        },
        {
          day: 7,
          title: "Kandy → Pinnawala → Gadaladeniya & Embekka → Kandy",
          description:
            "Witness elephants at Pinnawala and visit historical temples near Kandy.",
          activities: [
            "Pinnawala Elephant Orphanage",
            "Visit Embekka Devalaya with wood carvings",
            "Gadaladeniya Temple",
            "Return to Kandy for overnight stay",
          ],
        },
        {
          day: 8,
          title: "Kandy → Tea Plantations → Adam’s Peak",
          description:
            "Travel through tea estates to reach Adam’s Peak for a pilgrimage climb.",
          activities: [
            "Visit Labookellie Tea Estate & factory",
            "Drive through scenic tea landscapes",
            "Evening climb Adam’s Peak for sunrise pilgrimage",
            "Overnight stay near Adam’s Peak",
          ],
        },
        {
          day: 9,
          title: "Adam’s Peak → Nuwara Eliya",
          description:
            "Descend from Adam’s Peak and travel to the ‘Little England’ of Sri Lanka.",
          activities: [
            "Stop at St. Clair’s & Devon Falls",
            "City tour of Nuwara Eliya",
            "Check-in & relax at hotel",
            "Overnight stay in Nuwara Eliya",
          ],
        },
        {
          day: 10,
          title: "Nuwara Eliya → Train Journey → Ella",
          description:
            "Experience the most scenic train journey in Sri Lanka from Nanu Oya to Ella.",
          activities: [
            "Visit Gregory Lake & colonial Post Office",
            "Board train from Nanu Oya to Ella",
            "Enjoy breathtaking mountain & tea estate views",
            "Pick up at Ella station & overnight stay in Ella",
          ],
        },
        {
          day: 11,
          title:
            "Ella → Little Adam’s Peak → Nine Arch Bridge → Ravana Falls → Yala",
          description:
            "Morning hikes and sightseeing in Ella followed by safari adventure in Yala National Park.",
          activities: [
            "Hike Little Adam’s Peak",
            "Visit Nine Arch Bridge",
            "Explore Ravana Falls",
            "Evening safari at Yala National Park",
            "Overnight stay in Yala",
          ],
        },
        {
          day: 12,
          title: "Yala → Mirissa",
          description:
            "Travel to the southern coast and relax at the beach in Mirissa.",
          activities: [
            "Morning drive to Mirissa",
            "Visit Coconut Tree Hill viewpoint",
            "Relax on Mirissa Beach",
            "Overnight stay in Mirissa",
          ],
        },
        {
          day: 13,
          title: "Mirissa → Whale Watching → Galle → Bentota",
          description:
            "Enjoy whale watching in Mirissa, explore Galle Fort, and relax in Bentota.",
          activities: [
            "Whale watching cruise in Mirissa",
            "Explore Galle Fort (UNESCO)",
            "Visit Turtle Hatchery in Galle",
            "Madu River boat safari in Balapitiya",
            "Overnight stay in Bentota",
          ],
        },
        {
          day: 14,
          title: "Departure – Bentota → Colombo Airport",
          description:
            "Final day of your 14-day journey. Transfer to Colombo Airport for departure.",
          activities: [
            "Breakfast at hotel",
            "Leisure time at Bentota beach",
            "Airport drop-off in Colombo",
            "End of tour",
          ],
        },
      ],
      inclusions: [
        "Airport pickup and drop-off",
        "Air-conditioned private vehicle with driver",
        "English-speaking cultural tour guide",
        "Scenic train ride (subject to availability)",
        "Wildlife safaris at Minneriya & Yala National Parks",
        "Whale watching cruise in Mirissa",
      ],
      exclusions: [
        "International flight tickets",
        "Visa fees",
        "Travel insurance",
        "Personal expenses (shopping, laundry, etc.)",
        "Lunch meals (unless specified)",
        "Tips for guide and driver",
        "Optional activities (spa treatments, adventure sports, etc.)",
        "Alcoholic beverages",
      ],
      whatWeOffer: [
        "24/7 customer support during the tour",
        "Friendly and knowledgeable cultural guides",
        "Comfortable & safe accommodation",
        "Private, air-conditioned transportation",
        "Flexible and customizable itinerary options",
        "Authentic Sri Lankan heritage & nature experiences",
        "Emergency medical assistance support",
        "Satisfaction guarantee with professional service",
      ],
    },
    7: {
      title: "12 Days Sri Lanka Sightseeing Tour",
      subtitle:
        "✨ Immerse yourself in Sri Lanka’s stunning natural beauty, ancient wonders, and vibrant culture on this expertly guided 12-day journey.",
      duration: "12 Days / 11 Nights",
      image: tour1,
      rating: 4.9,
      reviews: 132,
      groupSize: "2-20 people",
      difficulty: "Easy - Moderate",
      highlights: [
        "Relax at Negombo beach town",
        "Visit Mihintale – birthplace of Buddhism in Sri Lanka",
        "Explore the sacred city of Anuradhapura (UNESCO)",
        "Discover the ruins of Polonnaruwa (UNESCO)",
        "Jeep Safari at Minneriya National Park",
        "Climb the legendary Sigiriya Rock Fortress (UNESCO)",
        "Visit Dambulla Golden Cave Temple (UNESCO)",
        "Spice Garden & Hindu Temple at Matale",
        "Kandy City Tour & Temple of the Tooth Relic",
        "Tea plantations & waterfalls in Nuwara Eliya",
        "Hike at Horton Plains & World’s End",
        "Ella sightseeing – Nine Arch Bridge & Little Adam’s Peak",
        "Yala National Park wildlife experience",
        "Relax at Mirissa & Whale Watching Tour",
        "Explore Galle Fort (UNESCO) & Turtle Hatchery",
        "Madu River Boat Safari in Balapitiya",
      ],
      itinerary: [
        {
          day: 1,
          title: "Arrival in Sri Lanka – Transfer to Negombo",
          description:
            "Meet & greet at Bandaranaike International Airport by our MISHEL LANKA TOURS representative. Transfer to Negombo beach town and relax for the evening.",
          activities: [
            "Airport pickup & welcome",
            "Transfer to Negombo hotel",
            "Relax by the beach",
            "Dinner & overnight stay in Negombo",
          ],
        },
        {
          day: 2,
          title: "Negombo → Mihintale & Anuradhapura",
          description:
            "Visit Mihintale – the cradle of Buddhism in Sri Lanka. Explore the sacred city of Anuradhapura with its ancient stupas and Eight Sacred Places.",
          activities: [
            "Visit Mihintale (Mahinda’s Hill)",
            "Explore Anuradhapura Sacred City",
            "See Jaya Sri Maha Bodhi, Ruwanwelisaya & Thuparamaya",
            "Overnight stay in Anuradhapura",
          ],
        },
        {
          day: 3,
          title: "Anuradhapura → Polonnaruwa & Minneriya Safari → Sigiriya",
          description:
            "Tour Polonnaruwa, Sri Lanka’s second ancient capital. Later, enjoy a thrilling safari at Minneriya National Park to spot wild elephants.",
          activities: [
            "Explore Polonnaruwa archaeological city",
            "Visit Royal Palace of King Parakramabahu",
            "Shiva Devale & Brahmanic monuments",
            "Evening Jeep Safari at Minneriya National Park",
            "Overnight stay in Sigiriya",
          ],
        },
        {
          day: 4,
          title: "Sigiriya Rock Fortress → Dambulla → Matale → Kandy",
          description:
            "Climb the world-famous Sigiriya Rock Fortress. En route to Kandy, visit the Dambulla Golden Temple, Spice Garden, and Hindu Temple in Matale.",
          activities: [
            "Climb Sigiriya Rock Fortress",
            "Visit Dambulla Cave Temple (UNESCO)",
            "Matale Spice Garden & Muthumariamman Temple",
            "Overnight stay in Kandy",
          ],
        },
        {
          day: 5,
          title: "Kandy City Tour",
          description:
            "Discover Kandy, the cultural capital of Sri Lanka. Visit the Temple of the Tooth Relic, Bahirawakanda Buddha statue, cultural show, and local markets.",
          activities: [
            "Temple of the Tooth Relic (Sri Dalada Maligawa)",
            "Bahirawakanda Buddha Statue",
            "Kandy viewpoint & local market",
            "Kandy Cultural Dance Show",
            "Overnight stay in Kandy",
          ],
        },
        {
          day: 6,
          title: "Kandy → Nuwara Eliya",
          description:
            "Journey through tea country with stops at waterfalls and tea plantations before arriving in Nuwara Eliya.",
          activities: [
            "Visit Ramboda Falls",
            "Tea plantation & factory tour",
            "Explore Gregory Lake & Nuwara Eliya town",
            "Overnight stay in Nuwara Eliya",
          ],
        },
        {
          day: 7,
          title: "Nuwara Eliya → Horton Plains → Ella",
          description:
            "Morning visit to Horton Plains National Park for a hike to World’s End. Later, transfer to Ella.",
          activities: [
            "Horton Plains hike & World’s End viewpoint",
            "Scenic drive through hill country",
            "Check-in & overnight stay in Ella",
          ],
        },
        {
          day: 8,
          title: "Ella Sightseeing",
          description:
            "Explore the charming hill town of Ella. Visit Nine Arch Bridge, Little Adam’s Peak, and Ravana Falls.",
          activities: [
            "Visit Nine Arch Bridge",
            "Climb Little Adam’s Peak",
            "See Ravana Falls",
            "Overnight stay in Ella",
          ],
        },
        {
          day: 9,
          title: "Ella → Yala National Park → Tissamaharama",
          description:
            "Transfer to Yala region. Evening safari at Yala National Park, famous for leopards, elephants, and birdlife.",
          activities: [
            "Travel to Yala",
            "Evening Jeep Safari at Yala National Park",
            "Overnight stay in Tissamaharama/Yala area",
          ],
        },
        {
          day: 10,
          title: "Yala → Mirissa",
          description:
            "After breakfast, transfer to Mirissa, one of Sri Lanka’s most beautiful beach towns.",
          activities: [
            "Scenic drive to Mirissa",
            "Relax on the beach",
            "Visit Coconut Tree Hill",
            "Overnight stay in Mirissa",
          ],
        },
        {
          day: 11,
          title: "Whale Watching & Transfer to Bentota via Galle",
          description:
            "Early morning whale watching in Mirissa. En route to Bentota, stop at Galle Fort, Turtle Hatchery, and enjoy a Madu River boat safari.",
          activities: [
            "Morning whale watching tour",
            "Explore Galle Fort (UNESCO)",
            "Visit Turtle Hatchery",
            "Boat safari at Madu River",
            "Overnight stay in Bentota",
          ],
        },
        {
          day: 12,
          title: "Departure from Colombo",
          description:
            "Transfer to Bandaranaike International Airport for your departure flight with unforgettable memories of Sri Lanka.",
          activities: [
            "Breakfast at hotel",
            "Drive to Colombo Airport",
            "End of 12-day sightseeing tour",
          ],
        },
      ],
      inclusions: [
        "Airport pickup & drop-off",
        "Air-conditioned private vehicle with driver",
        "English-speaking cultural tour guide",
      ],
      exclusions: [
        "Tips for driver/guide",
        "Optional activities (adventure sports, spa, etc.)",
        "Alcoholic beverages",
      ],
      whatWeOffer: [
        "24/7 customer support during the tour",
        "Professional, friendly cultural guides",
        "Safe & comfortable accommodation",
        "Private air-conditioned transportation",
        "Customizable itinerary",
        "Authentic Sri Lankan cultural & wildlife experiences",
        "Emergency medical assistance",
        "Satisfaction guarantee with expert service",
      ],
    },
    8: {
      title: "One Week Sri Lanka Holiday Tour Package",
      subtitle:
        "Discover the magic of Sri Lanka in just one unforgettable week. From sacred temples and misty hills to tropical beaches and colonial cities—this curated tour has it all.",
      duration: "07 Days / 06 Nights",
      image: tour1,
      rating: 4.9,
      reviews: 124,
      groupSize: "2-20 people",
      difficulty: "Easy - Moderate",
      highlights: [
        "Visit Pinnawala Elephant Orphanage",
        "Explore the Temple of the Tooth Relic in Kandy",
        "Scenic drive through Sri Lanka’s tea country",
        "Discover colonial charm of Nuwara Eliya",
        "Enjoy waterfalls: Ramboda, Devon & St. Clair’s",
        "White-water rafting at Kitulgala",
        "Relax on Bentota’s golden beaches",
        "Madu River safari & Turtle Hatchery visit",
        "Explore UNESCO Galle Fort",
        "Colombo city tour with Lotus Tower & Gangaramaya Temple",
      ],
      itinerary: [
        {
          day: 1,
          title: "Arrival in Sri Lanka & Transfer to Kandy",
          description:
            "Welcome at Bandaranaike International Airport. Visit Pinnawala Elephant Orphanage & Spice Garden en route to Kandy. Evening hotel check-in.",
          activities: [
            "Airport pickup & welcome",
            "Visit Pinnawala Elephant Orphanage",
            "Explore Spice & Herbal Garden",
            "Hotel check-in & overnight stay in Kandy",
          ],
        },
        {
          day: 2,
          title: "Kandy City Tour",
          description:
            "Explore Kandy’s cultural gems including Temple of the Tooth, Kandy Lake, Bahirawakanda Temple & Kandy Market. Evening cultural dance show.",
          activities: [
            "Temple of the Tooth Relic (Sri Dalada Maligawa)",
            "Walk around Kandy Lake",
            "Kandy View Point & Bahirawakanda Buddha Statue",
            "National Gems & Gemological Museum",
            "Shopping at Kandy Market",
            "Traditional Kandyan dance show",
            "Overnight stay in Kandy",
          ],
        },
        {
          day: 3,
          title: "Kandy → Nuwara Eliya (Scenic Drive)",
          description:
            "Drive through misty hills to Nuwara Eliya. Visit Ramboda Falls, Sri Bhaktha Hanuman Temple, and a tea plantation & factory.",
          activities: [
            "Scenic drive to Nuwara Eliya",
            "Visit Ramboda Falls & viewpoint",
            "Sri Bhaktha Hanuman Temple",
            "Tea factory & plantation tour with tasting",
            "Overnight stay in Nuwara Eliya",
          ],
        },
        {
          day: 4,
          title: "Nuwara Eliya City Tour",
          description:
            "Explore colonial-era Nuwara Eliya. Visit Gregory Lake, Seetha Amman Temple, Hakgala Botanical Garden & Victoria Park.",
          activities: [
            "Visit Nuwara Eliya Post Office",
            "Victoria Park stroll",
            "Gregory Lake (boating optional)",
            "Seetha Amman Temple (Ramayana site)",
            "Hakgala Botanical Garden",
            "Overnight stay in Nuwara Eliya",
          ],
        },
        {
          day: 5,
          title: "Nuwara Eliya → Kitulgala → Bentota",
          description:
            "Travel from hill country to the coast. Stop at Devon & St. Clair’s Falls. Optional water rafting at Kitulgala. Arrive in Bentota for beachside stay.",
          activities: [
            "Visit Devon Falls",
            "Visit St. Clair’s Waterfall",
            "White-water rafting at Kitulgala (optional)",
            "Overnight stay in Bentota beach hotel",
          ],
        },
        {
          day: 6,
          title: "Bentota & Galle Excursion",
          description:
            "Enjoy Madu River safari & Turtle Hatchery visit. Afternoon trip to Galle Fort, a UNESCO World Heritage Site. Relax at Bentota Beach.",
          activities: [
            "Madu River boat safari",
            "Visit Turtle Hatchery Farm",
            "Explore Galle Fort (UNESCO site)",
            "Beach leisure & optional water sports",
            "Overnight stay in Bentota",
          ],
        },
        {
          day: 7,
          title: "Colombo City Tour & Departure",
          description:
            "Head to Colombo. City tour covering Lotus Tower, Independence Square, Gangaramaya Temple & Galle Face Green before airport transfer.",
          activities: [
            "Visit Colombo Lotus Tower",
            "Independence Square & Park",
            "Galle Face Green walk & street food",
            "Gangaramaya Temple & Beira Lake",
            "Dutch Hospital Shopping Precinct",
            "Airport transfer / departure",
          ],
        },
      ],
      inclusions: [
        "Private air-conditioned vehicle with driver",
        "English-speaking tour guide",
        "Airport pickup & drop-off",
      ],
      exclusions: [
        "Personal expenses (shopping, laundry, etc.)",
        "Tips for guide and driver",
        "Alcoholic beverages",
      ],
      whatWeOffer: [
        "24/7 customer support during the tour",
        "Professional & friendly cultural guides",
        "Comfortable & safe accommodations",
        "Private transfers & flexible itinerary",
        "Authentic Sri Lankan cultural experiences",
        "Emergency medical assistance support",
        "Satisfaction guarantee with personalized service",
      ],
    },
    9: {
      title: "Sri Lanka 18-Day Heritage & Coastal Odyssey Tour",
      subtitle:
        "From ancient kingdoms and misty highlands to golden beaches and wildlife safaris—this 18-day journey is your immersive gateway to Sri Lanka’s most iconic and soul-stirring experiences.",
      duration: "18 Days / 17 Nights",
      image: tour1,
      rating: 4.9,
      reviews: 132,
      groupSize: "2-20 people",
      difficulty: "Easy - Moderate",
      highlights: [
        "Relax on golden beaches in Unawatuna & Trincomalee",
        "Galle Fort & colonial heritage exploration",
        "Witness stilt fishermen & southern coast wonders",
        "Full-day Yala National Park jeep safari",
        "Scenic waterfalls & Nine Arch Bridge in Ella",
        "Tea country views from Lipton’s Seat",
        "Temple of the Tooth Relic in Kandy",
        "Dambulla Cave Temple & Sigiriya Rock Fortress",
        "Whale watching & snorkeling at Pigeon Island",
        "Ancient cities of Anuradhapura & Polonnaruwa",
      ],
      itinerary: [
        {
          day: 1,
          title: "Arrival in Colombo – Transfer to Unawatuna",
          description:
            "Warm welcome at Bandaranaike International Airport, followed by a scenic drive south to Unawatuna. Evening beach walk and seafood dinner by the Indian Ocean.",
          activities: [
            "Airport pickup & transfer to Unawatuna",
            "Check-in at beachfront hotel",
            "Relaxation & evening beach stroll",
          ],
        },
        {
          day: 2,
          title: "Unawatuna – Beach Leisure & Exploration",
          description:
            "Enjoy leisure at Unawatuna Beach or Jungle Beach. Optional snorkeling, yoga, or paddleboarding.",
          activities: [
            "Relax on Unawatuna Beach",
            "Optional snorkeling or yoga session",
            "Sunset dinner at a beach café",
          ],
        },
        {
          day: 3,
          title: "Unawatuna – Southern Excursions",
          description:
            "Visit turtle hatchery, Weligama snake farm, and Galle Fort (UNESCO).",
          activities: [
            "Sea turtle conservation visit",
            "Snake farm experience",
            "Tour Galle Fort & lighthouse",
          ],
        },
        {
          day: 4,
          title: "Unawatuna → Tissamaharama",
          description:
            "Travel via southern coast: stilt fishermen, Dondra Lighthouse, Hummanaya Blow Hole, Wewurukannala Temple & Lake Tissa Wewa.",
          activities: [
            "See stilt fishermen at Ahangama",
            "Visit Dondra Lighthouse & Blow Hole",
            "Explore Wewurukannala Buddha Temple",
            "Birds park in Hambantota",
          ],
        },
        {
          day: 5,
          title: "Yala National Park Safari",
          description:
            "Full-day jeep safari in Yala, spotting leopards, elephants, sloth bears & exotic birds.",
          activities: [
            "Morning departure for safari",
            "Wildlife viewing & photography",
            "Packed lunch amidst nature",
          ],
        },
        {
          day: 6,
          title: "Tissamaharama → Ella",
          description:
            "Drive to Ella via Diyaluma Falls & Ravana Falls. Evening walk to Nine Arch Bridge.",
          activities: [
            "Visit Diyaluma Falls",
            "Stop at Ravana Falls",
            "Walk across Nine Arch Bridge",
          ],
        },
        {
          day: 7,
          title: "Ella – Tea & Adventure",
          description:
            "Morning visit to Lipton’s Seat. Optional zipline, ATV, or plantation walk.",
          activities: [
            "Lipton’s Seat viewpoint",
            "Tea plantation walk",
            "Flying Ravana Zipline adventure",
          ],
        },
        {
          day: 8,
          title: "Ella → Nuwara Eliya",
          description:
            "Drive to Nuwara Eliya, the ‘Little England’ of Sri Lanka, surrounded by tea estates.",
          activities: [
            "Scenic hill country drive",
            "Explore Gregory Lake & town",
            "Overnight in Nuwara Eliya",
          ],
        },
        {
          day: 9,
          title: "Nuwara Eliya → Kandy",
          description:
            "Visit Peradeniya Botanical Gardens, then Temple of the Tooth in Kandy.",
          activities: [
            "Botanical garden tour",
            "Temple of the Tooth Relic",
            "Evening Kandy Lake walk",
          ],
        },
        {
          day: 10,
          title: "Kandy – Elephant Orphanage & Cultural Show",
          description:
            "Visit Pinnawala Elephant Orphanage and evening Kandyan cultural dance show.",
          activities: [
            "Elephant bathing & feeding",
            "Optional elephant safari",
            "Kandyan dance performance",
          ],
        },
        {
          day: 11,
          title: "Kandy → Dambulla",
          description:
            "Spice garden in Matale, Dambulla Cave Temple & Sigiriya Rock Fortress climb.",
          activities: [
            "Matale Spice Garden tour",
            "Visit Dambulla Cave Temple",
            "Climb Sigiriya Fortress",
          ],
        },
        {
          day: 12,
          title: "Dambulla → Trincomalee",
          description:
            "Drive to Trincomalee with optional stop in Polonnaruwa. Evening at Uppuveli Beach.",
          activities: [
            "Polonnaruwa ancient city (optional)",
            "Visit Thirukoneswaram Temple",
            "Relax at Uppuveli Beach",
          ],
        },
        {
          day: 13,
          title: "Trincomalee – Pigeon Island",
          description:
            "Optional snorkeling trip to Pigeon Island National Park.",
          activities: [
            "Boat ride to Pigeon Island",
            "Snorkeling & marine life viewing",
            "Relax at Nilaveli Beach",
          ],
        },
        {
          day: 14,
          title: "Trincomalee – Whale Watching",
          description:
            "Optional whale & dolphin watching trip or leisure day at beach.",
          activities: ["Whale watching cruise", "Beach leisure at Uppuveli"],
        },
        {
          day: 15,
          title: "Trincomalee Exploration",
          description:
            "Fish market, Fort Frederick & Hindu temple visits with beach leisure.",
          activities: [
            "Visit fish market & Fort Frederick",
            "Explore Thirukoneswaram Temple",
            "Relax at Marble or Nilaveli Beach",
          ],
        },
        {
          day: 16,
          title: "Trincomalee Free Day",
          description:
            "Leisure day with optional snorkeling, fishing tour, or jet ski.",
          activities: [
            "Beach relaxation",
            "Optional water sports",
            "Sunset beach walk",
          ],
        },
        {
          day: 17,
          title: "Trincomalee → Anuradhapura → Negombo",
          description:
            "Tour ancient Anuradhapura before continuing to Negombo.",
          activities: [
            "Visit Sri Maha Bodhi Tree",
            "Explore Ruwanwelisaya & Jetavanaramaya",
            "Transfer to Negombo",
          ],
        },
        {
          day: 18,
          title: "Negombo – Departure",
          description:
            "Relax in Negombo before transfer to Bandaranaike International Airport for departure.",
          activities: [
            "Breakfast & Negombo Beach stroll",
            "Visit Dutch Fort (optional)",
            "Airport transfer",
          ],
        },
      ],
      inclusions: [
        "Airport pickup & drop-off",
        "Private air-conditioned transport with driver",
        "English-speaking cultural guide",
      ],
      exclusions: [
        "Personal expenses (shopping, laundry, etc.)",
        "Lunch & meals not mentioned",
        "Tips for guide & driver",
        "Optional activities (spa, yoga, water sports)",
        "Alcoholic beverages",
      ],
      whatWeOffer: [
        "24/7 customer support during the tour",
        "Experienced and friendly local guides",
        "Handpicked hotels & resorts",
        "Private, comfortable transportation",
        "Customizable itinerary options",
        "Authentic cultural, wildlife & coastal experiences",
        "Emergency medical assistance support",
        "Satisfaction guaranteed with professional service",
      ],
    },
    10: {
      title: "13 Days Sri Lanka Surf & Heritage Tour",
      subtitle:
        "From the ancient wonders of Sigiriya to the surf breaks of Arugam Bay and the misty peaks of Ella, this 13-day journey blends heritage, wildlife, and world-class waves into one unforgettable Sri Lankan escape.",
      duration: "13 Days / 12 Nights",
      image: tour1,
      rating: 4.9,
      reviews: 132,
      groupSize: "2-12 people",
      difficulty: "Easy - Moderate",
      highlights: [
        "Climb the UNESCO-listed Sigiriya Rock Fortress",
        "Wildlife Safari at Minneriya National Park",
        "Sunset hike to Pidurangala Rock",
        "Explore Dambulla Golden Cave Temple",
        "Relax at Pasikudah & Kalkudah Beaches",
        "Surf world-class waves at Arugam Bay",
        "Discover Muhudu Maha Viharaya & Pottuvil Lagoon",
        "Scenic hike to Little Adam’s Peak & Ella Rock",
        "Visit Ravana Falls & Nine Arch Bridge in Ella",
        "Surf & chill at Ahangama, Midigama & Kabalana beaches",
        "Experience Sri Lanka’s vibrant culture and rural village life",
      ],
      itinerary: [
        {
          day: 1,
          title: "Arrival in Colombo – Transfer to Sigiriya",
          description:
            "Meet & greet at Bandaranaike International Airport by MISHEL LANKA TOURS representative. Drive to Sigiriya, with scenic countryside views. Evening check-in at hotel.",
          activities: [
            "Airport pickup & welcome",
            "Drive to Sigiriya (approx. 4 hrs)",
            "Hotel check-in & traditional dinner",
            "Overnight stay in Sigiriya",
          ],
        },
        {
          day: 2,
          title: "Minneriya Safari & Pidurangala Rock",
          description:
            "Morning jeep safari at Minneriya National Park to see elephants and wildlife. Evening hike up Pidurangala Rock for panoramic sunset views of Sigiriya.",
          activities: [
            "Minneriya National Park jeep safari",
            "Wild elephant & bird watching",
            "Evening hike to Pidurangala Rock",
            "Overnight stay in Sigiriya",
          ],
        },
        {
          day: 3,
          title: "Sigiriya Rock Fortress, Village Tour & Dambulla Caves",
          description:
            "Climb Sigiriya Rock Fortress (UNESCO), visit Sigiriya Museum, and enjoy a cultural village tour with traditional lunch. Evening visit to Dambulla Cave Temple.",
          activities: [
            "Climb Sigiriya Lion Rock",
            "Explore Sigiriya Museum",
            "Sigiriya Village Tour & local lunch",
            "Visit Dambulla Golden Cave Temple",
            "Overnight stay in Sigiriya",
          ],
        },
        {
          day: 4,
          title: "Sigiriya → Pasikudah & Kalkudah Beaches",
          description:
            "Drive to the east coast beaches of Pasikudah & Kalkudah for relaxation, snorkeling, and water sports.",
          activities: [
            "Drive to Pasikudah (approx. 3.5 hrs)",
            "Beach time & swimming",
            "Snorkeling, jet-ski, kayaking (optional)",
            "Overnight stay at beach hotel in Pasikudah",
          ],
        },
        {
          day: 5,
          title: "Pasikudah → Arugam Bay",
          description:
            "Travel south to Arugam Bay, Sri Lanka’s surf capital, famous for world-class surf breaks and golden beaches.",
          activities: [
            "Scenic drive along east coast (2.5 hrs)",
            "Check-in at Arugam Bay accommodation",
            "Evening surf session / beach walk",
            "Overnight stay in Arugam Bay",
          ],
        },
        {
          day: 6,
          title: "Arugam Bay – Surf & Beach Chill",
          description:
            "Surf at Main Point or Whiskey Point, explore Pottuvil Lagoon or simply relax on the beach.",
          activities: [
            "Morning surf session",
            "Snorkeling / kayaking (optional)",
            "Pottuvil Lagoon exploration",
            "Evening at beach bars / reggae vibes",
          ],
        },
        {
          day: 7,
          title: "Arugam Bay – Free Beach Day",
          description:
            "Another full day of surfing, yoga, or exploring nearby attractions like Muhudu Maha Viharaya.",
          activities: [
            "Surfing lessons (optional)",
            "Visit Muhudu Maha Viharaya temple",
            "Relax at Elephant Rock beach",
            "Overnight stay in Arugam Bay",
          ],
        },
        {
          day: 8,
          title: "Arugam Bay – Surf & Local Exploration",
          description:
            "Spend the day catching waves or discovering hidden beaches. Enjoy Arugam Bay’s nightlife.",
          activities: [
            "Morning surf session",
            "Free time to explore",
            "Evening bonfire / beach party",
          ],
        },
        {
          day: 9,
          title: "Arugam Bay – Relaxation & Adventure",
          description:
            "Freedom to surf, relax in hammocks, or join a yoga class by the beach.",
          activities: [
            "Optional snorkeling or kite-surfing",
            "Relaxation day",
            "Local seafood dinner",
          ],
        },
        {
          day: 10,
          title: "Arugam Bay – Last Day of Surf Bliss",
          description:
            "Final day to enjoy the surf culture before heading inland tomorrow.",
          activities: [
            "Surf at Main Point / Peanut Farm",
            "Beach chill & sunset",
            "Overnight stay in Arugam Bay",
          ],
        },
        {
          day: 11,
          title: "Arugam Bay → Ella (Hill Country)",
          description:
            "Travel inland to Ella, visiting Ravana Falls, hiking Little Adam’s Peak, and seeing the famous Nine Arch Bridge.",
          activities: [
            "Drive to Ella (approx. 3 hrs)",
            "Visit Ravana Falls",
            "Hike Little Adam’s Peak",
            "Visit Nine Arch Bridge",
            "Optional adventure sports / Ella Rock hike",
            "Overnight stay in Ella",
          ],
        },
        {
          day: 12,
          title: "Ella → Ahangama (Surf Town, South Coast)",
          description:
            "Travel to the laid-back surf village of Ahangama. Enjoy surfing, beach relaxation, and cultural encounters.",
          activities: [
            "Drive to Ahangama (approx. 3.5 hrs)",
            "Surfing at Kabalana / Midigama",
            "Visit stilt fishermen",
            "Sunset yoga or beach café",
            "Overnight stay in Ahangama",
          ],
        },
        {
          day: 13,
          title: "Ahangama → Departure from Colombo",
          description:
            "Final day in Sri Lanka. Scenic drive along the southern coast to Colombo International Airport for departure.",
          activities: [
            "Beach sunrise walk",
            "Drive to Colombo (approx. 3 hrs)",
            "Airport drop-off & farewell",
          ],
        },
      ],
      inclusions: [
        "Airport pickup and drop-off",
        "Private air-conditioned vehicle with driver",
        "Professional English-speaking tour guide",
      ],
      exclusions: [
        "Optional adventure activities (surf lessons, yoga, etc.)",
        "Alcoholic beverages",
        "Tips for guide & driver",
      ],
      whatWeOffer: [
        "24/7 customer support during the tour",
        "Friendly and knowledgeable surf & heritage guides",
        "Handpicked beach and mountain accommodations",
        "Private and flexible itinerary options",
        "Authentic Sri Lankan cultural and adventure experiences",
        "Emergency assistance support",
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
                {/* <button className="w-full border-2 border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white font-semibold py-4 px-6 rounded-2xl transition-all duration-300">
                  Get Quote
                </button> */}
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
