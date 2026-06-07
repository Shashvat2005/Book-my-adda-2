import { MapPin } from "lucide-react";

import { useNavigate } from "react-router-dom";

const hotels = [
  { id: 1, name: "The Leela Palace", city: "Delhi", price: "₹20,000", image: "/leela.jpg" },
  { id: 2, name: "The Imperial", city: "Delhi", price: "₹26,000", image: "/imperial.jpg" },
  { id: 3, name: "Taj Palace", city: "Delhi", price: "₹11,000", image: "/tajdelhi.jpg" },
  { id: 4, name: "Shangri-La", city: "Delhi", price: "₹9,000", image: "/shangrila.jpg" },
  { id: 5, name: "JW Marriott", city: "Delhi", price: "₹14,000", image: "/jwdelhi.jpg" },
  { id: 6, name: "Taj Mahal Palace", city: "Mumbai", price: "₹24,000", image: "/tajmumbai.jpg" },
  { id: 7, name: "The Oberoi", city: "Mumbai", price: "₹18,000", image: "/oberoi.jpg" },
  { id: 8, name: "JW Marriott Juhu", city: "Mumbai", price: "₹20,000", image: "/jwmumbai.jpg" },
  { id: 9, name: "ITC Maratha", city: "Mumbai", price: "₹10,000", image: "/itc.jpg" },
  { id: 10, name: "Trident Hotel", city: "Mumbai", price: "₹14,000", image: "/trident.jpg" },
];

const HotDeals = () => {
  const navigate = useNavigate();

  return (
    <section className="relative py-24 px-6 bg-gradient-to-br from-background via-muted to-background overflow-hidden">

      {/* 🔥 background glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-primary/20 blur-[140px] rounded-full"></div>

      <div className="relative max-w-7xl mx-auto">

        {/* 🔥 HEADING */}
        <h2 className="text-4xl md:text-5xl font-extrabold text-center mb-4">
          Explore <span className="text-primary">Premium Hotels</span>
        </h2>

        <p className="text-center text-muted-foreground mb-14 text-lg">
          Handpicked luxury stays with the best prices and experiences.
        </p>

        {/* 🔥 GRID */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">

          {hotels.map((hotel) => (
            <div
              key={hotel.id}
              onClick={() => navigate(`/hotel/${hotel.id}`)}
              className="group relative cursor-pointer rounded-2xl overflow-hidden"
            >

              {/* border glow */}
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-primary/40 to-transparent opacity-0 group-hover:opacity-100 transition duration-500"></div>

              {/* card */}
              <div className="relative bg-card/70 backdrop-blur-xl border border-white/10 rounded-2xl overflow-hidden shadow-lg group-hover:shadow-2xl transition duration-500">

                {/* IMAGE */}
                <div className="relative overflow-hidden">
                  <img
                    src={hotel.image}
                    alt={hotel.name}
                    className="w-full h-60 object-cover group-hover:scale-110 transition duration-700"
                  />

                  {/* overlay gradient */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/10 to-transparent"></div>

                  {/* price floating */}
                  <div className="absolute bottom-3 right-3 bg-white/90 backdrop-blur px-3 py-1 rounded-lg text-sm font-semibold shadow">
                    {hotel.price}
                  </div>
                </div>

                {/* CONTENT */}
                <div className="p-5">

                  <h3 className="text-lg font-semibold text-foreground group-hover:text-primary transition">
                    {hotel.name}
                  </h3>

                  <p className="text-sm text-muted-foreground flex items-center gap-1 mt-1">
                    <MapPin size={14} /> {hotel.city}
                  </p>

                  {/* subtle CTA */}
                  <div className="mt-4 text-sm text-primary font-medium opacity-0 group-hover:opacity-100 transition">
                    View Details →
                  </div>

                </div>

              </div>
            </div>
          ))}

        </div>
      </div>
    </section>
  );
};

export default HotDeals;