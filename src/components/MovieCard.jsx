/* eslint-disable react/prop-types */

import toast from "react-hot-toast";
import { Link } from "react-router-dom";

const MovieCard = ({ movie, deleteCom, setMovies, movies }) => {
  const { moviePoster, movieTitle, genre, duration, releaseYear, rating, _id } =
    movie;
  const handleDelete = () => {
    fetch(`http://localhost:5000/fav-movie/${_id}`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.acknowledged) {
          toast.success("successfully Delete Movie");
        }
        setMovies(movies.filter((m) => m._id !== _id));
      })
      .catch((error) => console.log(error));
  };

  return (
    <div className=" rounded-lg overflow-hidden shadow-xl hover:shadow-2xl transition-shadow duration-300 ease-in-out bg-white hover:bg-gray-100">
      <div className="relative">
        <img
          className="w-full h-56 object-cover rounded-t-lg transform hover:scale-105 transition-transform duration-500"
          src={moviePoster}
          alt={movieTitle}
        />
        <div className="absolute top-2 right-2 bg-blue-500 text-white px-3 py-1 rounded-full text-sm font-semibold">
          {rating} <span className="ml-1 text-yellow-400">★</span>
        </div>
      </div>

      <div className="p-4 space-y-3">
        <h2 className="font-bold text-xl text-gray-800 truncate hover:text-blue-600 cursor-pointer transition-colors duration-300">
          {movieTitle}
        </h2>
        <p className="text-sm text-gray-600 px-3 py-1 inline-block bg-gray-200 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
          {genre}
        </p>
        <p className="text-sm text-gray-600">{duration} mins</p>
        <p className="text-sm text-gray-600">{releaseYear}</p>
      </div>

      {deleteCom ? (
        <button
          onClick={handleDelete}
          className="w-full py-2 text-lg font-semibold text-white bg-gradient-to-r from-red-600 to-red-500 rounded-lg shadow-xl hover:from-red-700 hover:to-red-600 focus:outline-none focus:ring-4 focus:ring-red-300 transform hover:scale-105 transition-all duration-300"
        >
          Delete Movie
        </button>
      ) : (
        <div className="px-4 py-2 bg-gradient-to-r from-blue-500 to-teal-400 text-white text-center rounded-b-lg cursor-pointer hover:bg-gradient-to-r hover:from-teal-400 hover:to-blue-500 transition-all transform hover:scale-105">
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
