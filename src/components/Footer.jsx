import React from "react";
import { MapPin, Phone, Mail, Clock } from "lucide-react";

export default function Footer() {
  const contactInfo = [
    {
      icon: <MapPin className="w-5 h-5" />,
      title: "Address",
      details: ["Inamaluwa, Dambulla ", "Sri Lanka"],
    },
    {
      icon: <Phone className="w-5 h-5" />,
      title: "Phone",
      details: ["+94 76 204 4065"],
    },
    {
      icon: <Mail className="w-5 h-5" />,
      title: "Email",
      details: ["mishellankatours@gmail.com"],
    },
    // {
    //   icon: <Clock className="w-5 h-5" />,
    //   title: "Working Hours",
    //   details: ["Mon - Sat: 8:00 AM - 6:00 PM", "Sunday: 9:00 AM - 4:00 PM"],
    // },
  ];

  const quickLinks = [
    { name: "Home", href: "/" },
    { name: "About Us", href: "/about" },
    { name: "Tour Packages", href: "/packages" },
    { name: "Contact Us", href: "/contact" },
    { name: "Gallery", href: "/gallery" },
  ];

  const destinations = [
    { name: "Kandy", href: "/destinations/kandy" },
    { name: "Galle", href: "/destinations/galle" },
    { name: "Nuwara Eliya", href: "/destinations/nuwara-eliya" },
    { name: "Sigiriya", href: "/destinations/sigiriya" },
    { name: "Mirissa", href: "/destinations/mirissa" },
    { name: "Arugam Bay", href: "/destinations/arugam-bay" },
  ];

  const socialMedia = [
    {
      name: "Facebook",
      icon: (
        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
          <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
        </svg>
      ),
      url: "https://web.facebook.com/people/Mishel-lanka-tours/61579914810755/?mibextid=wwXIfr",
      color: "hover:bg-blue-600",
    },
    {
      name: "Tripadvisor",
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
        >
          <path stroke="none" d="M0 0h24v24H0z" fill="none" />
          <path d="M6.5 13.5m-1.5 0a1.5 1.5 0 1 0 3 0a1.5 1.5 0 1 0 -3 0" />
          <path d="M17.5 13.5m-1.5 0a1.5 1.5 0 1 0 3 0a1.5 1.5 0 1 0 -3 0" />
          <path d="M17.5 9a4.5 4.5 0 1 0 3.5 1.671l1 -1.671h-4.5z" />
          <path d="M6.5 9a4.5 4.5 0 1 1 -3.5 1.671l-1 -1.671h4.5z" />
          <path d="M10.5 15.5l1.5 2l1.5 -2" />
          <path d="M9 6.75c2 -.667 4 -.667 6 0" />
        </svg>
      ),
      url: "https://www.tripadvisor.com/Attraction_Review-g304133-d33442155-Reviews-Mishel_lanka_tours-Dambulla_Central_Province.html",
      color: "hover:bg-green-600",
    },
    {
      name: "Instagram",
      icon: (
        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
          <path d="M12.017 0C5.396 0 .029 5.367.029 11.987c0 6.62 5.367 11.987 11.988 11.987c6.62 0 11.987-5.367 11.987-11.987C24.014 5.367 18.637.001 12.017.001zM8.449 16.988c-1.297 0-2.448-.151-3.44-.453-.992-.302-1.822-.728-2.492-1.280-.67-.552-1.177-1.200-1.524-1.944-.347-.744-.52-1.563-.52-2.457 0-.894.173-1.713.52-2.457.347-.744.854-1.392 1.524-1.944.67-.552 1.5-.978 2.492-1.280.992-.302 2.143-.453 3.44-.453h7.102c1.297 0 2.448.151 3.44.453.992.302 1.822.728 2.492 1.280.67.552 1.177 1.200 1.524 1.944.347.744.52 1.563.52 2.457 0 .894-.173 1.713-.52 2.457-.347.744-.854 1.392-1.524 1.944-.67.552-1.5.978-2.492 1.280-.992.302-2.143.453-3.44.453H8.449z" />
          <path d="M12 7.378c-2.552 0-4.622 2.069-4.622 4.622S9.448 16.622 12 16.622s4.622-2.069 4.622-4.622S14.552 7.378 12 7.378zM12 14.556c-1.414 0-2.556-1.142-2.556-2.556S10.586 9.444 12 9.444s2.556 1.142 2.556 2.556S13.414 14.556 12 14.556z" />
          <circle cx="16.806" cy="7.207" r="1.078" />
        </svg>
      ),
      url: "https://instagram.com/mishellanka",
      color: "hover:bg-pink-600",
    },
    {
      name: "YouTube",
      icon: (
        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
          <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
        </svg>
      ),
      url: "https://youtube.com/@mishellanka",
      color: "hover:bg-red-600",
    },

    {
      name: "Whatsapp",
      icon: (
        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.465 3.488" />
        </svg>
      ),
      url: "https://wa.me/94771234567",
      color: "hover:bg-green-600",
    },
  ];

  return (
    <footer className="bg-gradient-to-br from-gray-900 via-blue-900 to-green-900 text-white">
      {/* Newsletter Section */}
      <section className="py-12 px-6 border-b border-white/10">
        <div className="max-w-7xl mx-auto">
          <div className="bg-gradient-to-r from-blue-600/20 to-green-600/20 backdrop-blur-sm rounded-3xl p-8 text-center">
            <h3 className="text-3xl font-bold mb-4">
              Stay Updated with Our Latest Tours
            </h3>
            <p className="text-lg text-gray-300 mb-6 max-w-2xl mx-auto">
              Subscribe to our newsletter and be the first to know about
              exclusive deals, new destinations, and travel tips.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <input
                type="email"
                placeholder="Enter your email address"
                className="flex-1 px-4 py-3 rounded-xl bg-white/10 backdrop-blur-sm border border-white/20 text-white placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
              <button className="bg-gradient-to-r from-blue-600 to-green-600 hover:from-blue-700 hover:to-green-700 font-semibold py-3 px-6 rounded-xl transition-all duration-300 transform hover:scale-105 shadow-lg">
                Subscribe
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Main Footer Content */}
      <section className="py-16 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Company Info */}
            <div className="lg:col-span-1">
              <div className="mb-6">
                <h3 className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-green-400 mb-4">
                  Mishel Lanka Tours
                </h3>
                <p className="text-gray-300 leading-relaxed">
                  Your trusted partner in exploring the Pearl of the Indian
                  Ocean. We create unforgettable memories through authentic Sri
                  Lankan experiences.
                </p>
              </div>

              {/* Social Media Icons */}
              <div className="mb-8">
                <h4 className="text-lg font-semibold mb-4">Follow Us</h4>
                <div className="flex flex-wrap gap-3">
                  {socialMedia.map((social, index) => (
                    <a
                      key={index}
                      href={social.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`p-3 bg-white/10 backdrop-blur-sm rounded-xl ${social.color} text-white transition-all duration-300 transform hover:scale-110 hover:shadow-lg group`}
                      title={social.name}
                    >
                      {social.icon}
                    </a>
                  ))}
                </div>
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <h4 className="text-lg font-semibold mb-6 text-white">
                Quick Links
              </h4>
              <ul className="space-y-3">
                {quickLinks.map((link, index) => (
                  <li key={index}>
                    <a
                      href={link.href}
                      className="text-gray-300 hover:text-blue-400 transition-colors duration-300 flex items-center group"
                    >
                      <span className="w-2 h-2 bg-gradient-to-r from-blue-400 to-green-400 rounded-full mr-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Popular Destinations */}
            <div>
              <h4 className="text-lg font-semibold mb-6 text-white">
                Popular Destinations
              </h4>
              <ul className="space-y-3">
                {destinations.map((destination, index) => (
                  <li key={index}>
                    <a
                      href={destination.href}
                      className="text-gray-300 hover:text-green-400 transition-colors duration-300 flex items-center group"
                    >
                      <span className="w-2 h-2 bg-gradient-to-r from-green-400 to-blue-400 rounded-full mr-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
                      {destination.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Contact Info */}
            <div>
              <h4 className="text-lg font-semibold mb-6 text-white">
                Contact Info
              </h4>
              <div className="space-y-4">
                {contactInfo.map((info, index) => (
                  <div key={index} className="flex items-start gap-3">
                    <div className="flex items-center justify-center w-10 h-10 bg-gradient-to-r from-blue-600 to-green-600 rounded-xl text-white flex-shrink-0">
                      {info.icon}
                    </div>
                    <div>
                      <h5 className="font-medium text-white mb-1">
                        {info.title}
                      </h5>
                      {info.details.map((detail, idx) => (
                        <p key={idx} className="text-gray-300 text-sm">
                          {detail}
                        </p>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Bottom Bar */}
      <section className="py-6 px-6 border-t border-white/10 bg-black/20">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-gray-400 text-sm">
              &copy; {new Date().getFullYear()} Mishellanka Tours. All rights
              reserved.
            </p>
            <div className="flex flex-wrap gap-4">
              <a
                href="/privacy-policy"
                className="text-gray-400 hover:text-blue-400 transition-colors duration-300 text-sm"
              >
                Privacy Policy
              </a>
              <a
                href="/terms-of-service"
                className="text-gray-400 hover:text-blue-400 transition-colors duration-300 text-sm"
              >
                Terms of Service
              </a>
              <a
                href="/sitemap"
                className="text-gray-400 hover:text-blue-400 transition-colors duration-300 text-sm"
              >
                Sitemap
              </a>
            </div>
          </div>
        </div>
      </section>
    </footer>
  );
}
