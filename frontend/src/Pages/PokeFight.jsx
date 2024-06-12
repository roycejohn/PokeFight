// PokeFight Section-Rename your component to PokeFight pls
import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

function PokemonSelect() {
  const [pokemons, setPokemons] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    fetch('http://localhost:3000/json/pokemon')
      .then(response => response.json())
      .then(data => setPokemons(data))
      .catch(error => console.error('Error fetching data:', error));
  }, []);

  const onSelect = (pokemon) => {
    navigate('/game/pokefight/battle', { state: { selectedPokemon: pokemon } });
  };

  return (
    <div className="container mx-auto p-4">
      <h3 className="text-2xl font-bold mb-4">Pokémon List</h3>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {pokemons.map((pokemon) => (
          <div key={pokemon.id} className="bg-white rounded-lg shadow-md p-4 flex items-center">
            <div className="w-1/2">
              <h4 className="text-xl font-semibold mb-2">{pokemon.name.english}</h4>
              <div className="poke-img-bg w-40 h-40 sm:w-40 sm:h-40 md:w-40 md:h-40 flex items-center justify-center rounded-md overflow-hidden">
                <img
                  src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${pokemon.id}.svg`}
                  alt={pokemon.name}
                  className="object-contain w-full h-full"
                />
              </div>
            </div>
            <div className="w-1/2 pl-4">
              <p className="text-md mb-2"><span className="font-semibold">Type:</span> {pokemon.type.join(', ')}</p>
              <p className="text-sm font-semibold">Base Stats:</p>
              <p className="text-sm"><span className="font-semibold">HP:</span> {pokemon.base.HP}</p>
              <p className="text-sm"><span className="font-semibold">Attack:</span> {pokemon.base.Attack}</p>
              <p className="text-sm"><span className="font-semibold">Defense:</span> {pokemon.base.Defense}</p>
              <p className="text-sm"><span className="font-semibold">Sp. Attack:</span> {pokemon.base['Sp. Attack']}</p>
              <p className="text-sm"><span className="font-semibold">Sp. Defense:</span> {pokemon.base['Sp. Defense']}</p>
              <p className="text-sm"><span className="font-semibold">Speed:</span> {pokemon.base.Speed}</p>
            </div>
            <button
              className="mt-4 bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
              onClick={() => onSelect(pokemon)}
            >
              Select
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default PokemonSelect;

