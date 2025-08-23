import Footer from "../components/Footer";
import React, { useState, useEffect } from "react";
import {
  Phone, Mail, MapPin, Clock, Send, MessageCircle, Calendar,
  Users, Star, Facebook, Instagram, Twitter, Youtube, CheckCircle,
} from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { duration: 0.55, ease: "easeOut" } },
};
const fadeIn = {
  hidden: { opacity: 0 },
  show: { opacity: 1, transition: { duration: 0.5 } },
};
const stagger = { hidden: {}, show: { transition: { staggerChildren: 0.08 } } };

const ContactUsPage = () => {
  const [formData, setFormData] = useState({
    name: "", email: "", phone: "", subject: "",
    message: "", tourType: "", travelDate: "", groupSize: "",
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleInputChange = (e) =>
    setFormData((s) => ({ ...s, [e.target.name]: e.target.value }));

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitted(true);
  };

  useEffect(() => {
    if (!isSubmitted) return;
    const t = setTimeout(() => setIsSubmitted(false), 3000);
    return () => clearTimeout(t);
  }, [isSubmitted]);

  const contactInfo = [
    { icon: <Phone className="w-6 h-6" />, title: "Phone Number", info: "+94 76 204 40 65", subinfo: "+94 11 234 5678", color: "from-blue-500 to-cyan-500" },
    { icon: <Mail className="w-6 h-6" />, title: "Email Address", info: "mishellankatours@gmail.com", subinfo: "mishellankatours@gmail.com", color: "from-green-500 to-emerald-500" },
    { icon: <MapPin className="w-6 h-6" />, title: "Our Location", info: "Colombo, Sri Lanka", subinfo: "Main Office, Level 3", color: "from-orange-500 to-red-500" },
    { icon: <Clock className="w-6 h-6" />, title: "Working Hours", info: "Mon - Sat: 8AM - 8PM", subinfo: "Sunday: 9AM - 5PM", color: "from-purple-500 to-pink-500" },
  ];

  const tourTypes = ["Beach Tours","Cultural Heritage","Wildlife Safari","Adventure Tours","Tea Plantation Tours","Custom Package"];

  const socialLinks = [
    { icon: <Facebook className="w-5 h-5" />, name: "Facebook", color: "hover:text-blue-600" },
    { icon: <Instagram className="w-5 h-5" />, name: "Instagram", color: "hover:text-pink-600" },
    { icon: <Twitter className="w-5 h-5" />, name: "Twitter", color: "hover:text-blue-400" },
    { icon: <Youtube className="w-5 h-5" />, name: "YouTube", color: "hover:text-red-600" },
  ];

  const faqs = [
    { question: "How far in advance should I book?", answer: "We recommend booking at least 2-4 weeks in advance, especially during peak season (December-March)." },
    { question: "What's included in the tour packages?", answer: "Most packages include accommodation, transportation, meals, entry fees, and professional guide services." },
    { question: "Can you customize tours for our group?", answer: "Absolutely! We specialize in creating personalized experiences based on your interests and budget." },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-green-50">
      {/* Hero */}
      <motion.section
        className="relative py-20 px-6 overflow-hidden"
        variants={fadeIn}
        initial="hidden"
        animate="show"
      >
        <div className="absolute inset-0 bg-gradient-to-r from-blue-600/10 to-green-600/10" />
        <div className="relative max-w-7xl mx-auto text-center">
          <motion.h1
            className="text-5xl md:text-7xl font-bold text-gray-800 mb-6"
            variants={fadeUp}
            initial="hidden"
            animate="show"
          >
            Contact{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-green-600">
              Us
            </span>
          </motion.h1>
          <motion.p
            className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed"
            variants={fadeUp}
            initial="hidden"
            animate="show"
            transition={{ delay: 0.08 }}
          >
            Ready to start your Sri Lankan adventure? Get in touch with our
            expert team and let us create an unforgettable journey tailored just
            for you.
          </motion.p>

          {/* Stats */}
          <motion.div
            className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-12 max-w-4xl mx-auto"
            variants={stagger}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.2 }}
          >
            {[
              { icon: <MessageCircle className="w-8 h-8 text-blue-600 mx-auto mb-2" />, title: "24/7", sub: "Support" },
              { icon: <Star className="w-8 h-8 text-green-600 mx-auto mb-2" />, title: "4.9★", sub: "Rating" },
              { icon: <Users className="w-8 h-8 text-orange-600 mx-auto mb-2" />, title: "2500+", sub: "Happy Clients" },
              { icon: <Calendar className="w-8 h-8 text-purple-600 mx-auto mb-2" />, title: "15+", sub: "Years" },
            ].map((s, i) => (
              <motion.div
                key={i}
                variants={fadeUp}
                whileHover={{ y: -6, transition: { duration: 0.2 } }}
                className="bg-white/80 backdrop-blur-sm rounded-2xl shadow-lg p-6 hover:shadow-xl transition-all"
              >
                {s.icon}
                <div className="text-2xl font-bold text-gray-800 mb-1">{s.title}</div>
                <div className="text-sm text-gray-600">{s.sub}</div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </motion.section>

      {/* Contact Info Cards */}
      <section className="py-16 px-6">
        <div className="max-w-7xl mx-auto">
          <motion.div
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16"
            variants={stagger}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.2 }}
          >
            {contactInfo.map((item, index) => (
              <motion.div
                key={index}
                variants={fadeUp}
                whileHover={{ y: -8, scale: 1.01 }}
                className="bg-white rounded-3xl shadow-lg overflow-hidden transition-all duration-300 group"
              >
                <div className="p-6">
                  <div
                    className={`w-12 h-12 bg-gradient-to-r ${item.color} rounded-xl flex items-center justify-center text-white mb-4`}
                  >
                    {item.icon}
                  </div>
                  <h3 className="text-lg font-bold text-gray-800 mb-2">{item.title}</h3>
                  <p className="text-gray-700 font-medium mb-1">{item.info}</p>
                  <p className="text-gray-500 text-sm">{item.subinfo}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>

          {/* Main Content Grid */}
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
                      Message sent successfully! We'll contact you soon.
                    </span>
                  </motion.div>
                )}
              </AnimatePresence>

              <form onSubmit={handleSubmit} className="space-y-6">
                <motion.div className="grid md:grid-cols-2 gap-6" variants={stagger} initial="hidden" animate="show">
                  <motion.div variants={fadeUp}>
                    <label className="block text-gray-700 font-medium mb-2">Full Name</label>
                    <input
                      type="text" name="name" value={formData.name} onChange={handleInputChange}
                      className="w-full px-4 py-3 rounded-2xl border border-gray-200 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 outline-none transition-all"
                      placeholder="Your full name" required
                    />
                  </motion.div>
                  <motion.div variants={fadeUp}>
                    <label className="block text-gray-700 font-medium mb-2">Email Address</label>
                    <input
                      type="email" name="email" value={formData.email} onChange={handleInputChange}
                      className="w-full px-4 py-3 rounded-2xl border border-gray-200 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 outline-none transition-all"
                      placeholder="your@email.com" required
                    />
                  </motion.div>
                </motion.div>

                <motion.div className="grid md:grid-cols-2 gap-6" variants={stagger} initial="hidden" animate="show">
                  <motion.div variants={fadeUp}>
                    <label className="block text-gray-700 font-medium mb-2">Phone Number</label>
                    <input
                      type="tel" name="phone" value={formData.phone} onChange={handleInputChange}
                      className="w-full px-4 py-3 rounded-2xl border border-gray-200 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 outline-none transition-all"
                      placeholder="+94 77 123 4567"
                    />
                  </motion.div>
                  <motion.div variants={fadeUp}>
                    <label className="block text-gray-700 font-medium mb-2">Tour Type</label>
                    <select
                      name="tourType" value={formData.tourType} onChange={handleInputChange}
                      className="w-full px-4 py-3 rounded-2xl border border-gray-200 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 outline-none transition-all"
                    >
                      <option value="">Select tour type</option>
                      {tourTypes.map((type, index) => (
                        <option key={index} value={type}>{type}</option>
                      ))}
                    </select>
                  </motion.div>
                </motion.div>

                <motion.div className="grid md:grid-cols-2 gap-6" variants={stagger} initial="hidden" animate="show">
                  <motion.div variants={fadeUp}>
                    <label className="block text-gray-700 font-medium mb-2">Travel Date</label>
                    <input
                      type="date" name="travelDate" value={formData.travelDate} onChange={handleInputChange}
                      className="w-full px-4 py-3 rounded-2xl border border-gray-200 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 outline-none transition-all"
                    />
                  </motion.div>
                  <motion.div variants={fadeUp}>
                    <label className="block text-gray-700 font-medium mb-2">Group Size</label>
                    <select
                      name="groupSize" value={formData.groupSize} onChange={handleInputChange}
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
                    type="text" name="subject" value={formData.subject} onChange={handleInputChange}
                    className="w-full px-4 py-3 rounded-2xl border border-gray-200 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 outline-none transition-all"
                    placeholder="Subject of your inquiry" required
                  />
                </motion.div>

                <motion.div variants={fadeUp} initial="hidden" animate="show">
                  <label className="block text-gray-700 font-medium mb-2">Message</label>
                  <textarea
                    name="message" value={formData.message} onChange={handleInputChange} rows="5"
                    className="w-full px-4 py-3 rounded-2xl border border-gray-200 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 outline-none transition-all resize-none"
                    placeholder="Tell us about your dream Sri Lankan adventure..." required
                  />
                </motion.div>

                <motion.button
                  type="submit"
                  whileHover={{ scale: 1.03 }}
                  whileTap={{ scale: 0.98 }}
                  className="w-full bg-gradient-to-r from-blue-600 to-green-600 hover:from-blue-700 hover:to-green-700 text-white font-semibold py-4 px-8 rounded-2xl shadow-lg"
                >
                  <div className="flex items-center justify-center gap-2">
                    <Send className="w-5 h-5" />
                    Send Message
                  </div>
                </motion.button>
              </form>
            </motion.div>

            {/* Right Column */}
            <motion.div className="space-y-8" variants={stagger} initial="hidden" whileInView="show" viewport={{ once: true }}>
              {/* Map (placeholder) */}
              <motion.div variants={fadeUp} className="bg-white rounded-3xl shadow-2xl overflow-hidden">
                <div className="h-64 bg-gradient-to-br from-blue-100 to-green-100 flex items-center justify-center">
                  <div className="text-center">
                    <MapPin className="w-12 h-12 text-blue-600 mx-auto mb-4" />
                    <h3 className="text-xl font-bold text-gray-800 mb-2">Find Us Here</h3>
                    <p className="text-gray-600">Interactive map coming soon</p>
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-800 mb-3">Visit Our Office</h3>
                  <p className="text-gray-600 mb-4">
                    Come visit our office in the heart of Colombo to discuss
                    your perfect Sri Lankan adventure in person.
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {socialLinks.map((social, index) => (
                      <motion.button
                        key={index}
                        whileHover={{ scale: 1.08 }}
                        whileTap={{ scale: 0.96 }}
                        className={`p-3 bg-gray-100 hover:bg-gray-200 rounded-xl transition-colors ${social.color}`}
                        aria-label={social.name}
                      >
                        {social.icon}
                      </motion.button>
                    ))}
                  </div>
                </div>
              </motion.div>

              {/* FAQ */}
              <motion.div variants={fadeUp} className="bg-white rounded-3xl shadow-2xl p-6">
                <h3 className="text-2xl font-bold text-gray-800 mb-6">Frequently Asked Questions</h3>
                <div className="space-y-4">
                  {faqs.map((faq, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, y: 8 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.35 }}
                      className="border-b border-gray-100 last:border-0 pb-4 last:pb-0"
                    >
                      <h4 className="font-semibold text-gray-800 mb-2">{faq.question}</h4>
                      <p className="text-gray-600 text-sm">{faq.answer}</p>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <motion.section
        className="py-16 px-6 bg-gradient-to-r from-blue-600 to-green-600 text-white"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
      >
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-6">Ready to Start Planning?</h2>
          <p className="text-xl opacity-90 mb-8">
            Don't wait! Contact us today and let's create your perfect Sri
            Lankan adventure together.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <motion.button
              whileHover={{ scale: 1.04 }}
              whileTap={{ scale: 0.98 }}
              className="bg-white text-blue-600 hover:bg-gray-100 font-semibold py-3 px-8 rounded-2xl"
            >
              Call Now: +94 76 204 40 65
            </motion.button>
            <motion.button
              whileHover={{ scale: 1.04 }}
              whileTap={{ scale: 0.98 }}
              className="border-2 border-white text-white hover:bg-white hover:text-blue-600 font-semibold py-3 px-8 rounded-2xl"
            >
              WhatsApp Us
            </motion.button>
          </div>
        </div>
      </motion.section>

      {/* Footer */}
      <div className="bg-gray-100 py-8 mt-16">
        <Footer />
      </div>
    </div>
  );
};

export default ContactUsPage;
