import { Info } from "lucide-react";

const AboutUs = () => {
  return (
    <section
      id="about-us"
      className="relative py-24 px-6 bg-[#F8FAFC] overflow-hidden"
    >

      {/* 🔥 SOFT LIGHT GLOW */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[500px] h-[300px] bg-indigo-200/40 blur-[120px] rounded-full"></div>

      <div className="relative max-w-6xl mx-auto">

        {/* 🔥 HEADING */}
        <h2 className="text-4xl md:text-5xl font-extrabold text-center mb-14 flex items-center justify-center gap-3 text-[#0F172A]">
          <Info size={34} className="text-indigo-500" />
          About <span className="text-indigo-500">Book My Adda</span>
        </h2>

        {/* 🔥 MAIN CONTAINER */}
        <div className="bg-white border border-gray-200 p-10 md:p-14 rounded-3xl shadow-xl">

          {/* INTRO */}
          <p className="text-lg text-gray-600 leading-relaxed max-w-3xl mx-auto text-center">
            <span className="text-[#0F172A] font-semibold text-2xl block mb-4">
              Your Travel, Your Adda
            </span>
            We’re building a smarter way to explore the world—combining powerful
            AI, curated deals, and seamless booking into one unified experience.
            No chaos. Just clarity, speed, and better decisions.
          </p>

          {/* 🔥 GRID */}
          <div className="grid md:grid-cols-3 gap-8 mt-14">

            {[
              {
                title: "Our Mission",
                text: "To simplify travel booking with transparency, personalization, and powerful insights.",
              },
              {
                title: "Our Vision",
                text: "To become India's most trusted and intelligent travel platform.",
              },
              {
                title: "Who We Serve",
                text: "B2B: Corporates & agencies\nB2C: Individual travelers",
              },
            ].map((item) => (
              <div
                key={item.title}
                className="group p-6 rounded-2xl bg-white border border-gray-200 hover:shadow-xl hover:-translate-y-1 transition duration-300"
              >
                <h3 className="text-xl font-semibold text-[#0F172A] mb-3">
                  {item.title}
                </h3>

                <p className="text-sm text-gray-600 whitespace-pre-line leading-relaxed">
                  {item.text}
                </p>
              </div>
            ))}

          </div>

          {/* 🔥 CTA */}
          <div className="text-center mt-14">
            <p className="text-lg text-gray-600 mb-4">
              Start your journey with us today ✈️
            </p>

            <button className="px-8 py-3 rounded-xl text-lg font-semibold text-white bg-gradient-to-r from-indigo-500 to-purple-500 hover:from-indigo-600 hover:to-purple-600 transition shadow-lg hover:shadow-indigo-500/30">
              Explore Now
            </button>
          </div>

        </div>
      </div>
    </section>
  );
};

export default AboutUs;