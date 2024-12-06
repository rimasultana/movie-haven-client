import { useEffect, useState } from "react";
import MovieCard from "../components/MovieCard";

const FavMovie = () => {
  const [movies, setMovies] = useState([]);
  const email = "rima@gmail.com";

  useEffect(() => {
    fetch(`http://localhost:5000/fav-movie/${email}`)
      .then((res) => res.json())
      .then((data) => setMovies(data))
      .catch((error) => console.error(error));
  }, []);
  return (
    <>
      <div className="">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {movies.map((movie) => (
            <MovieCard key={movie._id} movie={movie} />
          ))}
        </div>
      </div>
    </>
  );
};

export default FavMovie;
