import { useEffect, useState } from "react";
import { User } from "lucide-react";
import { Link, useNavigate} from "react-router-dom";

const Header = () => {
  const navigate = useNavigate();
  const scrollToAbout = () => {
    document.getElementById("about-us")?.scrollIntoView({ behavior: "smooth" });
  };

  const [loggedIn, setLoggedIn] = useState<boolean>(() => !!localStorage.getItem("token"));

  const handleSignOut = () => {
    localStorage.removeItem("token");
    setLoggedIn(false);
    navigate("/");
  };

  useEffect(() => {
    const onStorage = (e: StorageEvent) => {
      if (e.key === "token") setLoggedIn(!!e.newValue);
    };

    window.addEventListener("storage", onStorage);
    return () => window.removeEventListener("storage", onStorage);
  }, []);

  return (
    <header className="sticky top-0 z-50 w-full">

      {/* 🔥 MAIN BAR */}
      <div className="w-full bg-[#0B0F19]/90 backdrop-blur-xl border-b border-white/10 shadow-lg">

        <div className="max-w-7xl mx-auto flex items-center justify-between px-10 py-5">

          {/* 🔥 LOGO */}
          <Link to="/" className="no-underline group">
            <h1 className="text-3xl md:text-4xl font-extrabold tracking-wide text-white">
              BOOK MY{" "}
              <span className="bg-gradient-to-r from-indigo-400 to-purple-400 bg-clip-text text-transparent">
                ADDA
              </span>
            </h1>
          </Link>

          {/* 🔥 NAV */}
          <nav className="hidden md:flex items-center gap-10">

            {["Support", "Connect"].map((item) => (
              <button
                key={item}
                className="relative text-lg font-medium text-gray-300 hover:text-white transition group"
              >
                {item}
                <span className="absolute left-0 -bottom-1 w-0 h-[2px] bg-indigo-400 transition-all duration-300 group-hover:w-full"></span>
              </button>
            ))}

            <button
              onClick={scrollToAbout}
              className="relative text-lg font-medium text-gray-300 hover:text-white transition group"
            >
              About
              <span className="absolute left-0 -bottom-1 w-0 h-[2px] bg-indigo-400 transition-all duration-300 group-hover:w-full"></span>
            </button>

            {/* 🔥 LOGIN BUTTON (STRONG CTA) */}
            {!loggedIn && (
              <Link to="/login">
                <button className="px-6 py-3 rounded-xl text-lg font-semibold text-white bg-gradient-to-r from-indigo-500 to-purple-500 hover:from-indigo-600 hover:to-purple-600 transition shadow-lg hover:shadow-indigo-500/40">
                  Login
                </button>
              </Link>
            )}

            {/* 🔥 PROFILE (visible only when logged in) */}
            {loggedIn && (
              

              <div className="flex items-center gap-3">
                {/* <button
                  onClick={() => navigate("/profile")}
                  className="px-4 py-2 rounded-md border border-border bg-card hover:bg-muted transition"
                >
                  Profile
                </button> */}

                <button className="flex items-center gap-2 px-5 py-3 rounded-xl bg-white/5 border border-white/10 text-gray-300 hover:text-white hover:bg-white/10 transition">
                  <User size={20} />
                  <span className="font-medium text-lg">Profile</span>
                </button>

                <button
                  onClick={handleSignOut}
                  className="px-4 py-2 rounded-md bg-red-600 text-white hover:bg-red-700 transition"
                >
                  Sign Out
                </button>
              </div>
            )}

          </nav>
        </div>
      </div>

      {/* 🔥 SUBTLE GLOW LINE */}
      <div className="h-[2px] w-full bg-gradient-to-r from-transparent via-indigo-500/40 to-transparent"></div>

    </header>
  );
};

export default Header;