import { Link } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "../Provider/AuthProvider";
import { FaFilm, FaTheaterMasks, FaLaugh, FaBolt, FaHeart, FaGlobe } from "react-icons/fa";

const categories = [
  {
    id: 1,
    name: "Action",
    icon: FaBolt,
    description: "Thrilling action-packed adventures",
    color: "bg-red-500",
    count: "250+",
  },
  {
    id: 2,
    name: "Drama",
    icon: FaTheaterMasks,
    description: "Compelling dramatic narratives",
    color: "bg-blue-500",
    count: "180+",
  },
  {
    id: 3,
    name: "Comedy",
    icon: FaLaugh,
    description: "Hilarious comedic entertainment",
    color: "bg-yellow-500",
    count: "200+",
  },
  {
    id: 4,
    name: "Romance",
    icon: FaHeart,
    description: "Heart-warming love stories",
    color: "bg-pink-500",
    count: "150+",
  },
  {
    id: 5,
    name: "International",
    icon: FaGlobe,
    description: "Award-winning foreign films",
    color: "bg-purple-500",
    count: "300+",
  },
  {
    id: 6,
    name: "Classics",
    icon: FaFilm,
    description: "Timeless cinematic masterpieces",
    color: "bg-green-500",
    count: "120+",
  },
];

const PopularCategories = () => {
  const { theme } = useContext(AuthContext);

  return (
    <div className={`py-16 ${theme === "dark" ? "bg-gray-900" : "bg-gray-50"}`}>
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className={`text-3xl md:text-4xl font-bold mb-4 ${theme === "dark" ? "text-white" : "text-gray-900"}`}>
            Popular Categories
          </h2>
          <p className={`text-lg ${theme === "dark" ? "text-gray-300" : "text-gray-600"}`}>
            Discover movies across your favorite genres
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {categories.map((category) => (
            <Link
              key={category.id}
              to={`/all-movie?category=${category.name.toLowerCase()}`}
              className={`group p-6 rounded-xl transition-all duration-300 transform hover:-translate-y-1 ${
                theme === "dark" ? "bg-gray-800 hover:bg-gray-700" : "bg-white hover:bg-gray-50"
              } shadow-lg hover:shadow-xl`}
            >
              <div className="flex items-start space-x-4">
                <div className={`p-3 rounded-lg ${category.color} bg-opacity-10 group-hover:bg-opacity-20 transition-all duration-300`}>
                  <category.icon className={`text-2xl ${category.color} text-opacity-90`} />
                </div>
                <div className="flex-1">
                  <h3 className={`text-xl font-semibold mb-2 ${theme === "dark" ? "text-white" : "text-gray-900"}`}>
                    {category.name}
                  </h3>
                  <p className={`mb-3 ${theme === "dark" ? "text-gray-400" : "text-gray-600"}`}>
                    {category.description}
                  </p>
                  <div className="flex items-center justify-between">
                    <span className={`text-sm font-medium ${theme === "dark" ? "text-gray-400" : "text-gray-500"}`}>
                      {category.count} Movies
                    </span>
                    <span className={`text-sm font-medium ${category.color} text-opacity-90`}>
                      Explore →
                    </span>
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default PopularCategories;
