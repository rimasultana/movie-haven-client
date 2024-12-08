import { useEffect, useState } from "react";
import MovieCard from "../components/MovieCard";
import LoadingSpinner from "../components/Loading";

export default function Movies() {
  const [movies, setMovies] = useState([]);
  const [filteredMovies, setFilteredMovies] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    fetch(`https://b10-a10-server-side-rimasultana.vercel.app/movie`)
      .then((res) => res.json())
      .then((data) => {
        setMovies(data);
        setFilteredMovies(data);
        setLoading(false);
      })
      .catch((error) => console.error(error));
  }, []);

  const handleSearch = () => {
    if (searchQuery.trim() === "") {
      setFilteredMovies(movies);
    } else {
      setFilteredMovies(
        movies.filter((movie) =>
          movie.movieTitle.toLowerCase().includes(searchQuery.toLowerCase())
        )
      );
    }
  };

  const handleSearchChange = (event) => {
    setSearchQuery(event.target.value);
  };

  if (loading) {
    return <LoadingSpinner />;
  }

  return (
    <div className="py-10">
      <div className="mb-8 flex justify-center items-center space-x-4">
        <input
          type="text"
          value={searchQuery}
          onChange={handleSearchChange}
          placeholder="Search for a movie..."
          className="px-4 py-2 w-80 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        <button
          onClick={handleSearch}
          className="px-6 py-2 text-white bg-blue-600 rounded-lg hover:bg-blue-700 transition duration-300"
        >
          Search
        </button>
      </div>
      <div>
        {filteredMovies.length === 0 ? (
          <div className="flex justify-center items-center w-11/12 mx-auto">
            <div className="text-center p-6 bg-gradient-to-r from-pink-500 via-purple-500 to-indigo-500 text-white rounded-lg shadow-xl">
              <h2 className="text-3xl font-bold mb-4">No Movies Found</h2>
              <p className="text-xl font-medium mb-6">
                We couldn&lsquo;t find any movies matching your search.
              </p>
              <span role="img" aria-label="sad face" className="text-4xl">
                😔
              </span>
            </div>
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredMovies.map((movie) => (
              <MovieCard key={movie._id} movie={movie} />
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
