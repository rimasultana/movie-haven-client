import { useContext, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { toast } from "react-hot-toast";
import { FaGoogle } from "react-icons/fa";
import { AuthContext } from "../Provider/AuthProvider";

const RegisterPage = () => {
  const navigate = useNavigate();
  const { createUser, updateUserProfile, googleSignIn } =
    useContext(AuthContext);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [photoURL, setPhotoURL] = useState("");
  const [password, setPassword] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const location = useLocation();
  const from = location.state?.from?.pathname || "/";

  const validatePassword = (password) => {
    const hasUpperCase = /[A-Z]/.test(password);
    const hasLowerCase = /[a-z]/.test(password);
    const isValidLength = password.length >= 6;

    if (!hasUpperCase || !hasLowerCase || !isValidLength) {
      setPasswordError(
        "Password must have at least one uppercase letter, one lowercase letter, and be at least 6 characters long."
      );
      return false;
    }
    setPasswordError("");
    return true;
  };

  const handleRegister = async (e) => {
    e.preventDefault();
    if (!validatePassword(password)) {
      return;
    }
    createUser(email, password)
      .then(() => {
        updateUserProfile(name, photoURL)
          .then(() => {
            navigate(from);
            toast.success("Registration successful!");
          })
          .catch((error) => error.message);
      })
      .catch((error) => toast.error(error.message));
  };
  const handleGoogleLogin = () => {
    googleSignIn()
      .then(() => {
        toast.success("Login successful!");
        navigate(from);
      })
      .catch((error) => console.log(error));
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100">
      <div className="w-full max-w-md p-6 bg-white rounded-lg shadow-lg">
        <h2 className="text-3xl font-bold text-center mb-6">Register</h2>
        <form onSubmit={handleRegister}>
          <div className="mb-4">
            <label className="block text-gray-700">Name</label>
            <input
              type="text"
              className="input input-bordered w-full"
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="Enter your name"
            />
          </div>
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
            <label className="block text-gray-700">Photo URL</label>
            <input
              type="url"
              className="input input-bordered w-full"
              value={photoURL}
              onChange={(e) => setPhotoURL(e.target.value)}
              placeholder="Enter your photo URL"
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
            {passwordError && (
              <p className="text-red-500 text-sm mt-1">{passwordError}</p>
            )}
          </div>
          <div className="mb-4">
            <button type="submit" className="btn btn-primary w-full">
              Register
            </button>
          </div>
        </form>
        <div className="text-center mb-4">
          <p className="text-sm">
            Already have an account?{" "}
            <a href="/login" className="text-primary hover:underline">
              Login here
            </a>
          </p>
        </div>

        <div className="text-center mt-4">
          <div className="flex justify-center mt-4">
            <button
              onClick={handleGoogleLogin}
              className="btn btn-outline btn-secondary"
            >
              <FaGoogle className="mr-2" />
              Register with Google
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RegisterPage;
