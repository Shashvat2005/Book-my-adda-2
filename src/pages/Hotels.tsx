import Header from "@/components/Header";
import NavigationBar from "@/components/NavigationBar";
import Footer from "@/components/Footer";

const Hotels = () => {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Header />
      <NavigationBar />

      <div className="w-[90%] max-w-[1200px] mx-auto my-5 bg-card p-5 rounded-lg">
        <header className="relative mb-5">
          <h1 className="text-2xl font-bold text-foreground">Hotel Olive Aero Suites</h1>
          <p className="text-sm text-muted-foreground mb-2">Address Line Here, City, Country</p>
          <div className="absolute top-0 right-2 bg-muted p-3 rounded-lg text-center w-[150px]">
            <h4 className="text-xs font-bold text-foreground mb-1">TRIPPY'S TRUST SCORE</h4>
            <div className="text-2xl text-primary font-bold">10</div>
            <p className="text-xs text-muted-foreground">Exceptional</p>
          </div>
        </header>

        <section className="bg-accent/10 p-4 rounded-lg mb-8">
          <div className="flex gap-5">
            <div className="flex-[2] bg-muted h-[250px] flex justify-center items-center rounded-lg text-muted-foreground">
              Main Image
            </div>
            <div className="flex-1 flex flex-col gap-2">
              {["Slide 1", "Slide 2", "Slide 3", "Slide 4"].map((s) => (
                <div key={s} className="bg-muted h-[60px] flex justify-center items-center rounded text-muted-foreground text-sm">
                  {s}
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="flex gap-8">
          <div className="flex-[2]">
            <h2 className="text-lg font-bold text-foreground mb-3">Most Popular Facilities</h2>
            <div className="bg-muted/50 min-h-[60px] rounded-lg mb-4 p-4" />

            <div className="flex justify-between items-center mb-3">
              <h2 className="text-lg font-bold text-foreground">Availability</h2>
              <button className="px-4 py-2 bg-primary text-primary-foreground rounded-lg text-sm font-semibold hover:opacity-90 transition-opacity">
                Change Search
              </button>
            </div>
            <div className="bg-muted/50 min-h-[60px] rounded-lg mb-4 p-4" />

            <h2 className="text-lg font-bold text-foreground mt-8 mb-3">House Rules</h2>
            <div className="bg-muted/50 min-h-[60px] rounded-lg p-4" />
          </div>

          <div className="flex-1">
            <h2 className="text-lg font-bold text-foreground mb-3">Property Highlights</h2>
            <div className="bg-muted/50 min-h-[60px] rounded-lg mb-4 p-4" />

            <button className="w-full py-3 bg-primary text-primary-foreground rounded-lg font-bold text-base hover:opacity-90 transition-opacity mb-4">
              Reserve
            </button>

            <h2 className="text-lg font-bold text-foreground mb-3">Guest Reviews</h2>
            <div className="bg-muted/50 min-h-[60px] rounded-lg p-4" />
          </div>
        </section>
      </div>

      <Footer />
    </div>
  );
};

export default Hotels;
