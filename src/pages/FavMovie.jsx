import { useContext, useEffect, useState } from "react";
import MovieCard from "../components/MovieCard";
import { AuthContext } from "../Provider/AuthProvider";
import LoadingSpinner from "../components/Loading";

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
  }, []);
  if (loading) {
    return <LoadingSpinner />;
  }

  return (
    <>
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
    </>
  );
};

export default FavMovie;
