import { Facebook, Twitter, Instagram, Linkedin } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-[#0B0F19] text-white mt-20 border-t border-white/10">

      <div className="max-w-7xl mx-auto px-6 py-16 grid grid-cols-1 md:grid-cols-3 gap-12">

        {/* BRAND */}
        <div>
          <h2 className="text-2xl font-bold text-white mb-3">
            Book My Adda
          </h2>
          <p className="text-gray-400 text-sm leading-relaxed max-w-sm">
            Discover premium hotels, compare prices, and plan smarter trips
            with AI-powered recommendations.
          </p>
        </div>

        {/* LINKS */}
        <div>
          <h3 className="text-lg font-semibold mb-4 text-white">
            Quick Links
          </h3>
          <ul className="space-y-2 text-gray-400 text-sm">
            {["Home", "Hotels", "Deals", "Contact"].map((item) => (
              <li
                key={item}
                className="hover:text-indigo-400 transition cursor-pointer"
              >
                {item}
              </li>
            ))}
          </ul>
        </div>

        {/* SOCIAL */}
        <div>
          <h3 className="text-lg font-semibold mb-4 text-white">
            Follow Us
          </h3>

          <div className="flex gap-4">
            {[Facebook, Twitter, Instagram, Linkedin].map((Icon, i) => (
              <a
                key={i}
                href="#"
                className="p-3 rounded-lg bg-[#111827] border border-white/10 text-gray-400 hover:text-white hover:bg-indigo-500/20 hover:border-indigo-500/30 transition-all duration-300"
              >
                <Icon size={18} />
              </a>
            ))}
          </div>
        </div>
      </div>

      {/* BOTTOM */}
      <div className="text-center text-gray-500 text-sm py-6 border-t border-white/10">
        © 2026 Book My Adda. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;