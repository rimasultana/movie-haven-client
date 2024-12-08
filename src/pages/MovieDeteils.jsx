import { useContext } from "react";
import toast from "react-hot-toast";
import { Link, useLoaderData, useNavigate } from "react-router-dom";
import { AuthContext } from "../Provider/AuthProvider";
const MovieDetails = () => {
  const { user } = useContext(AuthContext);

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
  } = data;
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
  const handleAddToFavorite = async () => {
    try {
      data.email = user?.email;
      const response = await fetch("http://localhost:5000/fav-movie", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });
      console.log(response);
      if (!response.ok) {
        const errorData = await response.json();
        toast.error(errorData.error);
        return;
      }
      const responseData = await response.json();
      if (responseData.insertedId) {
        toast.success("Added to Favorites!");
      }
    } catch (error) {
      console.error("Network error:", error);
      toast.error("Something went wrong. Please try again later.");
    }
  };

  return (
    <>
      <div className="  py-10 bg-gray-100 flex justify-center items-center p-4">
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
                onClick={handleAddToFavorite}
                className="w-full sm:w-auto py-2 px-6 text-lg font-semibold text-white bg-blue-500 rounded-lg hover:bg-blue-600 transition duration-300 transform hover:scale-105 disabled:bg-gray-400 disabled:cursor-not-allowed disabled:scale-100"
              >
                Add to Favorite
              </button>
              <Link
                to={`/updateMovie/${_id}`}
                className="w-full sm:w-auto py-2 px-6 text-lg font-semibold text-black bg-yellow-200 rounded-lg hover:bg-yellow-500 transition duration-300 transform hover:scale-105 disabled:bg-gray-400 disabled:cursor-not-allowed disabled:scale-100"
              >
                Update Movie
              </Link>
            </div>
          </div>
        </div>
      </div>
      <div className="px-4 mb-5 mx-auto w-40 py-2 bg-gradient-to-r from-blue-500 to-teal-400 text-white text-center rounded-lg cursor-pointer hover:scale-105 transform transition duration-300 ease-in-out">
        <Link
          to={`/all-movie`}
          className="w-full py-2 text-lg font-semibold transition-all duration-300 transform hover:scale-105 hover:from-teal-500 hover:to-blue-600"
        >
          See all movies
        </Link>
      </div>
    </>
  );
};

export default MovieDetails;
