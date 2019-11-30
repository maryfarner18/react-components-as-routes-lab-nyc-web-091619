import React from 'react';
import { movies } from '../data';

const Movies = () => {

  const renderGenres = (genres) => {
    return genres.map(genre => <li> {genre}</li>)
  }

  const renderMovies = () => {
    return movies.map(movie => {
      return <div>
        <h3>Title: {movie.title}</h3>
        <h3>Time: {movie.time}</h3>
        <ul>Genres: 
          {renderGenres(movie.genres)}
        </ul>
      </div>
    })
  }

  return (
    <div>
        <h1>Movies Page</h1>
        {renderMovies()}
    </div>
  );
};

export default Movies;
