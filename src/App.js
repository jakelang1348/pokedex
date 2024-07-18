import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import Filter from './components/Filter.js';
import PokemonGrid from './components/PokemonGrid.js';
import PokemonPage from './components/PokemonPage.js';
import Sidebar from './components/Sidebar.js';

function App() {
  const [regionFilter, setRegionFilter] = useState('all');

  return (
    <Router>
          <Routes>
            <Route path="/" element={
              <>
              <div className="App">
                <Sidebar onSelectionChange={setRegionFilter} />
                <div className='pokemon-side'>
                <Filter />
                <PokemonGrid regionFilter={regionFilter} />
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