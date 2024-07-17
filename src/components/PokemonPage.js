import React, { useState, useEffect } from 'react';
import './PokemonPage.css';
import { useParams } from 'react-router-dom';
import { Radar } from 'react-chartjs-2';
import { Chart as ChartJS, RadialLinearScale, PointElement, LineElement, Filler, Tooltip, Legend } from 'chart.js';

ChartJS.register(RadialLinearScale, PointElement, LineElement, Filler, Tooltip, Legend);

function PokemonPage() {
  const [pokemon, setPokemon] = useState(null);
  const { pokemonName } = useParams();

  useEffect(() => {
    async function fetchPokemon() {
      const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemonName}`);
      const data = await response.json();
      setPokemon(data);
    }
    fetchPokemon();
  }, [pokemonName]);

  if (!pokemon) {
    return <div>Loading...</div>;
  }

  const chartData = {
    labels: pokemon.stats.map(stat => stat.stat.name),

    datasets: [
      {
        label: 'Stats',
        data: pokemon.stats.map(stat => stat.base_stat),
        backgroundColor: 'rgba(255, 99, 132, 0.2)',
        borderColor: 'rgba(255, 99, 132, 1)',
        borderWidth: 1,
      },
    ],
  };

  const chartOptions = {
    scales: {
      r: {
        suggestedMin: 0,
        suggestedMax: 100
      }
    }
  };

  return (

    <div className='pokemon-container'>
                <div className='pokemon-description'>
        <div className='pokemon-image'>
                <img src={pokemon.sprites.front_default} alt={pokemon.name} />
        </div>

            <h1>{pokemon.name}</h1>
            <div className="pokemon-types">
                {pokemon.types.map((typeObj, index) => (
                <button key={index} className={`type-button ${typeObj.type.name}`}>
                    {typeObj.type.name}
                </button>
                ))}
            </div>
        </div>
      
      
      <div className="pokemon-stats-chart">
        <Radar data={chartData} options={chartOptions} />
      </div>
{/* 
      <div className='pokemon-moves'>
        {pokemon.moves.map((moveObj, index) => (
            <p className='move-info' key={index}>{moveObj.move.name}</p>
            ))} 

      </div> */}
      
      {/* Add more Pokemon details here */}
    </div>
  );
}

export default PokemonPage;