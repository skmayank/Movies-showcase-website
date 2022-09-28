import React from 'react';
import Card from './Card';

const Movies = ({moviesList}) => {

  return (
    <div>
      {moviesList?.map(d => (
        <Card movie={d} />
      ))}
    </div>
  )
}

export default Movies;
