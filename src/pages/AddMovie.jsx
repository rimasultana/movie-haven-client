import { useContext, useState } from "react";
import { useForm } from "react-hook-form";
import { toast } from "react-hot-toast";
import { Rating } from "react-simple-star-rating";
import { AuthContext } from "../Provider/AuthProvider";

const AddMovie = () => {
  const { user, theme } = useContext(AuthContext);
  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors },
  } = useForm();
  const [rating, setRating] = useState(0);

  const genres = ["Comedy", "Drama", "Horror", "Action", "Romance", "Sci-Fi"];
  const years = [2024, 2023, 2022, 2021, 2020];
  const tooltipArray = [
    "Terrible",
    "Terrible+",
    "Bad",
    "Bad+",
    "Average",
    "Average+",
    "Great",
    "Great+",
    "Awesome",
    "Awesome+",
  ];
  const fillColorArray = [
    "#f17a45",
    "#f17a45",
    "#f19745",
    "#f19745",
    "#f1a545",
    "#f1a545",
    "#f1b345",
    "#f1b345",
    "#f1d045",
    "#f1d045",
  ];

  const onSubmit = (data) => {
    const { moviePoster, movieTitle, duration, summary } = data;
    data.rating = rating;
    data.email = user?.email;

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
    fetch("https://b10-a10-server-side-rimasultana.vercel.app/movie", {
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
    <div
      className={`flex justify-center items-center min-h-screen ${
        theme === "dark"
          ? "bg-gray-900 text-white"
          : "bg-gray-100 text-gray-900"
      }`}
    >
      <div
        className={`w-full max-w-md p-6 rounded-lg shadow-lg ${
          theme === "dark" ? "bg-gray-800" : "bg-white"
        }`}
      >
        <h2 className="text-3xl font-bold text-center mb-6">Add Movie</h2>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="mb-4">
            <label className="block font-semibold">Movie Poster URL</label>
            <input
              type="url"
              className={`input input-bordered w-full ${
                theme === "dark" ? "bg-gray-700 text-white" : ""
              }`}
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
            <label className="block font-semibold">Movie Title</label>
            <input
              type="text"
              className={`input input-bordered w-full ${
                theme === "dark" ? "bg-gray-700 text-white" : ""
              }`}
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
            <label className="block font-semibold">Genre</label>
            <select
              className={`select select-bordered w-full ${
                theme === "dark" ? "bg-gray-700 text-white" : ""
              }`}
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
            <label className="block font-semibold">Duration (in minutes)</label>
            <input
              type="number"
              className={`input input-bordered w-full ${
                theme === "dark" ? "bg-gray-700 text-white" : ""
              }`}
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
            <label className="block font-semibold">Release Year</label>
            <select
              className={`select select-bordered w-full ${
                theme === "dark" ? "bg-gray-700 text-white" : ""
              }`}
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
          <div className="mb-4">
            <label className="block font-semibold">Rating</label>
            <div className="demo space-x-1">
              <Rating
                onClick={(rate) => setRating(rate)}
                transition
                allowFraction
                showTooltip
                ratingValue={rating}
                tooltipArray={tooltipArray}
                fillColorArray={fillColorArray}
              />
            </div>
            {rating === 0 && (
              <span className="text-red-500 text-sm">
                Please select a rating.
              </span>
            )}
          </div>
          <div className="mb-4">
            <label className="block font-semibold">Summary</label>
            <textarea
              className={`textarea textarea-bordered w-full ${
                theme === "dark" ? "bg-gray-700 text-white" : ""
              }`}
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
          <div className="mb-4">
            <button
              type="submit"
              className={`btn btn-primary w-full ${
                theme === "dark" ? "bg-blue-700 hover:bg-blue-800" : ""
              }`}
            >
              Add Movie
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddMovie;
