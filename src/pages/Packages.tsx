import { Link } from "react-router-dom";
import Header from "@/components/Header";
import NavigationBar from "@/components/NavigationBar";
import Footer from "@/components/Footer";

const Packages = () => {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Header />
      <NavigationBar />

      <section
        className="py-20 px-5 text-center text-secondary-foreground"
        style={{
          backgroundImage: "linear-gradient(rgba(0,0,0,0.45),rgba(0,0,0,0.45)), url('https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=1500&q=80')",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div>
          <h1 className="text-3xl md:text-4xl font-black leading-tight mb-5">
            Turn your <br /> Space into a <br /> profitable stay
          </h1>
          <Link to="/list-property" className="inline-block bg-destructive text-destructive-foreground px-8 py-3.5 rounded-full font-bold text-lg no-underline hover:-translate-y-0.5 hover:opacity-90 transition-all">
            Get Started for free
          </Link>
        </div>
      </section>

      <section className="py-10 px-5 flex flex-wrap gap-8 max-w-[1000px] mx-auto justify-between">
        <div className="bg-card p-10 rounded-xl shadow-lg w-[48%] min-w-[280px] hover:-translate-y-2 hover:scale-[1.03] hover:shadow-xl transition-all duration-300">
          <h2 className="text-xl font-bold text-foreground mb-3">Why List with Book My Adda?</h2>
          <ul className="ml-5 text-muted-foreground">
            <li className="mb-1.5">Zero Listing Fees – List your property for free, pay only when you receive bookings.</li>
            <li className="mb-1.5">Boost Occupancy – Get access to thousands of daily active users.</li>
            <li className="mb-1.5">Fair Pricing Model – Our AI helps you manage revenue and price your stay.</li>
            <li className="mb-1.5">Property Management – Update availability, amenities, etc., anytime.</li>
            <li className="mb-1.5">24x7 Support – Dedicated account managers and professional support.</li>
          </ul>
        </div>

        <div className="bg-card p-10 rounded-xl shadow-lg w-[48%] min-w-[280px] hover:-translate-y-2 hover:scale-[1.03] hover:shadow-xl transition-all duration-300">
          <h2 className="text-xl font-bold text-foreground mb-3">How it Works?</h2>
          <ol className="ml-5 text-muted-foreground">
            <li className="mb-1.5">Step 1: Sign Up & Add Your Property</li>
            <li className="mb-1.5">Step 2: Upload High-Quality Photos & Set Details</li>
            <li className="mb-1.5">Step 3: Get Verified & Go Live on Book My Adda</li>
            <li className="mb-1.5">Step 4: Receive Bookings & Manage Calendar</li>
            <li className="mb-1.5">Step 5: Payouts Sent Directly to Your Bank Account</li>
          </ol>
        </div>

        <div className="bg-card p-10 rounded-xl shadow-lg w-[48%] min-w-[280px] hover:-translate-y-2 hover:scale-[1.03] hover:shadow-xl transition-all duration-300">
          <h2 className="text-xl font-bold text-foreground mb-3">Pricing & Commission Model</h2>
          <ul className="ml-5 text-muted-foreground">
            <li className="mb-1.5"><strong>Silver Plan</strong> (Free) – Pay 10–20% commission per booking</li>
            <li className="mb-1.5"><strong>Gold Plan</strong> (₹4999/year) – Featured listing, analytics, support</li>
            <li className="mb-1.5"><strong>Platinum Plan</strong> (₹9999/year) – Top rank, premium support, AI pricing</li>
          </ul>
        </div>

        <div className="bg-card p-10 rounded-xl shadow-lg w-[48%] min-w-[280px] hover:-translate-y-2 hover:scale-[1.03] hover:shadow-xl transition-all duration-300">
          <h2 className="text-xl font-bold text-foreground mb-3">Success Stories</h2>
          <p className="text-muted-foreground">Coming soon...</p>
        </div>

        <div className="w-full flex justify-center mt-5">
          <Link to="/list-property">
            <button className="px-7 py-3.5 text-base bg-destructive text-destructive-foreground border-none rounded-full cursor-pointer font-bold hover:opacity-90 hover:-translate-y-0.5 transition-all">
              Let's get started!
            </button>
          </Link>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Packages;
