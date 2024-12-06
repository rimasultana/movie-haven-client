import React from "react";

const MovieDetails = ({ movie }) => {
  const handleDelete = () => {
    // Logic to delete the movie (probably API call)
    console.log("Movie Deleted");
  };

  const handleAddToFavorite = () => {
    // Logic to add the movie to favorites
    console.log("Movie Added to Favorites");
    // Optional: Show toast or confirmation message
  };

  return (
    <div className="min-h-screen bg-gray-100 flex justify-center items-center p-4">
      <div className="max-w-4xl w-full bg-white rounded-lg shadow-lg overflow-hidden">
        {/* Movie Poster */}
        <div className="relative">
          <img
            className="w-full h-96 object-cover"
            src={movie.poster}
            alt={movie.title}
          />
        </div>

        {/* Movie Details */}
        <div className="p-6 space-y-6">
          {/* Movie Title */}
          <h1 className="text-3xl font-extrabold text-gray-800">
            {movie?.title}
          </h1>

          {/* Movie Info */}
          <div className="flex flex-wrap gap-4">
            <p className="text-lg font-semibold text-gray-600">
              Genre: {movie?.genre}
            </p>
            <p className="text-lg font-semibold text-gray-600">
              Duration: {movie?.duration} mins
            </p>
            <p className="text-lg font-semibold text-gray-600">
              Release Year: {movie?.releaseYear}
            </p>
            <p className="text-lg font-semibold text-gray-600">
              Rating: {movie?.rating} ★
            </p>
          </div>

          {/* Movie Summary */}
          <div>
            <h2 className="text-xl font-semibold text-gray-800">Summary</h2>
            <p className="text-gray-600">{movie?.summary}</p>
          </div>

          {/* Buttons */}
          <div className="flex space-x-4">
            {/* Delete Movie Button */}
            <button
              onClick={handleDelete}
              className="w-full sm:w-auto py-2 px-6 text-lg font-semibold text-white bg-red-500 rounded-lg hover:bg-red-600 transition duration-300 transform hover:scale-105"
            >
              Delete Movie
            </button>

            {/* Add to Favorite Button */}
            <button
              onClick={handleAddToFavorite}
              className="w-full sm:w-auto py-2 px-6 text-lg font-semibold text-white bg-blue-500 rounded-lg hover:bg-blue-600 transition duration-300 transform hover:scale-105"
            >
              Add to Favorite
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MovieDetails;
