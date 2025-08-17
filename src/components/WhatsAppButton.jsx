import React, { useMemo } from "react";
import { useLocation } from "react-router-dom";
import { motion } from "framer-motion";

/** phone format: "94762044065" (no + or spaces) */
export default function WhatsAppButton({
  phone = "94762044065",
  message = "Hi Mishellanka Tours! I'm interested in your tours.",
  tooltip = "Chat on WhatsApp",
  className = "",
}) {
  const { pathname } = useLocation();

  const url = useMemo(() => {
    const text = `${message} (from: ${window.location.origin}${pathname})`;
    return `https://wa.me/${phone}?text=${encodeURIComponent(text)}`;
  }, [phone, message, pathname]);

  return (
    <motion.a
      href={url}
      target="_blank"
      rel="noreferrer"
      aria-label="Chat on WhatsApp"
      className={`fixed bottom-5 right-5 z-50 group ${className}`}
      initial={{ opacity: 0, y: 20, scale: 0.9 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      transition={{ duration: 0.35, ease: "easeOut" }}
    >
      {/* subtle pulse ring */}
      <motion.span
        aria-hidden
        className="absolute inset-0 -z-10 w-16 h-16 rounded-full bg-emerald-500/25 blur-md"
        animate={{ scale: [1, 1.15, 1], opacity: [0.5, 0.3, 0.5] }}
        transition={{ duration: 2.2, repeat: Infinity, ease: "easeInOut" }}
      />

      {/* main button */}
      <motion.div
        whileHover={{ y: -2, rotate: -2, scale: 1.05 }}
        whileTap={{ scale: 0.96, rotate: 0 }}
        animate={{ y: [0, -2, 0] }}
        transition={{ duration: 3.5, repeat: Infinity, ease: "easeInOut" }}
        className="w-16 h-16 rounded-full shadow-[0_10px_25px_rgba(18,140,126,.35)]
                   bg-gradient-to-br from-[#25D366] via-[#20C65A] to-[#128C7E]
                   flex items-center justify-center relative overflow-hidden"
      >
        {/* glossy highlight */}
        <span className="pointer-events-none absolute -top-4 left-1/2 -translate-x-1/2 w-24 h-10 rounded-full bg-white/35 blur-md" />

        {/* beautiful WhatsApp icon (brand glyph on gradient circle) */}
        <WhatsAppLogo className="w-8 h-8 text-white drop-shadow-[0_1px_1px_rgba(0,0,0,.35)]" />
        <span className="sr-only">{tooltip}</span>
      </motion.div>

      {/* tooltip */}
      <motion.div
        initial={{ opacity: 0, x: 6 }}
        whileHover={{ opacity: 1, x: 0 }}
        className="hidden sm:block absolute right-[4.5rem] top-1/2 -translate-y-1/2
                   bg-white text-gray-800 text-sm font-medium shadow-lg
                   px-3 py-1.5 rounded-full pointer-events-none
                   group-hover:opacity-100"
      >
        {tooltip}
      </motion.div>
    </motion.a>
  );
}

/** Crisp WhatsApp glyph (from Simple Icons), rendered in white on our gradient circle */
function WhatsAppLogo({ className = "" }) {
  return (
    <svg
      viewBox="0 0 24 24"
      role="img"
      aria-hidden="true"
      className={className}
      fill="currentColor"
    >
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.472-.149-.671.149-.198.297-.768.967-.941 1.165-.12.14-.24.16-.44.06-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.149-.174.198-.298.298-.496.099-.198.05-.372-.025-.521-.075-.149-.671-1.611-.92-2.206-.242-.58-.487-.502-.671-.511l-.571-.01c-.198 0-.521.074-.793.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.098 3.2 5.076 4.487.709.306 1.262.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z" />
      <path d="M12.051 21.999h-.004a8.766 8.766 0 01-4.476-1.233l-.321-.191-3.326.871.889-3.237-.209-.332a8.771 8.771 0 01-1.345-4.652c.002-4.842 3.946-8.783 8.788-8.783 2.349.001 4.555.917 6.212 2.574a8.72 8.72 0 012.571 6.21c-.003 4.842-3.947 8.784-8.779 8.784zm7.518-16.3A10.9 10.9 0 0012.05 0C5.495 0 .273 5.22.27 11.777c-.002 2.073.54 4.096 1.57 5.878L0 24l6.543-1.717a11.76 11.76 0 005.5 1.403h.005c6.554 0 11.876-5.32 11.879-11.872a11.82 11.82 0 00-3.471-8.353z" />
    </svg>
  );
}
