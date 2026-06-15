// Companies Login Page

import { Link } from "react-router-dom";
import Header from "@/components/Header";
import NavigationBar from "@/components/NavigationBar";
import Footer from "@/components/Footer";
import { useState } from "react";

const SignIn = () => {
  const [loading, setLoading] = useState(false);

  const [form, setForm] = useState({
    email: "",
    password: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setForm((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    try {
      const res = await fetch(
        "https://6773-2406-16c0-11a-1aab-d4a7-7583-b15d-ca10.ngrok-free.app/auth/login",
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
        alert(data.message || "Login failed");
        return;
      }

      // ✅ store token
      localStorage.setItem("token", data.token);

      alert("Login successful!");

      window.location.href = "/";
    } catch (error) {
      alert("Server error or CORS issue");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Header />
      <NavigationBar />

      <div className="w-[90%] max-w-[520px] mx-auto my-10 bg-card p-10 rounded-xl shadow-lg">
        <h2 className="text-xl font-bold mb-6 text-foreground">
          Sign in to manage your property
        </h2>

        <form onSubmit={handleSubmit}>
          <label className="block text-left mb-1.5 text-base font-semibold text-foreground">
            Email
          </label>

          <input
            type="email"
            name="email"
            placeholder="Enter email"
            onChange={handleChange}
            required
            className="w-full px-4 py-3 text-sm mb-5 border-2 border-border rounded-lg bg-background text-foreground outline-none focus:border-primary focus:shadow-[0_0_0_3px_hsl(var(--primary)/0.15)] transition-all"
          />

          <label className="block text-left mb-1.5 text-base font-semibold text-foreground">
            Password
          </label>

          <input
            type="password"
            name="password"
            placeholder="Enter password"
            onChange={handleChange}
            required
            className="w-full px-4 py-3 text-sm mb-5 border-2 border-border rounded-lg bg-background text-foreground outline-none focus:border-primary focus:shadow-[0_0_0_3px_hsl(var(--primary)/0.15)] transition-all"
          />

          <button
            type="submit"
            disabled={loading}
            className="px-5 py-2.5 bg-muted text-foreground font-bold border-none rounded-full cursor-pointer hover:scale-105 hover:bg-secondary hover:text-secondary-foreground transition-all"
          >
            {loading ? "Logging in..." : "Login"}
          </button>
        </form>

        <p className="mt-3 mb-8">
          <a
            href="#"
            className="text-primary font-bold no-underline hover:underline"
          >
            Having trouble signing in?
          </a>
        </p>

        <hr className="border-border my-5" />

        <p className="text-sm mb-5 text-muted-foreground">
          Do you have questions about your property or the extranet? Visit{" "}
          <a href="#" className="text-primary no-underline hover:underline">
            Partner Help
          </a>{" "}
          or ask another question on the{" "}
          <a href="#" className="text-primary no-underline hover:underline">
            Partner Community
          </a>
          .
        </p>

        <Link to="/list-property">
          <button className="w-full border border-border text-lg rounded-lg mt-2 px-4 py-3.5 bg-muted text-foreground font-bold cursor-pointer hover:scale-[1.02] hover:bg-secondary hover:text-secondary-foreground transition-all">
            Create your partner account
          </button>
        </Link>
      </div>

      <Footer />
    </div>
  );
};

export default SignIn;