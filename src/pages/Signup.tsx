import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Eye, EyeOff } from "lucide-react";


const BACKEND_URL = import.meta.env.VITE_BACKEND_URL;

const Signup = () => {
  const [showPwd, setShowPwd] = useState(false);
  const [loading, setLoading] = useState(false);
  const [form, setForm] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
  });

  const navigate = useNavigate();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
  e.preventDefault();
  setLoading(true);

  try {
    const res = await fetch(
      BACKEND_URL + "/auth/register",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(form),
      }
    );

    const data = await res.json();

    if (!res.ok) {
      alert(data.message || "Signup failed");
      return;
    }

    alert("Signup successful!");
    window.location.href = "/login";
  } catch (error) {
    alert("Server error");
  } finally {
    setLoading(false);
  }
};

  return (
    <div
      className="min-h-screen w-full flex justify-center items-center p-5"
      style={{
        background: `linear-gradient(rgba(30, 58, 138, 0.65), rgba(0, 198, 255, 0.55)),
          url('https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=1500&q=80')
          center/cover no-repeat`,
      }}
    >
      <div className="w-full max-w-[480px] min-h-[500px] p-10 text-center bg-card/40 rounded-2xl shadow-2xl backdrop-blur-sm animate-auth-fade-in">
        {/* <h2 className="text-2xl font-bold mb-8 text-foreground tracking-wider">Create Your Account</h2> */}

        <div className="flex items-center gap-6 mb-8">
          <button
            type="button"
            onClick={() => navigate(-1)}
            className="inline-flex items-center gap-2 px-3 py-1.5 text-sm font-medium text-foreground bg-card/60 border border-border rounded-md hover:bg-muted transition"
          >
            ← Back
          </button>

          <h2 className="text-2xl font-bold text-foreground tracking-wider">
            Create Your Account
          </h2>
        </div>

        <form onSubmit={handleSubmit}>
          <div className="mb-5 text-left">
            <label className="block mb-1.5 text-foreground font-medium text-sm">First Name</label>
            <input name="firstName" onChange={handleChange} required className="w-full px-4 py-3.5 border-2 border-border rounded-lg bg-card text-foreground text-base outline-none focus:border-primary focus:shadow-[0_0_8px_hsl(var(--primary)/0.3)] transition-all" />
          </div>

          <div className="mb-5 text-left">
            <label className="block mb-1.5 text-foreground font-medium text-sm">Last Name</label>
            <input name="lastName" onChange={handleChange} required className="w-full px-4 py-3.5 border-2 border-border rounded-lg bg-card text-foreground text-base outline-none focus:border-primary focus:shadow-[0_0_8px_hsl(var(--primary)/0.3)] transition-all" />
          </div>

          <div className="mb-5 text-left">
            <label className="block mb-1.5 text-foreground font-medium text-sm">Email</label>
            <input name="email" type="email" onChange={handleChange} required className="w-full px-4 py-3.5 border-2 border-border rounded-lg bg-card text-foreground text-base outline-none focus:border-primary focus:shadow-[0_0_8px_hsl(var(--primary)/0.3)] transition-all" />
          </div>

          <div className="mb-5 text-left relative">
            <label className="block mb-1.5 text-foreground font-medium text-sm">Password</label>
            <input
              name="password"
              type={showPwd ? "text" : "password"}
              onChange={handleChange}
              required
              className="w-full px-4 py-3.5 border-2 border-border rounded-lg bg-card text-foreground text-base outline-none focus:border-primary focus:shadow-[0_0_8px_hsl(var(--primary)/0.3)] transition-all pr-12"
            />
            <button
              type="button"
              className="absolute right-3 top-[38px] bg-transparent border-none cursor-pointer text-muted-foreground"
              onClick={() => setShowPwd((prev) => !prev)}
            >
              {showPwd ? <EyeOff size={18} /> : <Eye size={18} />}
            </button>
          </div>

          <button
            type="submit"
            className="w-full py-3.5 bg-gradient-to-r from-primary to-accent text-primary-foreground text-base font-bold border-none rounded-full cursor-pointer mt-2 hover:-translate-y-0.5 hover:shadow-lg transition-all disabled:opacity-70 disabled:cursor-not-allowed"
            disabled={loading}
          >
            {loading ? "Signing up..." : "Sign Up"}
          </button>
        </form>

        <div className="mt-5 text-sm text-foreground">
          Already have an account?{" "}
          <Link to="/login" className="text-primary font-semibold no-underline hover:underline">
            Login
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Signup;
