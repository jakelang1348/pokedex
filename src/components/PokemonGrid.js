import React, { useState, useEffect } from 'react';
import './PokemonGrid.css';
import { Navigate, useNavigate } from "react-router-dom";

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



function PokemonGrid( {regionFilter} ) {
  const [pokemonArray, setPokemonArray] = useState([]);

  //region filtering
  let start = 1, end = 494;
  if (regionFilter === 'all') {
    start = 1; end = 494;
  }
  else if (regionFilter === 'kanto') {
    start = 1; end = 152;
  }
  else if (regionFilter === 'johto') {
    start = 152; end = 252;
  }
  else if (regionFilter === 'hoenn') {
    start = 252; end = 387;
  }
  else if (regionFilter === 'sinnoh') {
    start = 387; end = 494;
  }


  const navigate = useNavigate();

  useEffect(() => {
    async function fetchPokemon() {
      const promises = [];
      for (let i = start; i < end; ++i) {
        promises.push(getPokemon(i));
      }
      const results = await Promise.all(promises);
      setPokemonArray(results);
    }
    fetchPokemon();
  }, [regionFilter]);

  function handleClick(pokemon) {
    let path = `/${pokemon.name}`;
    navigate(path);

  } 

  
    


  return (




    <div className="pokemon-grid">
      {pokemonArray.map((pokemon, index) => (
        pokemon && (

          <div key={index} className="pokemon-entry" onClick={() => { //need to double check on this syntax
            handleClick(pokemon);
          }}>

            <img src={pokemon.sprites.front_default}></img>
            <h3>{pokemon.name}</h3>
            <p>ID: {pokemon.id}</p>
            
          </div>
        )
      ))}
    </div>
  );
}

export default PokemonGrid;
