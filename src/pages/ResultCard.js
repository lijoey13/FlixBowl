import React, {useContext} from 'react';
import {GlobalContext} from '../context/GlobalState';
import './ResultCard.css';
import AddCircleOutlineRoundedIcon from '@material-ui/icons/AddCircleOutlineRounded';
import CheckCircleOutlineIcon from '@material-ui/icons/CheckCircleOutline';

export const ResultCard = ({multi}) => {
    const {
        addMovieToWatchlist,
        addMovieToWatched,
        watchlist,
        watched,
      } = useContext(GlobalContext);
    
      let storedMovie = watchlist.find((o) => o.id === multi.id);
      let storedMovieWatched = watched.find((o) => o.id === multi.id);
    
      const watchlistDisabled = storedMovie
        ? true
        : storedMovieWatched
        ? true
        : false;
    
      const watchedDisabled = storedMovieWatched ? true : false;

      
    return (
    <div className="results">
        <div className="result-card">
            <div className="container">
                <div className="info">
                    <div className="info_header">
                        <h3 className="title">{multi.title}</h3>
                             <h4 className="release-date">
                                {multi.release_date && multi.release_date.substring(0,4)}
                             </h4>
                    </div>

                    <div className="controls">
                        <button className="btn" 
                        disabled={watchlistDisabled}
                        onClick={() => addMovieToWatchlist(multi)}>
                             <AddCircleOutlineRoundedIcon/> 
                        </button>

                        <button
                            className="btn"
                            disabled={watchedDisabled}
                            onClick={() => addMovieToWatched(multi)}
                        >
                            <CheckCircleOutlineIcon/>
                        </button>
                    </div>

                </div> 
                    <div className="poster-wrapper">
                        {multi.poster_path ? (
                        <img
                            src={`https://image.tmdb.org/t/p/w200${multi.poster_path}`}
                            alt={`${multi.title} Poster`}
                        />
                        ) : (
                        <div className="filler-poster"></div>
                        )}
                    </div>   
            </div>  
        </div>
    </div>
    )
}