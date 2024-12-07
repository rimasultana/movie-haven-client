import { useContext, useEffect, useState } from "react";
import MovieCard from "../components/MovieCard";
import { AuthContext } from "../Provider/AuthProvider";

const FavMovie = () => {
  const {user} = useContext(AuthContext);
  console.log(user);
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    fetch(
      `https://b10-a10-server-side-rimasultana.vercel.app/fav-movie/${user.email}`
    )
      .then((res) => res.json())
      .then((data) => setMovies(data))
      .catch((error) => console.error(error));
  }, []);
  return (
    <>
      <div className="py-10">
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
