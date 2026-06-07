import Header from "@/components/Header";
import NavigationBar from "@/components/NavigationBar";
import Footer from "@/components/Footer";

const Flights = () => {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Header />
      <NavigationBar />

      <div className="flex-1 flex justify-center items-center min-h-[60vh] bg-gradient-to-br from-primary/10 to-accent/10">
        <div className="bg-card/80 backdrop-blur-sm rounded-2xl px-16 py-14 text-center shadow-xl border border-border">
          <h1 className="text-4xl font-black text-foreground mb-3">Coming Soon!</h1>
          <p className="text-muted-foreground mt-2">Flights booking will be available shortly.</p>
          <button className="mt-6 bg-primary text-primary-foreground border-none px-9 py-3.5 rounded-full font-bold text-lg cursor-pointer shadow-lg hover:-translate-y-0.5 hover:shadow-xl transition-all">
            Notify Me
          </button>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Flights;
