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
      <div className='pokemon-side'>
        {/* header + filter side, need to have this in a div so that way the whole div will scroll, not just the grid (dont want the filter and title to remain while we scroll) */}
        <Filter />
        <PokemonGrid />
      </div>
    </div>
  );
}

export default App;
