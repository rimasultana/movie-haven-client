import { useState } from "react";
import toast from "react-hot-toast";
import { useLoaderData, useNavigate } from "react-router-dom";

const MovieDetails = () => {
  const email = "rima@gmail.com";
  const [favorite, setFavorite] = useState(false);

  const data = useLoaderData();
  const navigate = useNavigate();
  const {
    moviePoster,
    movieTitle,
    genre,
    duration,
    releaseYear,
    rating,
    summary,
    _id,
    isFavorite,
  } = data;
  console.log(isFavorite);
  const handleDelete = () => {
    fetch(`http://localhost:5000/movie/${_id}`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.acknowledged) {
          toast.success("successfully Delete Movie");
          navigate("/all-movie");
        }
        console.log(data);
      })
      .catch((error) => console.log(error));
  };

  const handleAddToFavorite = () => {
    data.email = email;
    fetch("http://localhost:5000/fav-movie", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.insertedId) {
          toast.success("Added to Favorites!");
        }
        setFavorite(true);
      })
      .catch((error) => console.log(error));
  };

  return (
    <div className=" py-10 bg-gray-100 flex justify-center items-center p-4">
      <div className="max-w-4xl w-full bg-white rounded-lg shadow-lg overflow-hidden">
        <div className="relative">
          <img
            className="w-full h-96 object-cover"
            src={moviePoster}
            alt={moviePoster}
          />
        </div>
        <div className="p-6 space-y-6">
          <h1 className="text-3xl font-extrabold text-gray-800">
            {movieTitle}
          </h1>
          <div className="flex flex-wrap gap-4">
            <p className="text-lg font-semibold text-gray-600">
              Genre: {genre}
            </p>
            <p className="text-lg font-semibold text-gray-600">
              Duration: {duration} mins
            </p>
            <p className="text-lg font-semibold text-gray-600">
              Release Year: {releaseYear}
            </p>
            <p className="text-lg font-semibold text-gray-600">
              Rating: {rating} ★
            </p>
          </div>

          <div>
            <h2 className="text-xl font-semibold text-gray-800">Summary</h2>
            <p className="text-gray-600">{summary}</p>
          </div>

          <div className="flex space-x-4">
            <button
              onClick={handleDelete}
              className="w-full sm:w-auto py-2 px-6 text-lg font-semibold text-white bg-red-500 rounded-lg hover:bg-red-600 transition duration-300 transform hover:scale-105"
            >
              Delete Movie
            </button>
            <button
              disabled={isFavorite || favorite}
              onClick={handleAddToFavorite}
              className="w-full sm:w-auto py-2 px-6 text-lg font-semibold text-white bg-blue-500 rounded-lg hover:bg-blue-600 transition duration-300 transform hover:scale-105 disabled:bg-gray-400 disabled:cursor-not-allowed disabled:scale-100"
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
