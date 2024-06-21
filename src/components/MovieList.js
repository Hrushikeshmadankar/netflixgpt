import React from "react";
import MovieCard from "./MovieCard";

const MovieList = ({ title, movies }) => {
  return (
    <div className="px-0 ">
      <h1 className="text-lg md:text-3xl py-4 text-white">{title}</h1>
      <div className="flex overflow-x-scroll no-scrollbar">
        <div className="flex">
          {movies
            ? movies.map((movie) => (
                <MovieCard key={movie.id} posterPath={movie.poster_path} />
              ))
            : null}
        </div>
      </div>
    </div>
  );
};

export default MovieList;
