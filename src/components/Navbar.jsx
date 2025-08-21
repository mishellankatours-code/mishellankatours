import { useState } from "react";
import { Menu, X } from "lucide-react";
import { Link } from "react-router-dom";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { name: "Home", href: "/" },
    { name: "About", href: "/about" },
    { name: "Packages", href: "/Packages" },
    { name: "Contact", href: "/contact" },
    { name: "Gallery", href: "/Gallery" },
  ];

  return (
    <nav className="fixed top-0 left-0 w-full bg-black/10 backdrop-blur-md border-b border-white/20 z-50">
      <div className="container mx-auto max-w-screen-xl px-4 flex items-center justify-between h-16">
        {/* Logo */}
        <img
          src="/logo.png"
          alt="Logo"
          className="h-12 md:h-14 w-auto max-w-[240px] object-contain"
        />

        {/* Desktop Menu */}
        <ul className="hidden md:flex space-x-8">
          {navLinks.map((link) => (
            <li key={link.name}>
              <Link
                to={link.href}
                className="relative text-dark to-blue-950 hover:text-blue-800 transition-all duration-300 font-medium group"
              >
                {link.name}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-blue-400 to-green-400 group-hover:w-full transition-all duration-300"></span>
              </Link>
            </li>
          ))}
        </ul>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden text-dark to-blue-950 bg-black/20 backdrop-blur-sm hover:bg-white/30 p-2 rounded-lg transition-all duration-300 hover:scale-110 focus:outline-none"
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Dropdown */}
      {isOpen && (
        <div className="md:hidden bg-black/10 backdrop-blur-md border-b border-white/20">
          <ul className="flex flex-col space-y-2 p-4">
            {navLinks.map((link) => (
              <li key={link.name}>
                <Link
                  to={link.href}
                  className="block text-dark to-blue-950 hover:text-blue-200 transition-all duration-300 py-2 px-4 rounded-lg hover:bg-white/10 font-medium"
                  onClick={() => setIsOpen(false)}
                >
                  {link.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      )}
    </nav>
  );
}
