import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";

import Movies from './components/Movies';
import SingleMovie from './components/SingleMovie';
import Gener from './components/Gener';

function App() {
  return (
    <div>
      <Router>
        <Routes>
          <Route path="/"  element={<Movies />} />
          <Route path="/singleMovie" element={<SingleMovie/>} />
          <Route path="/gener" element={<Gener/>} />
        </Routes>
      </Router>
    </div>
  )
}

export default App;
