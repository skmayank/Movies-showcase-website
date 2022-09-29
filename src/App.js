import { useState } from 'react';
import { Routes, Route, useNavigate } from "react-router-dom";

import Movies from './components/Movies';
import SingleMovie from './components/SingleMovie';
import Gener from './components/Gener';
import Header from "./components/Header";

function App() {
  const [searchValue, setSearchValue] = useState('');
  const [selectedMovie, setSelectedMovie] = useState('');
  const [selectedGener, setSelectedGener] = useState('All');

  const navigate = useNavigate();

  const handleSelectedGener = (gener) => {
    gener === 'All' ? navigate('/') : navigate('/gener');
    setSelectedGener(gener);
  }

  return (
    <div>
      <Header handleChange={setSearchValue} handleSelectedGener={handleSelectedGener} />
      <Routes>
        <Route path="/"  element={<Movies handleSingleMovie={setSelectedMovie} searchValue={searchValue}/>} />
        <Route path="/:movie" element={<SingleMovie selectedMovie={selectedMovie}/>} />
        <Route path="/gener" element={<Gener selectedGener={selectedGener} handleSingleMovie={setSelectedMovie} searchValue={searchValue} />} />
      </Routes>
    </div>
  )
}

export default App;
