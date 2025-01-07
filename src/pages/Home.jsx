import Banner from "../components/Banner";
import Contact from "../components/Contact";
import FeaturedMovies from "../components/FeaturedMovies";
import PopularCategories from "../components/PopularCategories";
import Sponser from "../components/Spnser";
import { useContext } from "react";
import { AuthContext } from "../Provider/AuthProvider";

export default function Home() {
  const { theme } = useContext(AuthContext);
  
  return (
    <main className="overflow-hidden">
      {/* Banner Section */}
      <div className="py-5">
        <Banner />
      </div>

      {/* Featured Movies Section */}
      <div className={`${theme === "dark" ? "bg-gray-900" : "bg-gray-50"}`}>
        <FeaturedMovies />
      </div>

      {/* Popular Categories Section */}
      <div className={`${theme === "dark" ? "bg-gray-800" : "bg-white"}`}>
        <PopularCategories />
      </div>

      {/* Sponsors Section */}
      <div className={`py-16 ${theme === "dark" ? "bg-gray-900" : "bg-gray-50"}`}>
        <Sponser />
      </div>

      {/* Contact Section */}
      <div className={`py-16 ${theme === "dark" ? "bg-gray-800" : "bg-white"}`}>
        <Contact />
      </div>
    </main>
  );
}
