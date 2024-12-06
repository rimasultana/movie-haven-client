import { useState } from "react";
import { useForm } from "react-hook-form";
import { toast } from "react-hot-toast";
import { Rating } from "react-simple-star-rating";

const AddMovie = () => {
  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors },
  } = useForm();
  const [rating, setRating] = useState(0);

  // Genre options
  const genres = ["Comedy", "Drama", "Horror", "Action", "Romance", "Sci-Fi"];

  // Release year options
  const years = [2024, 2023, 2022, 2021, 2020];

  // Validation function for custom validation
  const onSubmit = (data) => {
    const { moviePoster, movieTitle, duration, summary } = data;
    data.rating = rating;

    if (
      !moviePoster.startsWith("http://") &&
      !moviePoster.startsWith("https://")
    ) {
      toast.error("Please provide a valid movie poster URL.");
      return;
    }
    if (movieTitle.length < 2) {
      toast.error("Movie title must be at least 2 characters long.");
      return;
    }
    if (duration <= 60) {
      toast.error("Duration must be greater than 60 minutes.");
      return;
    }
    if (summary.length < 10) {
      toast.error("Summary must be at least 10 characters long.");
      return;
    }
    // post moive
    fetch("http://localhost:5000/movie", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.insertedId) {
          toast.success("Movie added successfully!");
        }
        setValue("moviePoster", "");
        setValue("movieTitle", "");
        setValue("genre", "");
        setValue("duration", "");
        setValue("releaseYear", "");
        setValue("summary", "");
        setRating(0);
      })
      .catch((err) => console.error(err));
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100">
      <div className="w-full max-w-md p-6 bg-white rounded-lg shadow-lg">
        <h2 className="text-3xl font-bold text-center mb-6">Add Movie</h2>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="mb-4">
            <label className="block text-gray-700">Movie Poster URL</label>
            <input
              type="url"
              className="input input-bordered w-full"
              {...register("moviePoster", {
                required: "Movie poster is required.",
              })}
            />
            {errors.moviePoster && (
              <span className="text-red-500 text-sm">
                {errors.moviePoster.message}
              </span>
            )}
          </div>
          <div className="mb-4">
            <label className="block text-gray-700">Movie Title</label>
            <input
              type="text"
              className="input input-bordered w-full"
              {...register("movieTitle", {
                required: "Movie title is required.",
                minLength: {
                  value: 2,
                  message: "Movie title must be at least 2 characters long.",
                },
              })}
            />
            {errors.movieTitle && (
              <span className="text-red-500 text-sm">
                {errors.movieTitle.message}
              </span>
            )}
          </div>
          <div className="mb-4">
            <label className="block text-gray-700">Genre</label>
            <select
              className="select select-bordered w-full"
              {...register("genre", { required: "Please select a genre." })}
            >
              <option value="">Select Genre</option>
              {genres.map((genreOption) => (
                <option key={genreOption} value={genreOption}>
                  {genreOption}
                </option>
              ))}
            </select>
            {errors.genre && (
              <span className="text-red-500 text-sm">
                {errors.genre.message}
              </span>
            )}
          </div>
          <div className="mb-4">
            <label className="block text-gray-700">Duration (in minutes)</label>
            <input
              type="number"
              className="input input-bordered w-full"
              {...register("duration", {
                required: "Duration is required.",
                min: {
                  value: 61,
                  message: "Duration must be greater than 60 minutes.",
                },
              })}
            />
            {errors.duration && (
              <span className="text-red-500 text-sm">
                {errors.duration.message}
              </span>
            )}
          </div>
          <div className="mb-4">
            <label className="block text-gray-700">Release Year</label>
            <select
              className="select select-bordered w-full"
              {...register("releaseYear", {
                required: "Please select a release year.",
              })}
            >
              <option value="">Select Year</option>
              {years.map((year) => (
                <option key={year} value={year}>
                  {year}
                </option>
              ))}
            </select>
            {errors.releaseYear && (
              <span className="text-red-500 text-sm">
                {errors.releaseYear.message}
              </span>
            )}
          </div>

          {/* Rating */}
          <div className="mb-4">
            <label className="block text-gray-700">Rating</label>
            <div className="flex justify-start space-x-1">
              <Rating
                className="flex"
                onClick={(rate) => setRating(rate)}
                ratingValue={rating} /* rating value is set here */
              />
            </div>
            {rating === 0 && (
              <span className="text-red-500 text-sm">
                Please select a rating.
              </span>
            )}
          </div>
          <div className="mb-4">
            <label className="block text-gray-700">Summary</label>
            <textarea
              className="textarea textarea-bordered w-full"
              {...register("summary", {
                required: "Summary is required.",
                minLength: {
                  value: 10,
                  message: "Summary must be at least 10 characters long.",
                },
              })}
            />
            {errors.summary && (
              <span className="text-red-500 text-sm">
                {errors.summary.message}
              </span>
            )}
          </div>

          {/* Add Movie Button */}
          <div className="mb-4">
            <button type="submit" className="btn btn-primary w-full">
              Add Movie
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddMovie;
