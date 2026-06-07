import { Link } from "react-router-dom";
import NavigationBar from "@/components/NavigationBar";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import { Check, X } from "lucide-react";

const features = [
  { name: "Listing Fee", silver: "₹0", gold: "₹4,999/year", platinum: "₹9,999/year" },
  { name: "Commission", silver: "7% per booking", gold: "5% per booking", platinum: "3% per booking" },
  { name: "Featured Listing", silver: false, gold: true, platinum: { value: true, note: "(Homepage & Top Rankings)" } },
  { name: "Advanced Analytics", silver: false, gold: true, platinum: true },
  { name: "Customer Support", silver: "Standard", gold: "Priority", platinum: "24/7 dedicated manager" },
  { name: "Marketing Boost", silver: false, gold: true, platinum: { value: true, note: "Ads & Promotions" } },
  { name: "Cancellation Flexibility", silver: "Standard", gold: "Medium", platinum: "High" },
];

const renderCell = (value: boolean | string | { value: boolean; note: string }) => {
  if (typeof value === "boolean") {
    return value ? (
      <div className="flex flex-col items-center">
        <span className="text-green-400 text-lg">✅</span>
      </div>
    ) : (
      <span className="text-red-400 text-lg">❌</span>
    );
  }
  if (typeof value === "object") {
    return (
      <div className="flex flex-col items-center">
        <span className="text-green-400 text-lg">✅</span>
        <small className="text-xs text-cyan-300 mt-1">{value.note}</small>
      </div>
    );
  }
  return <span className="text-dark-navy-foreground font-medium">{value}</span>;
};

const Pricing = () => {
  return (
    <div className="min-h-screen flex flex-col bg-dark-navy">
      <Header />
      <NavigationBar />

      {/* Hero Section */}
      <div className="text-center py-10 px-4">
        <h2 className="text-3xl md:text-4xl font-extrabold text-dark-navy-foreground mb-3">
          Maximize your Bookings - Choose the best Plan for You!
        </h2>
        <p className="text-lg text-dark-navy-foreground/70">
          Flexible plans for every host, from free to premium promotions!!
        </p>
      </div>

      <div className="flex-1 flex items-start justify-center pb-10 px-4">
        <div
          className="w-full max-w-[900px] rounded-2xl overflow-hidden shadow-2xl border border-dark-navy-border"
          style={{
            background: "linear-gradient(180deg, hsl(260 60% 15% / 0.3), hsl(222 47% 8%))",
            boxShadow: "0 0 60px hsl(260 60% 40% / 0.15), 0 0 120px hsl(260 60% 40% / 0.05)",
          }}
        >
          <table className="w-full border-collapse">
            <thead>
              <tr>
                <th className="py-5 px-6 text-left bg-primary text-primary-foreground font-bold text-lg rounded-tl-xl">
                  Feature
                </th>
                <th className="py-5 px-4 text-center">
                  <div className="inline-block px-6 py-3 rounded-xl" style={{ background: "var(--silver-gradient, linear-gradient(135deg, #c0c0c0, #e8e8e8))" }}>
                    <div className="text-lg font-bold text-gray-800 flex items-center justify-center gap-1">
                      🥈 Silver <span className="w-2 h-2 rounded-full bg-cyan-400 ml-1" />
                    </div>
                    <div className="text-xs text-gray-600">Basic</div>
                  </div>
                </th>
                <th className="py-5 px-4 text-center">
                  <div className="inline-block px-6 py-3 rounded-xl" style={{ background: "var(--gold-gradient, linear-gradient(135deg, #ffd700, #ffec80))" }}>
                    <div className="text-lg font-bold text-gray-800 flex items-center justify-center gap-1">
                      👑 Gold <span className="w-2 h-2 rounded-full bg-cyan-400 ml-1" />
                    </div>
                    <div className="text-xs text-gray-600">Popular</div>
                  </div>
                </th>
                <th className="py-5 px-4 text-center rounded-tr-xl">
                  <div className="inline-block px-6 py-3 rounded-xl" style={{ background: "var(--platinum-gradient, linear-gradient(135deg, #e5e4e2, #ffffff))" }}>
                    <div className="text-lg font-bold text-gray-800 flex items-center justify-center gap-1">
                      💎 Platinum <span className="w-2 h-2 rounded-full bg-cyan-400 ml-1" />
                    </div>
                    <div className="text-xs text-gray-600">Premium</div>
                  </div>
                </th>
              </tr>
            </thead>
            <tbody>
              {features.map((feature, i) => (
                <tr key={i} className="border-t border-dark-navy-border hover:bg-dark-navy-card/50 transition-colors">
                  <td className="py-4 px-6 text-left font-semibold text-dark-navy-foreground">{feature.name}</td>
                  <td className="py-4 px-4 text-center">{renderCell(feature.silver)}</td>
                  <td className="py-4 px-4 text-center">{renderCell(feature.gold)}</td>
                  <td className="py-4 px-4 text-center">{renderCell(feature.platinum)}</td>
                </tr>
              ))}
            </tbody>
          </table>

          <div className="flex justify-center py-8">
            <button className="px-12 py-4 bg-destructive text-destructive-foreground rounded-full font-bold text-lg tracking-wider shadow-lg hover:-translate-y-1 hover:shadow-xl transition-all duration-300">
              Continue to Pay
            </button>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Pricing;
