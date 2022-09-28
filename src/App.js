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

  return (
    <div>
      <Router>
        <Header />
        <Routes>
          <Route path="/"  element={<Movies moviesList={moviesList} />} />
          <Route path="/singleMovie" element={<SingleMovie />} />
          <Route path="/gener" element={<Gener />} />
        </Routes>
      </Router>
    </div>
  )
}

export default App;
