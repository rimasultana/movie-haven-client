import { useEffect, useState, useContext } from "react";
import { Link } from "react-router-dom";
import MovieCard from "./MovieCard";
import LoadingSpinner from "./Loading";
import { AuthContext } from "../Provider/AuthProvider";

const FeaturedMovies = () => {
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(true);
  const { theme } = useContext(AuthContext);

  useEffect(() => {
    setLoading(true);
    fetch(`https://b10-a10-server-side-rimasultana.vercel.app/movie?limit=6`)
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
    <div className={`bg-${theme === "dark" ? "gray-800" : "base-200"}`}>
      <section
        className={`py-10 ${
          theme === "dark" ? "dark:bg-gray-800 dark:text-gray-100" : ""
        }`}
      >
        <div className="container mx-auto text-center">
          <h2
            className={`text-3xl font-bold ${
              theme === "dark" ? "text-white" : "text-gray-800"
            }`}
          >
            Featured Movies
          </h2>
          <p
            className={`text-lg mt-4 ${
              theme === "dark" ? "text-gray-400" : "text-gray-600"
            }`}
          >
            Discover the top 6 highest-rated movies!
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-8">
            {movies.map((movie) => (
              <MovieCard key={movie._id} movie={movie} theme={theme} />
            ))}
          </div>
          <div className="mt-8">
            <Link
              to="/all-movie"
              className={`inline-block py-3 px-6 text-white bg-blue-500 rounded-lg text-lg hover:bg-blue-600 transition duration-300 transform hover:scale-105`}
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
