import React, { useContext } from "react";
import { GlobalContext } from "../context/GlobalState";
import CheckCircleOutlineIcon from '@material-ui/icons/CheckCircleOutline';
import RemoveCircleOutlineIcon from '@material-ui/icons/RemoveCircleOutline';
import QueuePlayNextIcon from '@material-ui/icons/QueuePlayNext';

export const MovieControls = ({ type, multi }) => {
  const {
    removeMovieFromWatchlist,
    addMovieToWatched,
    moveToWatchlist,
    removeFromWatched,
  } = useContext(GlobalContext);

  return (
    <div className="inner-card-controls">
      {type === "watchlist" && (
        <>
          <button className="ctrl-btn" onClick={() => addMovieToWatched(multi)}>
            <CheckCircleOutlineIcon/>
          </button>

          <button
            className="ctrl-btn"
            onClick={() => removeMovieFromWatchlist(multi.id)}
          >
            <RemoveCircleOutlineIcon/>
          </button>
        </>
      )}

      {type === "watched" && (
        <>
          <button className="ctrl-btn" onClick={() => moveToWatchlist(multi)}>
            <QueuePlayNextIcon/>
          </button>

          <button
            className="ctrl-btn"
            onClick={() => removeFromWatched(multi.id)}
          >
            <RemoveCircleOutlineIcon/>
          </button>
        </>
      )}
    </div>
  );
};