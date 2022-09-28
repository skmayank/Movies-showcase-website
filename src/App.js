import { useState, useEffect } from 'react'
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";

import Movies from './components/Movies';
import SingleMovie from './components/SingleMovie';
import Gener from './components/Gener';
import Header from "./components/Header";
import { moviesList } from './utility/constants';

function App() {
  const [searchValue, setSearchValue] = useState('');
  const [filteredData, setFilteredData] = useState([]);
  const [clickedMovie, setClickedMovie] = useState('');

  useEffect(()=> {
    if (searchValue !== '') {
      const filtred = moviesList.filter((d) => d.Title.toLowerCase().includes(searchValue.toLowerCase()));
      setFilteredData(filtred);
    } else {
      setFilteredData(moviesList);
    }
  }, [searchValue])

  return (
    <div>
      <Router>
        <Header handleChange={setSearchValue} />
        <Routes>
          <Route path="/"  element={<Movies moviesList={filteredData} />} />
          <Route path="/singleMovie" element={<SingleMovie />} />
          <Route path="/gener" element={<Gener />} />
        </Routes>
      </Router>
    </div>
  )
}

export default App;
