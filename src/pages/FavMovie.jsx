import { useContext, useEffect, useState } from "react";
import MovieCard from "../components/MovieCard";
import { AuthContext } from "../Provider/AuthProvider";
import LoadingSpinner from "../components/Loading";
import { FaSadTear } from "react-icons/fa";

const FavMovie = () => {
  const { user } = useContext(AuthContext);
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    fetch(
      `https://b10-a10-server-side-rimasultana.vercel.app/fav-movie/${user.email}`
    )
      .then((res) => res.json())
      .then((data) => {
        setMovies(data);
        setLoading(false);
      })
      .catch((error) => console.error(error));
  }, [user.email]);
  if (loading) {
    return <LoadingSpinner />;
  }

  if (movies.length === 0) {
    return (
      <div className="flex justify-center items-center py-10 text-center">
        <div className="bg-white p-8 rounded-lg shadow-md flex flex-col items-center">
          <FaSadTear className="text-4xl text-gray-500 mb-4" />
          <p className="text-lg text-gray-600">
            You have no favorite movies yet. Add some to your list!
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className="py-10">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {movies.map((movie) => (
          <MovieCard
            movies={movies}
            setMovies={setMovies}
            deleteCom="delete"
            key={movie._id}
            movie={movie}
          />
        ))}
      </div>
    </div>
  );
};

export default FavMovie;
