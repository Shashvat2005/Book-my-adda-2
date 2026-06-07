import { Bot, Tag, BarChart3, Brain, MapPin } from "lucide-react";

const options = [
  {
    icon: Tag,
    label: "Best Deals",
    description: "Get curated offers and price drops for top destinations.",
  },
  {
    icon: BarChart3,
    label: "Hotel Comparisons",
    description: "Compare amenities, ratings and prices at a glance.",
  },
  {
    icon: Brain,
    label: "AI Recommendations",
    description: "Personalized suggestions based on your preferences.",
  },
  {
    icon: MapPin,
    label: "Travel Planning",
    description: "Smart itineraries and route suggestions for your trip.",
  },
];

const TrippySection = () => {
  return (
    <section className="relative py-20 px-6 overflow-hidden bg-gradient-to-br from-background via-muted to-background">
      
      {/* Glow background */}
      <div className="absolute -top-20 left-1/2 -translate-x-1/2 w-[500px] h-[500px] bg-primary/20 blur-[120px] rounded-full"></div>

      <div className="relative max-w-6xl mx-auto text-center">

        {/* Heading */}
        <h2 className="text-3xl md:text-5xl font-extrabold text-foreground flex items-center justify-center gap-3 mb-4">
          <div className="p-3 rounded-xl bg-primary/10 backdrop-blur-md">
            <Bot size={32} />
          </div>
          <span>
            Meet <span className="text-primary">Trippy</span>
          </span>
        </h2>

        <p className="text-muted-foreground text-lg md:text-xl mb-12 max-w-2xl mx-auto">
          Your AI-powered travel companion for smarter bookings, better deals,
          and seamless trip planning.
        </p>

        {/* Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
          {options.map(({ icon: Icon, label, description }) => (
            <div
              key={label}
              className="group relative p-[1px] rounded-xl bg-gradient-to-br from-primary/40 to-transparent hover:from-primary transition"
            >
              <div className="flex flex-col items-center gap-4 p-6 rounded-xl bg-card/70 backdrop-blur-xl border border-white/10 h-full transition group-hover:scale-[1.03] group-hover:shadow-2xl">

                <div className="bg-primary/10 text-primary rounded-full p-4 group-hover:scale-110 transition">
                  <Icon size={22} />
                </div>

                <div className="text-base font-semibold text-foreground">
                  {label}
                </div>

                <p className="text-sm text-muted-foreground text-center">
                  {description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="mt-14">
          <a
            href="#"
            className="relative inline-flex items-center gap-2 px-8 py-3 text-lg font-semibold rounded-lg bg-primary text-primary-foreground shadow-lg hover:scale-105 transition-transform duration-200"
          >
            <span className="absolute inset-0 bg-white/10 blur-lg opacity-0 hover:opacity-100 transition"></span>
            Try Trippy →
          </a>
        </div>
      </div>
    </section>
  );
};

export default TrippySection;