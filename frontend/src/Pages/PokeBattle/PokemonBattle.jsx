import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';

function PokeBattle() {
  const location = useLocation();
  const selectedPokemon = location.state?.selectedPokemon;
  const [opponentPokemon, setOpponentPokemon] = useState(null);
  const [battleLog, setBattleLog] = useState([]);
  const [winner, setWinner] = useState('');

  useEffect(() => {
    if (!selectedPokemon) return;

    fetch('http://localhost:3000/json/pokemon')
      .then(response => response.json())
      .then(data => {
        const formattedData = data.map(pokemon => ({
          id: pokemon.id,
          name: pokemon.name.english,
          type: pokemon.type,
          base: pokemon.base,
        }));
        const randomOpponent = formattedData[Math.floor(Math.random() * formattedData.length)];
        setOpponentPokemon(randomOpponent);
        startBattle(selectedPokemon, randomOpponent);
      });
  }, [selectedPokemon]);

  const startBattle = (pokemon1, pokemon2) => {
    let hp1 = pokemon1.base.HP;
    let hp2 = pokemon2.base.HP;
    const log = [];

    const battleRound = () => {
      hp2 -= Math.max(0, pokemon1.base.Attack - pokemon2.base.Defense);
      log.push(`${pokemon1.name.english} attacks ${pokemon2.name.english}, ${pokemon2.name.english} has ${hp2} HP left.`);

      if (hp2 <= 0) {
        setWinner(pokemon1.name.english);
        setBattleLog([...log]);
        return;
      }

      hp1 -= Math.max(0, pokemon2.base.Attack - pokemon1.base.Defense);
      log.push(`${pokemon2.name.english} attacks ${pokemon1.name.english}, ${pokemon1.name.english} has ${hp1} HP left.`);

      if (hp1 <= 0) {
        setWinner(pokemon2.name.english);
        setBattleLog([...log]);
        return;
      }

      setBattleLog(prevLog => [...prevLog, ...log]);
      setTimeout(battleRound, 1000); // Delay between rounds (1000ms = 1 second)
    };

    battleRound();
  };

  if (!selectedPokemon || !opponentPokemon) {
    return <div>Loading...</div>;
  }

  return (
    <div className="container mx-auto p-4">
      <h3 className="text-2xl font-bold mb-4">Battle</h3>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="bg-white rounded-lg shadow-md p-4 flex items-center">
          <div className="w-1/2">
            <h4 className="text-xl font-semibold">{selectedPokemon.name.english}</h4>
            <div className="poke-img-bg w-40 h-40 sm:w-40 sm:h-40 md:w-40 md:h-40 flex items-center justify-center rounded-md overflow-hidden">
              <img
                src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${selectedPokemon.id}.svg`}
                alt={selectedPokemon.name.english}
                className="object-contain w-full h-full"
              />
            </div>
          </div>
          <div className="w-1/2 pl-4">
            <p className="text-md mb-2"><span className="font-semibold">Type:</span> {selectedPokemon.type.join(', ')}</p>
            <p className="text-sm font-semibold">Base Stats:</p>
            <p className="text-sm"><span className="font-semibold">HP:</span> {selectedPokemon.base.HP}</p>
            <p className="text-sm"><span className="font-semibold">Attack:</span> {selectedPokemon.base.Attack}</p>
            <p className="text-sm"><span className="font-semibold">Defense:</span> {selectedPokemon.base.Defense}</p>
          </div>
        </div>
        <div className="bg-white rounded-lg shadow-md p-4 flex items-center">
          <div className="w-1/2">
            <h4 className="text-xl font-semibold">{opponentPokemon.name.english}</h4>
            <div className="poke-img-bg w-40 h-40 sm:w-40 sm:h-40 md:w-40 md:h-40 flex items-center justify-center rounded-md overflow-hidden">
              <img
                src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${opponentPokemon.id}.svg`}
                alt={opponentPokemon.name.english}
                className="object-contain w-full h-full"
              />
            </div>
          </div>
          <div className="w-1/2 pl-4">
            <p className="text-md mb-2"><span className="font-semibold">Type:</span> {opponentPokemon.type.join(', ')}</p>
            <p className="text-sm font-semibold">Base Stats:</p>
            <p className="text-sm"><span className="font-semibold">HP:</span> {opponentPokemon.base.HP}</p>
            <p className="text-sm"><span className="font-semibold">Attack:</span> {opponentPokemon.base.Attack}</p>
            <p className="text-sm"><span className="font-semibold">Defense:</span> {opponentPokemon.base.Defense}</p>
          </div>
        </div>
      </div>
      <div className="bg-gray-100 p-4 rounded-lg shadow-md mt-4">
        <h4 className="text-lg font-bold mb-2">Battle Log</h4>
        <ul>
          {battleLog.map((log, index) => (
            <li key={index}>{log}</li>
          ))}
        </ul>
      </div>
      {winner && <h3 className="text-2xl font-bold mt-4">Winner: {winner}</h3>}
    </div>
  );
}

export default PokeBattle;
