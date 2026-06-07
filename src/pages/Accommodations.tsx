import { useState } from "react";
import Header from "@/components/Header";
import NavigationBar from "@/components/NavigationBar";
import Footer from "@/components/Footer";
import { SlidersHorizontal, Search } from "lucide-react";
import heroBg from "@/assets/hero-bg.jpg";

const Accommodations = () => {
  const [filterOpen, setFilterOpen] = useState(false);

  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Header />
      <NavigationBar />

      {/* Hero search section with hotel room background */}
      <section
        className="relative py-20 px-4"
        style={{
          backgroundImage: `linear-gradient(rgba(0,0,0,0.35), rgba(0,0,0,0.35)), url(${heroBg})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="max-w-5xl mx-auto">
          {/* FIND MY HOTEL heading */}
          <div className="flex items-center gap-4 mb-6">
            <span className="text-3xl md:text-4xl font-black text-primary-foreground tracking-wider">
              FIND MY
            </span>
            <select className="text-3xl md:text-4xl font-black bg-dark-navy/60 text-dark-navy-foreground border-none outline-none cursor-pointer rounded px-3 py-1">
              <option value="hotel">HOTEL</option>
              <option value="stay">STAY</option>
            </select>
            <button
              onClick={() => setFilterOpen(true)}
              className="ml-auto flex items-center gap-2 px-5 py-2.5 rounded-lg font-semibold text-sm bg-gradient-to-r from-brand-orange to-pink-300 text-brand-orange-foreground hover:opacity-90 transition-all"
            >
              <SlidersHorizontal size={18} /> FILTER
            </button>
          </div>

          {/* Search inputs */}
          <div className="flex flex-wrap gap-3">
            <input
              type="text"
              placeholder="Location or Hotel (City, Area)"
              className="flex-1 min-w-[160px] px-4 py-3 rounded-lg border-none bg-card text-foreground text-sm outline-none shadow-sm"
            />
            <input
  type="date"
  className="flex-1 min-w-[140px] px-4 py-3 rounded-lg border-none bg-card text-foreground text-sm outline-none shadow-sm"
/>

<input
  type="date"
  className="flex-1 min-w-[140px] px-4 py-3 rounded-lg border-none bg-card text-foreground text-sm outline-none shadow-sm"
/>
            <input
              type="number"
              placeholder="No. of Rooms"
              className="flex-1 min-w-[120px] px-4 py-3 rounded-lg border-none bg-card text-foreground text-sm outline-none shadow-sm"
            />
            <input
              type="number"
              placeholder="No. of Guests"
              className="flex-1 min-w-[120px] px-4 py-3 rounded-lg border-none bg-card text-foreground text-sm outline-none shadow-sm"
            />
          </div>

          {/* Submit button */}
          <div className="flex justify-center mt-6">
            <button className="flex items-center gap-2 px-10 py-3 bg-brand-orange text-brand-orange-foreground rounded-full font-bold text-lg shadow-lg hover:-translate-y-0.5 hover:shadow-xl transition-all duration-300">
              <Search size={20} /> SUBMIT
            </button>
          </div>
        </div>
      </section>

      {/* Filter popup */}
      {filterOpen && (
        <>
          <div className="fixed inset-0 bg-black/40 z-[999]" onClick={() => setFilterOpen(false)} />
          <div className="fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-card rounded-2xl p-8 z-[1000] shadow-2xl max-h-[80vh] overflow-y-auto w-[90%] max-w-[900px] animate-fade-in-up">
            <h3 className="flex justify-between items-center mb-6 text-xl font-bold text-foreground">
              Filter By:
              <button className="text-2xl cursor-pointer text-foreground bg-transparent border-none" onClick={() => setFilterOpen(false)}>&times;</button>
            </h3>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
              {[
                { title: "Popular filters", items: ["Free cancellation", "Breakfast included", "Entire homes & apartments", "Hotels", "Air conditioning"] },
                { title: "Property type", items: ["Entire homes & apartments", "Apartments", "Hotels", "Resorts", "Bed and breakfasts"] },
                { title: "Meals", items: ["Self catering", "Breakfast included", "All-inclusive", "Breakfast & lunch", "Breakfast & dinner"] },
                { title: "Bed preference", items: ["Twin beds", "Double bed"] },
                { title: "Distance from centre", items: ["< 1 km", "< 3 km", "< 5 km"] },
                { title: "Review score", items: ["Superb: 9+", "Very good: 8+", "Pleasant: 7+"] },
                { title: "Facilities", items: ["Free WiFi", "Parking", "Non-smoking rooms", "Family rooms", "Fitness centre"] },
                { title: "Room facilities", items: ["Air conditioning", "Kitchen", "Washing machine", "Hot tub", "Private pool"] },
              ].map((section) => (
                <div key={section.title}>
                  <strong className="block mb-2 text-foreground text-sm">{section.title}</strong>
                  {section.items.map((item) => (
                    <label key={item} className="block mb-1 text-sm cursor-pointer text-muted-foreground">
                      <input type="checkbox" className="mr-2" /> {item}
                    </label>
                  ))}
                </div>
              ))}
            </div>
            <button
              onClick={() => setFilterOpen(false)}
              className="block mx-auto mt-6 bg-destructive text-destructive-foreground border-none px-8 py-2.5 rounded-lg font-semibold cursor-pointer hover:opacity-90 transition-opacity"
            >
              Close
            </button>
          </div>
        </>
      )}

      <div className="flex-1" />
      <Footer />
    </div>
  );
};

export default Accommodations;
