import { useState } from "react";
import { Menu, X } from "lucide-react";
import { Link, useLocation } from "react-router-dom";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const { pathname } = useLocation();

  const navLinks = [
    { name: "Home", href: "/" },
    { name: "About", href: "/about" },
    { name: "Packages", href: "/Packages" },
    { name: "Contact", href: "/contact" },
    { name: "Gallery", href: "/Gallery" },
  ];

  const baseLink =
    "relative font-semibold tracking-wide transition-all duration-300 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 rounded";
  const desktopLink =
    "text-gray-900 hover:text-blue-700";
  const underline =
    "absolute -bottom-1 left-0 h-0.5 w-0 bg-gradient-to-r from-blue-600 to-emerald-500 group-hover:w-full transition-all duration-300";
  const activeText =
    "text-blue-700";
  const activeUnderline =
    "absolute -bottom-1 left-0 h-0.5 w-full bg-gradient-to-r from-blue-600 to-emerald-500";

  return (
    <nav className="fixed top-0 left-0 w-full bg-white/95 backdrop-blur border-b border-gray-200 shadow-sm z-50">
      <div className="container mx-auto max-w-screen-xl px-4 flex items-center justify-between h-16">
        {/* Logo */}
        <Link to="/" className="flex items-center gap-2">
          <img
            src="/logo.mishel.png"
            alt="Logo"
            className="h-12 md:h-14 w-auto max-w-[240px] object-contain"
          />
        </Link>

        {/* Desktop Menu */}
        <ul className="hidden md:flex items-center space-x-8">
          {navLinks.map((link) => {
            const isActive = pathname === link.href;
            return (
              <li key={link.name} className="group relative">
                <Link
                  to={link.href}
                  aria-current={isActive ? "page" : undefined}
                  className={`${baseLink} ${desktopLink} ${isActive ? activeText : ""}`}
                >
                  {link.name}
                  <span className={isActive ? activeUnderline : underline} />
                </Link>
              </li>
            );
          })}
        </ul>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsOpen((v) => !v)}
          className="md:hidden text-gray-900 bg-gray-100 hover:bg-gray-200 p-2 rounded-lg transition-all duration-300 hover:scale-110 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500"
          aria-label="Toggle menu"
          aria-expanded={isOpen}
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Dropdown */}
      {isOpen && (
        <div className="md:hidden bg-white text-gray-900 border-b border-gray-200 shadow-sm">
          <ul className="flex flex-col divide-y divide-gray-200">
            {navLinks.map((link) => {
              const isActive = pathname === link.href;
              return (
                <li key={link.name}>
                  <Link
                    to={link.href}
                    aria-current={isActive ? "page" : undefined}
                    className={`block py-3 px-4 transition-colors ${
                      isActive
                        ? "bg-blue-50 text-blue-700"
                        : "hover:bg-gray-50 hover:text-blue-700"
                    }`}
                    onClick={() => setIsOpen(false)}
                  >
                    {link.name}
                  </Link>
                </li>
              );
            })}
          </ul>
        </div>
      )}
    </nav>
  );
}
