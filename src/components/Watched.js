import React, {useContext} from 'react';
import {GlobalContext} from '../context/GlobalState';
import { MovieCard } from "../components/MovieCard";
import './Watched.css';


export const Watched = () => {
    const { watched } = useContext(GlobalContext);
  
    return (
      <div className="movie-page">
        <div className="container">
          <div className="header">
            <h1 className="heading">Watched</h1>
  
            <span className="count-pill">
              {watched.length} {watched.length === 1 ? "Movie" : "Movies"}
            </span>
          </div>
  
          {watched.length > 0 ? (
            <div className="movie-grid">
              {watched.map((multi) => (
                <MovieCard multi={multi} key={multi.id} type="watched" />
              ))}
            </div>
          ) : (
            <h2 className="no-movies"> Watched is empty! </h2>
          )}
        </div>
      </div>
    );
  };