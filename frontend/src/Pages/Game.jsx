import { useEffect } from 'react';

function Game() {
  useEffect(() => {
    const pokeAPIBaseUrl = "https://pokeapi.co/api/v2/pokemon/";
    const game = document.getElementById('game');

    let isPaused = false;
    let firstPick; 

    const colors = {

      fire: '#FDDFDF',
      grass: '#DEFDE0',
      electric: '#FCF7DE',
      water: '#DEF3FD',
      ground: '#F4E7DA',
      rock: '#D5D5D4',
      fairy: '#FCEAFF',
      poison: '#98D7A5',
      bug: '#F8D5A3',
      dragon: '#97B3E6',
      psychic: '#EAEDA1',
      flying: '#F5F5F5',
      fighting: '#E6E0D4',
      normal: '#F5F5F5',
      
    }



    const loadPokemon = async () => {
      const randomIds = new Set();
      while (randomIds.size < 8) {
        const randomNumber = Math.ceil(Math.random() * 150);
        randomIds.add(randomNumber);
      }
      console.log([...randomIds]);
      const pokePromises = [...randomIds].map(id => fetch(pokeAPIBaseUrl + id));
      const responses = await Promise.all(pokePromises);
      return await Promise.all(responses.map(res => res.json()));
    }

    const displayPokemon = (pokemon) => {
      pokemon.sort(() => Math.random() - 0.5);
      const pokemonHTML = pokemon.map(pokemon => {
        const type = pokemon.types[0]?.type?.name || 'normal';
        const color = colors[type];
        return `
          <div class="card" style="background-color:${color}" onclick="clickCard(event)" data-pokemon="${pokemon.name}">
            <div class="front">
            </div>
            <div class="back rotated" style="background-color:${color}>
            <img src="${pokemon.sprites.front_default}"/> alt=${pokemon.name}/>
            <h2>${pokemon.name}</h2>
            </div>
          </div>

        `;
      }).join('');
      document.getElementById('game').innerHTML = pokemonHTML;
    }

    const clickCard= (event) => {
      const pokemonCard = event.currentTarget;
      const [front, back] = getFrontAndBackFromCard(pokemonCard);
      if(front.classList.contains("rotated") || isPaused) return;
      isPaused = true;

      front.classList.toggle('rotated');
      back.classList.toggle('rotated');

      if(!firstPick)
        {
          firstPick = pokemonCard;
          isPaused = false;
        } else {
          const secondPokemonName = pokemonCard.dataset.pokename;
          const firstPokemonName = firstPick.dataset.pokename;
        }
    }

    const getFrontAndBackFromCard = (card) => {
      const front = card.querySelector(".front");
      const back = card.querySelector(".back");
      return [front, back]
    }

    const resetGame = async () => {
      const pokemon = await loadPokemon();
      displayPokemon([...pokemon, ...pokemon]);
    };

    resetGame();
  }, []);

  return (
    <div className="game-page">
      <header>
        <h1>PokeMatch</h1>
        <button onclick="resetGame()">Reset</button>
      </header>
      <div id="game"></div>
    </div>
  );
}

export default Game;