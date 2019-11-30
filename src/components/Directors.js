import React from 'react';
import { directors } from '../data';

const Directors = () => {

  const renderMovies = (movies) => {
    return movies.map(movie => <li> {movie}</li>)
  }

  const renderDirectors = () => {
    return directors.map(director => {
      return <div>
        <h3>Name: {director.name}</h3>
        <ul>Movies: 
          {renderMovies(director.movies)}
        </ul>
      </div>
    })
  }

  return (
    <div>
        <h1>Directors Page</h1>
        {renderDirectors()}
    </div>
  );
}

export default Directors
