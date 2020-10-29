/** @format */

import React, { useState, useEffect } from 'react';
import axios from './axios';
import './Row.css';
import YouTube from "react-youtube"
import movieTrailer from "movie-trailer"

const base_url = `https://image.tmdb.org/t/p/original/`;

const Row = ({ title, fetchUrl }) => {
  const [movies, setMovies] = useState([]);
  const [trailerUrl, setTrailerUrl] = useState("");

  useEffect(() => {
    async function fetchData() {
      const request = await axios.get(fetchUrl);
      setMovies(request.data.results);
      console.log(request)
      return request;
    }
    fetchData();
  }, [fetchUrl]);


  const opts={
    height: "390",
    width: "100%",
    playerVars: {
      autoplay: 1,
    }
  }

  const handleClick = (movie) => {
    if(trailerUrl) {
      setTrailerUrl('')
    } else {
      movieTrailer(movie?.original_title || "")
      .then((url) => {
        const urlParams = new URLSearchParams(new URL(url).search);
        console.log(urlParams)
        setTrailerUrl(urlParams.get("v"));
      }).catch(error => console.log(error))
    }
  }

  return (
    <div className='row'>
      <h2>{title}</h2>

      <div className='row__posters'>
        {movies.map((movie) => {
          return (
            <div className="row__posterBlock">
            <img 
              key={movie.id}
              onClick={() => handleClick(movie)}
              className='row__poster'
              src={`${base_url}${movie.backdrop_path}`}
              alt={movie.name}
            />
            <h5 className="row__title">{movie.original_title}</h5>
            <p>{`Rating: ${movie.vote_average}/10`}</p>
            <p>{`Release Date: ${movie.release_date}`}</p>
            </div>
          );
        })}
      </div>
      {trailerUrl && <YouTube videoId={trailerUrl} opts={opts} />}
    </div>
  );
};

export default Row;
