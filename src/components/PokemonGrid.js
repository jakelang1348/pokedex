import React, { useState, useEffect } from 'react';
import './PokemonGrid.css';

// Function to fetch Pokémon data
async function getPokemon(pokemon) {
  const url = `https://pokeapi.co/api/v2/pokemon/${pokemon}/`;

  try {
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error(`Response status: ${response.status}`);
    }

    const pokemonData = await response.json();
    return pokemonData;

  } catch (error) {
    console.error(error.message);
  }
}

function PokemonGrid() {
  const [pokemonArray, setPokemonArray] = useState([]);

  useEffect(() => {
    async function fetchPokemon() {
      const promises = [];
      for (let i = 1; i < 494; ++i) {
        promises.push(getPokemon(i));
      }

      const results = await Promise.all(promises);
      setPokemonArray(results);
    }

    fetchPokemon();
  }, []);

  return (
    <div className="pokemon-grid">
      {pokemonArray.map((pokemon, index) => (
        pokemon && (
          <div key={index} className="pokemon-entry">
            <h3>{pokemon.name}</h3>
            <p>ID: {pokemon.id}</p>
          </div>
        )
      ))}
    </div>
  );
}

export default PokemonGrid;
