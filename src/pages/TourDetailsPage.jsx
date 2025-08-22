import React, { useRef, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import {
  Clock,
  MapPin,
  Users,
  Star,
  Mountain,
  Check,
  X,
  Calendar,
  Phone,
  Mail,
  ArrowLeft,
  Send,
  CheckCircle,
} from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import Footer from "../components/Footer";

import { tourDetails } from "../Data/srttourData";

const ADMIN_WHATSAPP = "94762044065"; // without '+' for wa.me
const ADMIN_EMAIL = "mishellankatours@gmail.com";
const tourTypes = ["Private", "Group", "Honeymoon", "Adventure", "Cultural", "Wildlife"];

const fadeUp = {
  hidden: { opacity: 0, y: 16 },
  show: { opacity: 1, y: 0, transition: { duration: 0.35 } },
};

const stagger = {
  hidden: {},
  show: { transition: { staggerChildren: 0.08 } },
};

const TourDetailsPage = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const formRef = useRef(null);

  const tour = tourDetails[id];

  if (!tour) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-gray-800 mb-4">Tour Not Found</h1>
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

  // ----- Form state -----
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    tourType: "",
    travelDate: "",
    groupSize: "",
    subject: `Booking Request: ${tour.title}`,
    message: "",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((p) => ({ ...p, [name]: value }));
  };

  const buildSharedLines = () => {
    return [
      `• Tour: ${tour.title}`,
      `• Duration: ${tour.duration}`,
      `• Difficulty: ${tour.difficulty}`,
      "",
      "My details:",
      `• Name: ${formData.name}`,
      `• Email: ${formData.email}`,
      `• Phone: ${formData.phone || "-"}`,
      `• Tour Type: ${formData.tourType || "-"}`,
      `• Travel Date: ${formData.travelDate || "-"}`,
      `• Group Size: ${formData.groupSize || "-"}`,
      "",
      `Subject: ${formData.subject}`,
      `Message: ${formData.message || "-"}`,
      "",
      "Please let me know availability and pricing. Thank you!",
    ];
  };

  const buildWhatsAppMessage = () => {
    const lines = [
      "Hello Mishel Lanka Tours 👋",
      "",
      `I'd like to inquire/book the following tour:`,
      ...buildSharedLines(),
    ];
    return lines.join("\n");
  };

  const buildEmailSubject = () => formData.subject || `Booking Request: ${tour.title}`;

  const buildEmailBody = () => {
    const lines = [
      "Hello Mishel Lanka Tours,",
      "",
      "I'd like to inquire/book the following tour:",
      ...buildSharedLines(),
      "",
      "— Sent from Mishel Lanka Tours website",
    ];
    return lines.join("\n");
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Show local success toast
    setIsSubmitted(true);
    setTimeout(() => setIsSubmitted(false), 3500);

    // Build WhatsApp URL
    const text = buildWhatsAppMessage();
    const url = `https://wa.me/${ADMIN_WHATSAPP}?text=${encodeURIComponent(text)}`;

    // Navigate to admin WhatsApp (new tab)
    window.open(url, "_blank");

    // (Optional) Reset form
    setFormData((p) => ({
      ...p,
      name: "",
      email: "",
      phone: "",
      tourType: "",
      travelDate: "",
      groupSize: "",
      subject: `Booking Request: ${tour.title}`,
      message: "",
    }));
  };

  const handleEmailCompose = () => {
    const subject = buildEmailSubject();
    const body = buildEmailBody();

    // mailto link (opens default email client, user can review & send)
    const mailto = `mailto:${ADMIN_EMAIL}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;

    // Prefer opening a new window/tab; fallback to setting location if blocked
    const opened = window.open(mailto, "_blank");
    if (!opened) {
      window.location.href = mailto;
    }
  };

  const scrollToForm = () => {
    setFormData((p) => ({ ...p, subject: `Booking Request: ${tour.title}` }));
    formRef.current?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-green-50">
      {/* Hero Section */}
      <section className="relative h-96 overflow-hidden">
        <img src={tour.image} alt={tour.title} className="w-full h-full object-cover" />
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
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-4">{tour.title}</h1>
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

      {/* Main Body */}
      <div className="max-w-7xl mx-auto px-6 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-12">
            {/* Tour Highlights */}
            <section className="bg-white rounded-3xl shadow-lg p-8">
              <h2 className="text-3xl font-bold text-gray-800 mb-6">Tour Highlights</h2>
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
              <h2 className="text-3xl font-bold text-gray-800 mb-8">Daily Itinerary</h2>
              <div className="space-y-6">
                {tour.itinerary.map((day, index) => (
                  <div key={index} className="border-l-4 border-blue-600 pl-6 pb-8">
                    <div className="flex items-center gap-4 mb-3">
                      <div className="bg-blue-600 text-white w-8 h-8 rounded-full flex items-center justify-center font-bold text-sm">
                        {day.day}
                      </div>
                      <h3 className="text-xl font-bold text-gray-800">{day.title}</h3>
                    </div>
                    <p className="text-gray-600 mb-4">{day.description}</p>
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
                      {day.activities.map((activity, idx) => (
                        <div key={idx} className="flex items-center gap-2 text-sm text-gray-500">
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
                    <li key={index} className="flex items-start gap-3 text-gray-600">
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
                    <li key={index} className="flex items-start gap-3 text-gray-600">
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
                <span className="inline-block w-6 h-6 rounded-full bg-blue-600"></span>
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

            {/* ===== Contact / Booking Form ===== */}
            <section ref={formRef} id="contact-form" className="scroll-mt-28">
              <div className="grid lg:grid-cols-2 gap-12">
                {/* Contact Form */}
                <motion.div
                  className="bg-white rounded-3xl shadow-2xl p-8"
                  variants={fadeUp}
                  initial="hidden"
                  whileInView="show"
                  viewport={{ once: true, amount: 0.2 }}
                >
                  <motion.div className="mb-8" variants={fadeUp}>
                    <h2 className="text-3xl font-bold text-gray-800 mb-4">Send us a Message</h2>
                    <p className="text-gray-600">
                      Fill out the form below and we'll get back to you within 24 hours.
                    </p>
                  </motion.div>

                  <AnimatePresence>
                    {isSubmitted && (
                      <motion.div
                        initial={{ opacity: 0, y: -8, scale: 0.98 }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        exit={{ opacity: 0, y: -8, scale: 0.98 }}
                        className="mb-6 bg-green-50 border border-green-200 rounded-2xl p-4 flex items-center gap-3"
                      >
                        <CheckCircle className="w-5 h-5 text-green-600" />
                        <span className="text-green-700 font-medium">
                          Message ready! Redirecting you to WhatsApp…
                        </span>
                      </motion.div>
                    )}
                  </AnimatePresence>

                  <form onSubmit={handleSubmit} className="space-y-6">
                    <motion.div
                      className="grid md:grid-cols-2 gap-6"
                      variants={stagger}
                      initial="hidden"
                      animate="show"
                    >
                      <motion.div variants={fadeUp}>
                        <label className="block text-gray-700 font-medium mb-2">Full Name</label>
                        <input
                          type="text"
                          name="name"
                          value={formData.name}
                          onChange={handleInputChange}
                          className="w-full px-4 py-3 rounded-2xl border border-gray-200 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 outline-none transition-all"
                          placeholder="Your full name"
                          required
                        />
                      </motion.div>
                      <motion.div variants={fadeUp}>
                        <label className="block text-gray-700 font-medium mb-2">Email Address</label>
                        <input
                          type="email"
                          name="email"
                          value={formData.email}
                          onChange={handleInputChange}
                          className="w-full px-4 py-3 rounded-2xl border border-gray-200 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 outline-none transition-all"
                          placeholder="your@email.com"
                          required
                        />
                      </motion.div>
                    </motion.div>

                    <motion.div
                      className="grid md:grid-cols-2 gap-6"
                      variants={stagger}
                      initial="hidden"
                      animate="show"
                    >
                      <motion.div variants={fadeUp}>
                        <label className="block text-gray-700 font-medium mb-2">Phone Number</label>
                        <input
                          type="tel"
                          name="phone"
                          value={formData.phone}
                          onChange={handleInputChange}
                          className="w-full px-4 py-3 rounded-2xl border border-gray-200 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 outline-none transition-all"
                          placeholder="+94 77 123 4567"
                        />
                      </motion.div>
                      <motion.div variants={fadeUp}>
                        <label className="block text-gray-700 font-medium mb-2">Tour Type</label>
                        <select
                          name="tourType"
                          value={formData.tourType}
                          onChange={handleInputChange}
                          className="w-full px-4 py-3 rounded-2xl border border-gray-200 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 outline-none transition-all"
                        >
                          <option value="">Select tour type</option>
                          {tourTypes.map((type, index) => (
                            <option key={index} value={type}>
                              {type}
                            </option>
                          ))}
                        </select>
                      </motion.div>
                    </motion.div>

                    <motion.div
                      className="grid md:grid-cols-2 gap-6"
                      variants={stagger}
                      initial="hidden"
                      animate="show"
                    >
                      <motion.div variants={fadeUp}>
                        <label className="block text-gray-700 font-medium mb-2">Travel Date</label>
                        <input
                          type="date"
                          name="travelDate"
                          value={formData.travelDate}
                          onChange={handleInputChange}
                          className="w-full px-4 py-3 rounded-2xl border border-gray-200 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 outline-none transition-all"
                        />
                      </motion.div>
                      <motion.div variants={fadeUp}>
                        <label className="block text-gray-700 font-medium mb-2">Group Size</label>
                        <select
                          name="groupSize"
                          value={formData.groupSize}
                          onChange={handleInputChange}
                          className="w-full px-4 py-3 rounded-2xl border border-gray-200 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 outline-none transition-all"
                        >
                          <option value="">Select group size</option>
                          <option value="1-2">1-2 people</option>
                          <option value="3-5">3-5 people</option>
                          <option value="6-10">6-10 people</option>
                          <option value="10+">10+ people</option>
                        </select>
                      </motion.div>
                    </motion.div>

                    <motion.div variants={fadeUp} initial="hidden" animate="show">
                      <label className="block text-gray-700 font-medium mb-2">Subject</label>
                      <input
                        type="text"
                        name="subject"
                        value={formData.subject}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 rounded-2xl border border-gray-200 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 outline-none transition-all"
                        placeholder="Subject of your inquiry"
                        required
                      />
                    </motion.div>

                    <motion.div variants={fadeUp} initial="hidden" animate="show">
                      <label className="block text-gray-700 font-medium mb-2">Message</label>
                      <textarea
                        name="message"
                        value={formData.message}
                        onChange={handleInputChange}
                        rows="5"
                        className="w-full px-4 py-3 rounded-2xl border border-gray-200 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 outline-none transition-all resize-none"
                        placeholder="Tell us about your dream Sri Lankan adventure..."
                        required
                      />
                    </motion.div>

                    {/* Action Buttons */}
                    <div className="grid sm:grid-cols-2 gap-4">
                      <motion.button
                        type="submit"
                        whileHover={{ scale: 1.03 }}
                        whileTap={{ scale: 0.98 }}
                        className="w-full bg-gradient-to-r from-blue-600 to-green-600 hover:from-blue-700 hover:to-green-700 text-white font-semibold py-4 px-8 rounded-2xl shadow-lg"
                      >
                        <div className="flex items-center justify-center gap-2">
                          <Send className="w-5 h-5" />
                          Send via WhatsApp
                        </div>
                      </motion.button>

                      <motion.button
                        type="button"
                        onClick={handleEmailCompose}
                        whileHover={{ scale: 1.03 }}
                        whileTap={{ scale: 0.98 }}
                        className="w-full border-2 border-blue-600 text-blue-700 hover:bg-blue-600 hover:text-white font-semibold py-4 px-8 rounded-2xl shadow-lg transition-colors"
                        aria-label="Prepare email to admin"
                        title="Prepare email to admin"
                      >
                        <div className="flex items-center justify-center gap-2">
                          <Mail className="w-5 h-5" />
                          Prepare Email
                        </div>
                      </motion.button>
                    </div>
                  </form>
                </motion.div>

                {/* Helpful Contact Card */}
                <div className="bg-white rounded-3xl shadow-2xl p-8">
                  <h3 className="text-2xl font-bold text-gray-800 mb-6">Need Help?</h3>
                  <div className="space-y-4">
                    <div className="flex items-center gap-3 text-gray-700">
                      <Phone className="w-5 h-5 text-blue-600" />
                      <span>+94 76 204 4065</span>
                    </div>
                    <div className="flex items-center gap-3 text-gray-700">
                      <Mail className="w-5 h-5 text-blue-600" />
                      <span>{ADMIN_EMAIL}</span>
                    </div>
                    <button
                      onClick={() => window.open(`https://wa.me/${ADMIN_WHATSAPP}`, "_blank")}
                      className="mt-4 w-full border-2 border-green-600 text-green-700 hover:bg-green-600 hover:text-white font-semibold py-3 px-6 rounded-2xl transition-all duration-300"
                    >
                      Chat on WhatsApp
                    </button>
                  </div>
                </div>
              </div>
            </section>
          </div>

          {/* Sidebar */}
          <div className="space-y-8">
            {/* Quick Info Card */}
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
                <button
                  onClick={scrollToForm}
                  className="w-full bg-gradient-to-r from-green-600 to-blue-600 hover:from-green-700 hover:to-blue-700 text-white font-semibold py-4 px-6 rounded-2xl transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
                >
                  Book Now
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
                    <span>{ADMIN_EMAIL}</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* /Sidebar */}
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
