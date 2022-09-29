import React, { useState, useEffect } from 'react';

import { moviesList } from '../utility/constants';
import { handleSearch } from '../utility/commonFunction'
import Card from './Card';

const Movies = ({ handleSingleMovie, searchValue }) => {
  const [filteredMovies, setFilteredMovies] = useState([])

  useEffect(() => {
    const filteredData = handleSearch(moviesList, searchValue);
    setFilteredMovies(filteredData);
  }, [searchValue, moviesList])

  return (
    <div className='p-[40px] flex flex-wrap gap-5 justify-center'>
      {filteredMovies?.map((d, i) => (
        <Card key={i} movie={d} handleSingleMovie={handleSingleMovie} />
      ))}
    </div>
  )
}

export default Movies;
