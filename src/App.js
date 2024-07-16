import logo from './logo.svg';

import './App.css';


import Filter from './components/Filter.js';
import PokemonGrid from './components/PokemonGrid.js';
import PokemonPage from './components/PokemonPage.js';
import Sidebar from './components/Sidebar.js';


function App() {

  return (
    <div className="App">
      <Sidebar />
      <PokemonGrid />
    </div>
  );
}

export default App;
