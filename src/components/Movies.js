import React, { useState, useEffect} from 'react';

import { moviesList } from '../utility/constants';  
import { handleSearch } from '../utility/commonFunction'
import Card from './Card';

const Movies = ({handleSingleMovie, searchValue}) => {
  const [filteredMovies, setFilteredMovies] = useState([])

  useEffect(()=> {
    const filteredData = handleSearch(moviesList, searchValue);
    setFilteredMovies(filteredData);
  }, [searchValue, moviesList])

  return (
    <div>
      {filteredMovies?.map(d => (
        <Card movie={d} handleSingleMovie={handleSingleMovie} />
      ))}
    </div>
  )
}

export default Movies;
