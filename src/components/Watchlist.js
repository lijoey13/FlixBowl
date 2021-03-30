import React, {useContext} from 'react';
import {GlobalContext} from '../context/GlobalState';
import { MovieCard } from "../components/MovieCard";
import "./Watchlist.css";

export const Watchlist = () => {
    const { watchlist } = useContext(GlobalContext);
    return (
        <div className="movie-page">
          <div className="container">
            <div className="header">
              <h1 className="heading">My Watchlist</h1>
    
              <span className="count-pill">
                {watchlist.length} {watchlist.length === 1 ? "Movie" : "Movies"}
              </span>
            </div>
    
            {watchlist.length > 0 ? (
              <div className="movie-grid">
                {watchlist.map((multi) => (
                  <MovieCard multi={multi} key={multi.id} type="watchlist" />
                ))}
              </div>
            ) : (
              <h2 className="no-movies"> Watchlist is empty! </h2>
            )}
          </div>
        </div>
    );

}
