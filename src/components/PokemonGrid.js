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



function PokemonGrid() {
  const [region, setRegion] = useState();
  const [pokemonArray, setPokemonArray] = useState([]);
  const navigate = useNavigate();
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
