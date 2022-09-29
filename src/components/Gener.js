import React, { useEffect, useState } from 'react';

import { moviesList } from '../utility/constants';
import { handleSearch, handleChangeGener } from '../utility/moviesFilters';
import Card from './Card';

const Gener = ({ selectedGener, handleSingleMovie, searchValue }) => {
  const [filteredMovies, setFilteredMovies] = useState([])

  useEffect(() => {
    let filteredData = handleChangeGener(moviesList);
    filteredData = handleSearch(filteredData, searchValue);
    setFilteredMovies(filteredData);

  }, [selectedGener, searchValue])

  return (
    <div className='p-[40px] flex flex-wrap gap-5 justify-center'>
      {filteredMovies?.map((d, i) => (
        <Card key={i} movie={d} handleSingleMovie={handleSingleMovie} />
      ))}
    </div>
  )
}

export default Gener;
