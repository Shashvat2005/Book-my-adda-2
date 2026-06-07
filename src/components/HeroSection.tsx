import { Search } from "lucide-react";
import heroBg from "@/assets/hero-bg.jpg";
import { useState, useRef, useEffect } from "react";
import { useNavigate } from "react-router-dom";

const HeroSection = () => {

  const wrapperRef = useRef<HTMLDivElement | null>(null);
  const navigate = useNavigate();

  const hotels = [
    { id: 1, name: "The Leela Palace, New Delhi", city: "Delhi", rating: 4.6, price: "₹20,000–₹28,000", image: "/leela.jpg" },
    { id: 2, name: "The Imperial New Delhi", city: "Delhi", rating: 4.7, price: "₹26,000–₹33,000", image: "/imperial.jpg" },
    { id: 3, name: "Taj Palace, New Delhi", city: "Delhi", rating: 4.7, price: "₹11,000–₹16,000", image: "/tajdelhi.jpg" },
    { id: 4, name: "Shangri-La Eros New Delhi", city: "Delhi", rating: 4.6, price: "₹9,000–₹14,000", image: "/shangrila.jpg" },
    { id: 5, name: "JW Marriott Aerocity", city: "Delhi", rating: 4.6, price: "₹14,000–₹20,000", image: "/jwdelhi.jpg" },
    { id: 6, name: "The Taj Mahal Palace, Mumbai", city: "Mumbai", rating: 4.7, price: "₹24,000–₹32,000", image: "/tajmumbai.jpg" },
    { id: 7, name: "The Oberoi, Mumbai", city: "Mumbai", rating: 4.7, price: "₹18,000–₹27,000", image: "/oberoi.jpg" },
    { id: 8, name: "JW Marriott Mumbai Juhu", city: "Mumbai", rating: 4.6, price: "₹20,000–₹28,000", image: "/jwmumbai.jpg" },
    { id: 9, name: "ITC Maratha, Mumbai", city: "Mumbai", rating: 4.7, price: "₹10,000–₹16,000", image: "/itc.jpg" },
    { id: 10, name: "Trident Hotel, Mumbai", city: "Mumbai", rating: 4.6, price: "₹14,000–₹22,000", image: "/trident.jpg" }
  ];

  const [showDropdown, setShowDropdown] = useState(false);
  const [query, setQuery] = useState("");
  const [filteredHotels, setFilteredHotels] = useState(hotels);

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (wrapperRef.current && !wrapperRef.current.contains(event.target as Node)) {
        setShowDropdown(false);
      }
    }

    // 🔥 IMPORTANT: use "click" not "mousedown"
    document.addEventListener("click", handleClickOutside);
    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, []);

  return (
    <section
      className="relative z-50 h-[85vh] flex items-center justify-center text-center pb-32"
      style={{
        backgroundImage: `
          linear-gradient(rgba(11,15,25,0.75), rgba(11,15,25,0.85)),
          url(${heroBg})
        `,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >

      {/* 🔥 GLASS BOX */}
      <div className="bg-white/5 backdrop-blur-xl border border-white/10 p-10 md:p-12 rounded-3xl shadow-[0_20px_60px_rgba(0,0,0,0.5)] max-w-2xl w-full">

        {/* 🔥 HEADING */}
        <h1 className="text-5xl md:text-6xl font-extrabold tracking-tight text-white mb-4">
          Book Your <span className="text-indigo-400">Perfect Stay</span>
        </h1>

        <p className="text-lg text-gray-300 mb-8">
          Discover luxury hotels, best deals & smarter travel planning
        </p>

        {/* 🔥 SEARCH */}
        <div className="relative" ref={wrapperRef}>
          <div className="flex shadow-2xl rounded-2xl overflow-hidden bg-white border border-gray-200">

            <input
              type="text"
              placeholder="Search hotels, cities..."
              value={query}
              onFocus={() => setShowDropdown(true)}
              onChange={(e) => {
                const value = e.target.value;
                setQuery(value);
                setShowDropdown(true);

                const filtered = hotels.filter(hotel =>
                  hotel.name.toLowerCase().includes(value.toLowerCase()) ||
                  hotel.city.toLowerCase().includes(value.toLowerCase())
                );

                setFilteredHotels(filtered);
              }}
              className="flex-1 px-6 py-4 text-lg outline-none text-gray-800"
            />

            <button className="px-6 bg-gradient-to-r from-indigo-500 to-purple-500 text-white font-semibold hover:from-indigo-600 hover:to-purple-600 transition flex items-center gap-2">
              <Search size={20} /> Search
            </button>
          </div>

          {/* 🔥 DROPDOWN */}
          {showDropdown && (
            <div
              className="absolute w-full bg-white rounded-2xl mt-3 shadow-2xl z-[100] max-h-96 overflow-y-auto border border-gray-200"
              onClick={(e) => e.stopPropagation()}
            >
              {filteredHotels.length > 0 ? (
                filteredHotels.map((hotel) => (
                  <div
                    key={hotel.id}
                    onClick={() => {
                      setShowDropdown(false);
                      navigate(`/hotel/${hotel.id}`);
                    }}
                    className="flex gap-4 p-4 cursor-pointer hover:bg-gray-50 transition items-center"
                  >
                    <img
                      src={hotel.image}
                      alt={hotel.name}
                      className="w-20 h-20 rounded-lg object-cover"
                    />

                    <div className="text-left">
                      <h4 className="font-semibold text-base text-gray-900">
                        {hotel.name}
                      </h4>

                      <p className="text-sm text-gray-500">
                        ⭐ {hotel.rating} • {hotel.price}
                      </p>

                      <p className="text-sm text-gray-400">
                        {hotel.city}
                      </p>
                    </div>
                  </div>
                ))
              ) : (
                <div className="p-4 text-gray-500 text-sm">
                  No results found
                </div>
              )}
            </div>
          )}
        </div>

      </div>
    </section>
  );
};

export default HeroSection;