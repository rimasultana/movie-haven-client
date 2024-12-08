import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import MovieCard from "./MovieCard"; // Assuming you have a MovieCard component
import LoadingSpinner from "./Loading";

const FeaturedMovies = () => {
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);
    fetch(`http://localhost:5000/movie?limit=6`)
      .then((res) => res.json())
      .then((data) => {
        setMovies(data);
        setLoading(false);
      })
      .catch((error) => console.error(error));
  }, []);

  if (loading) {
    return <LoadingSpinner />;
  }

  return (
    <div className="bg-base-200">
      <section className=" py-10 dark:bg-gray-800 dark:text-gray-100">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl font-bold text-gray-800">Featured Movies</h2>
          <p className="text-lg text-gray-600 mt-4">
            Discover the top 6 highest-rated movies!
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-8">
            {movies.map((movie) => (
              <MovieCard key={movie._id} movie={movie} />
            ))}
          </div>
          <div className="mt-8">
            <Link
              to="/all-movie"
              className="inline-block py-3 px-6 text-white bg-blue-500 rounded-lg text-lg hover:bg-blue-600 transition duration-300 transform hover:scale-105"
            >
              See All Movies
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default FeaturedMovies;
