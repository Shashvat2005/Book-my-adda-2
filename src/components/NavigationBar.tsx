import { Hotel, Plane, Package, Building, List } from "lucide-react";
import { Link } from "react-router-dom";

const navItems = [
  { icon: Hotel, label: "Accommodations", to: "/accommodations" },
  { icon: Plane, label: "Flights", to: "/flights" },
  { icon: Package, label: "Packages", to: "/packages" },
  { icon: Building, label: "Transfer", to: "/list-property" },
  { icon: List, label: "List Your Property", to: "/signin" },
];

const NavigationBar = () => {
  return (
    <nav className="relative w-full py-6 bg-[#0B0F19] border-b border-white/10 overflow-hidden">

      {/* 🔥 subtle glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[500px] h-[200px] bg-indigo-500/20 blur-[120px] rounded-full"></div>

      <ul className="relative flex flex-wrap justify-center gap-6 md:gap-10">

        {navItems.map(({ icon: Icon, label, to }) => (
          <li key={label}>
            <Link
              to={to}
              className="group relative flex items-center gap-2 px-5 py-3 rounded-xl bg-white/5 border border-white/10 text-gray-300 hover:text-white backdrop-blur-lg transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_10px_30px_rgba(99,102,241,0.3)]"
            >

              {/* 🔥 ICON */}
              <Icon
                size={18}
                className="transition-transform duration-300 group-hover:scale-110"
              />

              {/* 🔥 TEXT */}
              <span className="text-sm md:text-base font-medium">
                {label}
              </span>

              {/* 🔥 GRADIENT HOVER BORDER */}
              <span className="absolute inset-0 rounded-xl opacity-0 group-hover:opacity-100 transition duration-300 border border-indigo-500/40"></span>

            </Link>
          </li>
        ))}

      </ul>
    </nav>
  );
};

export default NavigationBar;