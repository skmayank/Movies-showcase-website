/* eslint-disable react-hooks/exhaustive-deps */
import { useState, useEffect } from 'react';
import { Routes, Route, useNavigate } from "react-router-dom";

import Movies from './components/Movies';
import SingleMovie from './components/SingleMovie';
import Gener from './components/Gener';
import Header from "./components/Header";
import NotFountPage from './components/NotFountPage';

function App() {
  const [searchValue, setSearchValue] = useState('');
  const [selectedMovie, setSelectedMovie] = useState('');
  const [selectedGener, setSelectedGener] = useState('All');

  const navigate = useNavigate();

  const handleSelectedGener = (gener) => {
    gener === 'All' ? navigate('/') : navigate(`/gener/${gener}`);
    setSelectedGener(gener);
  }

  useEffect(() => {
    if (window.location.pathname === '/')
      setSelectedGener('All')
    if (window.location.pathname === '/singleMovie' || window.location.pathname === '/gener')
      navigate('/')
  }, [window.location.href])

  return (
    <div>
      <Header handleChange={setSearchValue} handleSelectedGener={handleSelectedGener} />
      <Routes>
        <Route path="/"  element={<Movies handleSingleMovie={setSelectedMovie} searchValue={searchValue}/>} />
        <Route path="/singlemovie/:movieName" element={<SingleMovie selectedMovie={selectedMovie}/>} />
        <Route path={`/gener/:generName`} element={<Gener selectedGener={selectedGener} handleSingleMovie={setSelectedMovie} searchValue={searchValue} />} />
        <Route path="*" element={<NotFountPage />} />
      </Routes>
    </div>
  )
}

export default App;

//keep in publid static 
//file name chagne in utility
