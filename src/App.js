import logo from './logo.svg';
import './App.css';
import Navbar from "./components/Navbar";
import HomePage from "./pages/HomePage"
import { Routes, Route } from 'react-router-dom';
import AllBeers from './pages/AllBeers';
import NewBeer from './pages/NewBeer';
import RandomBeer from './pages/RandomBeer';

function App() {
  return (
    <div className="App">
      
 
     <Routes>
        <Route exact path="/all-beers" element={<AllBeers />} />
        <Route exact path="/new-beer" element={<NewBeer />} />
        <Route exact path="/random-beer" element={<RandomBeer  />} />
        <Route exact path="/" element={<HomePage />} />
      </Routes>
    </div>

  );
}

export default App;
