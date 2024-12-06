import React from "react";
import MovieDetails from "./MovieDeteils";

export default function Home() {
  return (
    <div>
      <MovieDetails
        movie={{
          poster:
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRmCy16nhIbV3pI1qLYHMJKwbH2458oiC9EmA&s",
          title: "Movie Title",
          genre: "Action",
          duration: 120,
          releaseYear: 2024,
          rating: 4.5,
          summary: "This is a brief summary of the movie.",
        }}
      />
    </div>
  );
}
