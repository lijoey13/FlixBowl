import React from "react";
import { MovieControls } from "../components/Controls";
import './MovieCard.css';

export const MovieCard = ({ multi, type }) => {
  return (
    <div className="movie-card">
      <div className="overlay"></div>

      <img
        src={`https://image.tmdb.org/t/p/w200${multi.poster_path}`}
        alt={`${multi.title} Poster`}
      />

      <MovieControls type={type} multi={multi} />
    </div>
  );
};