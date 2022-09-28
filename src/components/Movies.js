import React from 'react';
// import { moviesList } from '../utility/constants';
import Card from './Card';

const Movies = ({moviesList}) => {
  console.log("moviesList", moviesList)
  return (
    <div>
      {moviesList?.map(d => (
        <Card movie={d} />
      ))}
    </div>
  )
}

export default Movies;
