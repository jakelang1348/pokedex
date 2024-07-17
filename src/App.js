import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';

import Filter from './components/Filter.js';
import PokemonGrid from './components/PokemonGrid.js';
import PokemonPage from './components/PokemonPage.js';
import Sidebar from './components/Sidebar.js';

function App() {
  return (
    <Router>
          <Routes>
            <Route path="/" element={
              <>
              <div className="App">
                <Sidebar />
                <div className='pokemon-side'>
                <Filter />
                <PokemonGrid />
                </div>
              </div>
              </>
            } />
            <Route path="/:pokemonName" element={<PokemonPage />} />
          </Routes>
    </Router>
  );
}

export default App;