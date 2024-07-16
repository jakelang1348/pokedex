import './PokemonGrid.css';


//collects array of all the pokemon
async function getPokemon(pokemon) {
    const url = `https://pokeapi.co/api/v2/pokemon/${pokemon}/`;
  
  
    try {
      const response = await fetch(url);
      if (!response.ok) {
        throw new Error(`Response status: ${response.status}`);
      }
  
      const pokemonData = await response.json();
      console.log(pokemonData);
      return pokemonData;
  
    } catch (error) {
      console.error(error.message);
    }
}

let pokemon = [];

for (let i = 1; i < 494; ++i) {
    const poke_entry = getPokemon(i);
    pokemon.push(poke_entry)
}

  

function PokemonGrid() {
  
    return (
        <div className="pokemon-grid">

        </div>
    );
  }
  
  export default PokemonGrid;