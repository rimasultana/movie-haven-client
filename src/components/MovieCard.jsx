// Sample data for the card
const MovieCard = ({ poster, title, genre, duration, releaseYear, rating }) => {
  return (
    <div className="max-w-xs rounded-lg overflow-hidden shadow-xl hover:shadow-2xl transition-shadow duration-300 ease-in-out bg-white hover:bg-gray-100">
      {/* Movie Poster */}
      <div className="relative">
        <img
          className="w-full h-56 object-cover rounded-t-lg transform hover:scale-105 transition-transform duration-500"
          src={poster}
          alt={title}
        />
        <div className="absolute top-2 right-2 bg-blue-500 text-white px-3 py-1 rounded-full text-sm font-semibold">
          {rating} <span className="ml-1 text-yellow-400">★</span>
        </div>
      </div>

      <div className="p-4 space-y-3">
        {/* Movie Title */}
        <h2 className="font-bold text-xl text-gray-800 truncate hover:text-blue-600 cursor-pointer transition-colors duration-300">
          {title}
        </h2>

        {/* Movie Genre with shadow effect */}
        <p className="text-sm text-gray-600 px-3 py-1 inline-block bg-gray-200 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
          {genre}
        </p>

        {/* Movie Duration */}
        <p className="text-sm text-gray-600">{duration} mins</p>

        {/* Movie Release Year */}
        <p className="text-sm text-gray-600">{releaseYear}</p>
      </div>

      {/* See Details Button */}
      <div className="px-4 py-2 bg-gradient-to-r from-blue-500 to-teal-400 text-white text-center rounded-b-lg cursor-pointer hover:bg-gradient-to-r hover:from-teal-400 hover:to-blue-500 transition-all transform hover:scale-105">
        <button className="w-full py-2 text-lg font-semibold">
          See Details
        </button>
      </div>
    </div>
  );
};

// Example of how to use the MovieCard
const App = () => {
  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        <MovieCard
          poster="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRmCy16nhIbV3pI1qLYHMJKwbH2458oiC9EmA&s"
          title="Movie Title"
          genre="Action"
          duration={120}
          releaseYear={2024}
          rating={4.5}
        />
        <MovieCard
          poster="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRmCy16nhIbV3pI1qLYHMJKwbH2458oiC9EmA&s"
          title="Another Movie"
          genre="Comedy"
          duration={90}
          releaseYear={2023}
          rating={3.8}
        />
        <MovieCard
          poster="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRmCy16nhIbV3pI1qLYHMJKwbH2458oiC9EmA&s"
          title="Third Movie"
          genre="Drama"
          duration={150}
          releaseYear={2022}
          rating={4.2}
        />
      </div>
    </div>
  );
};

export default App;
