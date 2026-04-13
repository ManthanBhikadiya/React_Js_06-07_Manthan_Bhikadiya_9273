import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

const Login = () => {
  const [formData, setFormData] = useState({ email: "", password: "" });
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const { login } = useAuth();
  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    setLoading(true);

    try {
      const res = await fetch("http://localhost:5000/api/auth/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const data = await res.json()

      if (!res.ok) {
        throw new Error(data.message || "Login failed");
      }

      login(data.user, data.token);
      navigate("/");
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div>
      <section className="w-full bg-[#f6f3ef] py-12">
        <div className="max-w-7xl mx-auto px-6">
          <div className="relative bg-[#5a1f0f] rounded-[40px] py-28 text-center overflow-hidden">
            <h1 className="text-6xl font-serif text-white tracking-wide mb-6">
              LOGIN
            </h1>
            <p className="text-white/80 text-lg">
              Home <span className="mx-2">/</span> Login
            </p>
          </div>
        </div>
      </section>

      <section className="w-full bg-[#f6f3ef] py-20">
        <div className="max-w-md mx-auto px-6">
          <div className="bg-[#efe7e1] p-10 rounded-3xl">
            <h3 className="text-4xl font-serif text-[#3b1d14] mb-8 text-center">
              Welcome Back
            </h3>

            {error && (
              <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded-lg mb-6">
                {error}
              </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <input
                  type="email"
                  name="email"
                  placeholder="Email Address"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full bg-white px-5 py-3 rounded-full outline-none"
                  required
                />
              </div>

              <div>
                <input
                  type="password"
                  name="password"
                  placeholder="Password"
                  value={formData.password}
                  onChange={handleChange}
                  className="w-full bg-white px-5 py-3 rounded-full outline-none"
                  required
                />
              </div>

              <button
                type="submit"
                disabled={loading}
                className="w-full bg-[#c65f2f] hover:bg-[#a84b27] text-white py-4 rounded-full transition disabled:opacity-50 cursor-pointer"
              >
                {loading ? "Logging in..." : "Login"}
              </button>
            </form>

            <p className="text-center text-gray-600 mt-6">
              Don't have an account?{" "}
              <Link to="/register" className="text-[#c65f2f] font-semibold hover:underline">
                Register here
              </Link>
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Login;