import { useState } from "react";
import { Link } from "react-router-dom";

const Login = () => {
  const [form, setForm] = useState({ email: "", password: "" });
  const [loading, setLoading] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      alert("Login feature coming soon! Backend integration needed.");
    }, 500);
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
      <div className="w-full max-w-[480px] min-h-[420px] p-10 text-center bg-card/40 rounded-2xl shadow-2xl backdrop-blur-sm animate-auth-fade-in">
        <h2 className="text-2xl font-bold mb-8 text-foreground tracking-wider">Login</h2>

        <form onSubmit={handleSubmit}>
          <div className="mb-5 text-left">
            <label className="block mb-1.5 text-foreground font-medium text-sm">Email</label>
            <input
              name="email"
              type="email"
              required
              onChange={handleChange}
              className="w-full px-4 py-3.5 border-2 border-border rounded-lg bg-card text-foreground text-base outline-none focus:border-primary focus:shadow-[0_0_8px_hsl(var(--primary)/0.3)] transition-all"
            />
          </div>

          <div className="mb-5 text-left">
            <label className="block mb-1.5 text-foreground font-medium text-sm">Password</label>
            <input
              name="password"
              type="password"
              required
              onChange={handleChange}
              className="w-full px-4 py-3.5 border-2 border-border rounded-lg bg-card text-foreground text-base outline-none focus:border-primary focus:shadow-[0_0_8px_hsl(var(--primary)/0.3)] transition-all"
            />
          </div>

          <button
            type="submit"
            className="w-full py-3.5 bg-gradient-to-r from-primary to-accent text-primary-foreground text-base font-bold border-none rounded-full cursor-pointer mt-2 hover:-translate-y-0.5 hover:shadow-lg transition-all disabled:opacity-70 disabled:cursor-not-allowed"
            disabled={loading}
          >
            {loading ? "Logging in..." : "Login"}
          </button>
        </form>

        <div className="mt-5">
          <button className="w-full py-3.5 bg-card text-foreground border-2 border-border rounded-full text-sm font-semibold cursor-pointer hover:bg-muted hover:-translate-y-0.5 transition-all">
            Sign in with Google
          </button>
        </div>

        <div className="mt-5 text-sm text-foreground">
          Don't have an account?{" "}
          <Link to="/signup" className="text-primary font-semibold no-underline hover:underline">
            Sign up
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Login;
