import React, { useEffect, useState } from 'react'

import { moviesList } from '../utility/constants';
import { handleSearch } from '../utility/commonFunction'
import Card from './Card';

const Gener = ({selectedGener, handleSingleMovie, searchValue}) => {
  const [filteredMovies, setFilteredMovies] = useState([])

  useEffect(() => {
    let filteredData = moviesList.filter(d => d.Genre.includes(selectedGener))
    filteredData = handleSearch(filteredData, searchValue);
    setFilteredMovies(filteredData)
  }, [selectedGener, moviesList, searchValue])

  return (
    <div>
      {filteredMovies?.map(d => (
        <Card movie={d} handleSingleMovie={handleSingleMovie} />
      ))}
    </div>
  )
}

export default Gener
