const About = () => {
  return (
    <div className="bg-gray-50 py-16">
      <div className="max-w-7xl mx-auto px-6 text-center">
        <h2 className="text-4xl font-semibold text-gray-800 mb-4">
          About MovieHaven
        </h2>
        <p className="text-lg text-gray-600 mb-8">
          Welcome to MovieHaven, your one-stop destination for discovering,
          exploring, and managing your favorite movies. Whether you’re a movie
          buff, casual viewer, or just looking for something new to watch, we’re
          here to simplify your movie experience.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12">
          <div className="bg-white p-6 rounded-lg shadow-lg">
            <h3 className="text-xl font-semibold text-gray-800 mb-2">
              Explore Movies
            </h3>
            <p className="text-gray-600">
              Browse a wide collection of movies from various genres, discover
              hidden gems, and get recommendations based on your interests.
            </p>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-lg">
            <h3 className="text-xl font-semibold text-gray-800 mb-2">
              Movie Details
            </h3>
            <p className="text-gray-600">
              Get detailed information on each movie, including cast, crew,
              ratings, and reviews to make informed decisions on what to watch
              next.
            </p>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-lg">
            <h3 className="text-xl font-semibold text-gray-800 mb-2">
              Favorites & Management
            </h3>
            <p className="text-gray-600">
              Add your favorite movies to your personal list, track them, and
              delete them as you see fit. MovieHaven makes managing your
              collection easy.
            </p>
          </div>
        </div>

        <div className="mt-12">
          <button className="btn btn-primary px-6 py-3 rounded-lg text-white bg-blue-500 hover:bg-blue-700">
            Explore Now
          </button>
        </div>
      </div>
    </div>
  );
};

export default About;
