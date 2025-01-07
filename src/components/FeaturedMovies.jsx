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
    <section className="py-16">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2
            className={`text-3xl md:text-4xl font-bold mb-4 ${
              theme === "dark" ? "text-white" : "text-gray-800"
            }`}
          >
            Featured Movies
          </h2>
          <p
            className={`text-lg ${
              theme === "dark" ? "text-gray-400" : "text-gray-600"
            }`}
          >
            Discover the top 6 highest-rated movies!
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {movies.map((movie) => (
            <MovieCard key={movie._id} movie={movie} theme={theme} />
          ))}
        </div>

        <div className="text-center">
          <Link
            to="/all-movie"
            className="inline-block py-3 px-6 text-white bg-blue-500 rounded-lg text-lg hover:bg-blue-600 transition duration-300 transform hover:scale-105"
          >
            See All Movies
          </Link>
        </div>
      </div>
    </section>
  );
};

export default FeaturedMovies;
