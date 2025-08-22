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
    "relative font-medium transition-all duration-300";
  const desktopLink =
    "text-white/90 hover:text-white";
  const underline =
    "absolute -bottom-1 left-0 h-0.5 w-0 bg-gradient-to-r from-blue-400 to-green-400 group-hover:w-full transition-all duration-300";
  const activeText = "text-white";
  const activeUnderline =
    "absolute -bottom-1 left-0 h-0.5 w-full bg-gradient-to-r from-blue-400 to-green-400";

  return (
    <nav className="fixed top-0 left-0 w-full bg-black/10 backdrop-blur-md border-b border-white/20 z-50">
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
        <ul className="hidden md:flex space-x-8">
          {navLinks.map((link) => {
            const isActive = pathname === link.href;
            return (
              <li key={link.name} className="group">
                <Link
                  to={link.href}
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
          className="md:hidden text-white/90 bg-black/30 backdrop-blur-sm hover:bg-white/20 p-2 rounded-lg transition-all duration-300 hover:scale-110 focus:outline-none"
          aria-label="Toggle menu"
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Dropdown */}
      {isOpen && (
        <div className="md:hidden bg-black/80 text-white border-b border-white/10">
          <ul className="flex flex-col divide-y divide-white/10">
            {navLinks.map((link) => {
              const isActive = pathname === link.href;
              return (
                <li key={link.name}>
                  <Link
                    to={link.href}
                    className={`block py-3 px-4 transition-colors ${
                      isActive
                        ? "bg-white/10 text-white"
                        : "text-white/90 hover:bg-white/10 hover:text-white"
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
