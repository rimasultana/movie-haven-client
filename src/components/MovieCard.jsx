/* eslint-disable react/prop-types */

import { useContext } from "react";
import toast from "react-hot-toast";
import { Link } from "react-router-dom";
import { AuthContext } from "../Provider/AuthProvider";

const MovieCard = ({ movie, deleteCom, setMovies, movies }) => {
  const { moviePoster, movieTitle, genre, duration, releaseYear, rating, _id } =
    movie;
  const { theme } = useContext(AuthContext);

  const handleDelete = () => {
    fetch(
      `https://b10-a10-server-side-rimasultana.vercel.app/fav-movie/${_id}`,
      {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
        },
      }
    )
      .then((res) => res.json())
      .then((data) => {
        if (data.acknowledged) {
          toast.success("Successfully deleted movie");
        }
        setMovies(movies.filter((m) => m._id !== _id));
      })
      .catch((error) => console.log(error));
  };

  const themeStyles =
    theme === "dark"
      ? {
          cardBg: "bg-gray-800",
          cardHoverBg: "hover:bg-gray-700",
          textPrimary: "text-white",
          textSecondary: "text-gray-400",
          badgeBg: "bg-blue-400",
          badgeText: "text-gray-900",
          buttonBg: "bg-gradient-to-r from-red-600 to-red-500",
          buttonHoverBg: "hover:from-red-700 hover:to-red-600",
          linkBg: "bg-gradient-to-r from-blue-500 to-teal-400",
          linkHoverBg: "hover:from-teal-400 hover:to-blue-500",
        }
      : {
          cardBg: "bg-white",
          cardHoverBg: "hover:bg-gray-100",
          textPrimary: "text-gray-800",
          textSecondary: "text-gray-600",
          badgeBg: "bg-blue-500",
          badgeText: "text-white",
          buttonBg: "bg-gradient-to-r from-red-600 to-red-500",
          buttonHoverBg: "hover:from-red-700 hover:to-red-600",
          linkBg: "bg-gradient-to-r from-blue-500 to-teal-400",
          linkHoverBg: "hover:from-teal-400 hover:to-blue-500",
        };

  return (
    <div
      className={`rounded-lg overflow-hidden shadow-xl hover:shadow-2xl transition-shadow duration-300 ease-in-out ${themeStyles.cardBg} ${themeStyles.cardHoverBg}`}
    >
      <div className="relative">
        <img
          className="w-full h-56 object-cover rounded-t-lg transform hover:scale-105 transition-transform duration-500"
          src={moviePoster}
          alt={movieTitle}
        />
        <div
          className={`absolute top-2 right-2 ${themeStyles.badgeBg} ${themeStyles.badgeText} px-3 py-1 rounded-full text-sm font-semibold`}
        >
          {rating} <span className="ml-1 text-yellow-400">★</span>
        </div>
      </div>

      <div className="p-4 space-y-3">
        <h2
          className={`font-bold text-xl truncate ${themeStyles.textPrimary} hover:text-blue-400 cursor-pointer transition-colors duration-300`}
        >
          {movieTitle}
        </h2>
        <p
          className={`text-sm px-3 py-1 inline-block bg-purple-100 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 ${themeStyles.textSecondary}`}
        >
          {genre}
        </p>
        <p className={`text-sm ${themeStyles.textSecondary}`}> <strong>Duration: </strong>
          {duration} mins
        </p>
        <p className={`text-sm ${themeStyles.textSecondary}`}> <strong>Release Year: </strong> {releaseYear}</p>
      </div>

      {deleteCom ? (
        <button
          onClick={handleDelete}
          className={`w-full py-2 text-lg font-semibold text-white ${themeStyles.buttonBg} rounded-lg shadow-xl ${themeStyles.buttonHoverBg} focus:outline-none focus:ring-4 focus:ring-red-300 transform hover:scale-105 transition-all duration-300`}
        >
          Delete Movie
        </button>
      ) : (
        <div
          className={`px-4 py-2 ${themeStyles.linkBg} text-white text-center rounded-b-lg cursor-pointer ${themeStyles.linkHoverBg} transition-all transform hover:scale-105`}
        >
          <Link
            to={`/movieDetails/${_id}`}
            className="w-full py-2 text-lg font-semibold"
          >
            See Details
          </Link>
        </div>
      )}
    </div>
  );
};

export default MovieCard;
