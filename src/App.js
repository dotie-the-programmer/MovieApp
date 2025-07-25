import './App.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Header from './components/header/header';
import Home from './pages/homeless/homeless';
import MovieList from './components/movieList/movieList';
import Movie from './pages/movieDetail/movie';
import Login from './pages/Login';
import Signup from './pages/Signup';

function App() {
  return (
    <div className="App">
      <Router>
        <Header />
        <Routes>
          <Route index element={<Signup />} />          {/* Landing page is Signup */}
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} /> {/* Optional: explicit signup route */}
          <Route path="/movie/:id" element={<Movie />} />
          <Route path="/movies/:type" element={<MovieList />} />
          {/* <Route path="/*" element={<h1>Error Page</h1>} /> */}
        </Routes>
      </Router>
    </div>
  );
}

export default App;
