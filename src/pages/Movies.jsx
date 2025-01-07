import { useEffect, useState, useContext } from "react";
import MovieCard from "../components/MovieCard";
import LoadingSpinner from "../components/Loading";
import { AuthContext } from "../Provider/AuthProvider";
import { FaSort, FaSortUp, FaSortDown } from "react-icons/fa";

export default function Movies() {
  const [movies, setMovies] = useState([]);
  const [filteredMovies, setFilteredMovies] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");
  const [loading, setLoading] = useState(false);
  const [sortOrder, setSortOrder] = useState("none"); // "none", "asc", "desc"
  const { theme } = useContext(AuthContext);

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

  const handleSort = () => {
    let newOrder;
    if (sortOrder === "none") newOrder = "asc";
    else if (sortOrder === "asc") newOrder = "desc";
    else newOrder = "none";

    setSortOrder(newOrder);

    let sortedMovies = [...filteredMovies];
    if (newOrder === "none") {
      sortedMovies = [...movies];
    } else {
      sortedMovies.sort((a, b) => {
        const ratingA = parseFloat(a.rating) || 0;
        const ratingB = parseFloat(b.rating) || 0;
        return newOrder === "asc" ? ratingA - ratingB : ratingB - ratingA;
      });
    }
    setFilteredMovies(sortedMovies);
  };

  const getSortIcon = () => {
    switch (sortOrder) {
      case "asc":
        return <FaSortUp className="inline-block ml-2" />;
      case "desc":
        return <FaSortDown className="inline-block ml-2" />;
      default:
        return <FaSort className="inline-block ml-2" />;
    }
  };

  if (loading) {
    return <LoadingSpinner />;
  }

  return (
    <div
      className={`py-10 px-4 min-h-screen ${
        theme === "dark" ? "bg-gray-900 text-white" : "bg-gray-50"
      }`}
    >
      <div className="container mx-auto">
        <div className="mb-8 space-y-4">
          {/* Search Section */}
          <div className="flex justify-center items-center space-x-4 flex-col sm:flex-row">
            <input
              type="text"
              value={searchQuery}
              onChange={handleSearchChange}
              placeholder="Search for a movie..."
              className={`px-4 py-2 w-full sm:w-80 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 mb-4 sm:mb-0 ${
                theme === "dark"
                  ? "bg-gray-800 border-gray-700 text-white placeholder-gray-400"
                  : "bg-white border-gray-300 text-gray-900"
              }`}
            />
            <button
              onClick={handleSearch}
              className="px-6 py-2 text-white bg-blue-600 rounded-lg hover:bg-blue-700 transition duration-300 w-full sm:w-auto"
            >
              Search
            </button>
          </div>

          {/* Sort Button */}
          <div className="flex justify-end">
            <button
              onClick={handleSort}
              className={`flex items-center px-4 py-2 rounded-lg transition duration-300 ${
                theme === "dark"
                  ? "bg-gray-800 hover:bg-gray-700 text-white"
                  : "bg-white hover:bg-gray-100 text-gray-900"
              } border ${
                theme === "dark" ? "border-gray-700" : "border-gray-300"
              }`}
            >
              Sort by Rating {getSortIcon()}
            </button>
          </div>
        </div>

        <div>
          {filteredMovies.length === 0 ? (
            <div className="flex justify-center items-center w-full mx-auto">
              <div
                className={`text-center p-6 rounded-lg shadow-xl w-full sm:w-3/4 md:w-1/2 ${
                  theme === "dark" ? "bg-gray-800" : "bg-white"
                }`}
              >
                <h2 className="text-3xl font-bold mb-4">No Movies Found</h2>
                <p className="text-xl font-medium mb-6">
                  We couldn&apos;t find any movies matching your search.
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
    </div>
  );
}
