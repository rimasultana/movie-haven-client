import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-hot-toast";
import { FaGoogle } from "react-icons/fa";

const LoginPage = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = async (e) => {
    e.preventDefault();

    // Example login logic (you can replace this with actual authentication logic)
    if (email === "test@example.com" && password === "password123") {
      toast.success("Login successful!");
      navigate("/"); // Navigate to home or desired route
    } else {
      toast.error("Invalid email or password. Please try again.");
    }
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100">
      <div className="w-full max-w-md p-6 bg-white rounded-lg shadow-lg">
        <h2 className="text-3xl font-bold text-center mb-6">Login</h2>
        <form onSubmit={handleLogin}>
          <div className="mb-4">
            <label className="block text-gray-700">Email</label>
            <input
              type="email"
              className="input input-bordered w-full"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your email"
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700">Password</label>
            <input
              type="password"
              className="input input-bordered w-full"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Enter your password"
            />
          </div>
          <div className="flex justify-between items-center mb-4">
            <button
              type="button"
              className="text-primary text-sm"
              onClick={() => toast.info("Redirecting to Forgot Password page")}
            >
              Forget Password?
            </button>
            <button type="submit" className="btn btn-primary w-1/2">
              Login
            </button>
          </div>
        </form>
        <div className="text-center mb-4">
          <p className="text-sm">
            Don't have an account?{" "}
            <a href="/register" className="text-primary hover:underline">
              Register here
            </a>
          </p>
        </div>

        {/* Google Login Button */}
        <div className="text-center mt-4">
          {/* <GoogleLogin
            onSuccess={(response) => {
              toast.success("Logged in with Google!");
              navigate("/"); // Navigate after Google login
            }}
            onError={() => toast.error("Google login failed!")}
          /> */}
          <div className="flex justify-center mt-4">
            <button className="btn btn-outline btn-secondary">
              <FaGoogle className="mr-2" />
              Login with Google
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
