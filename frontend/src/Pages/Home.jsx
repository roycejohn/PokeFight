
import pikachu from '../assets/logo-poke.png';
import pokemon from '../assets/pokemon.svg';

const Home = () => {
  return (
      <div className="home">
            <div className="content">
                <h1>WELCOME</h1>
                <img src={pikachu} alt="Pikachu" className="main-image" />
                <img src={pokemon} alt="Pikachu" className="main-logo" />
                <button className='button-left' onClick={() => window.location.href = '/pokemons'}>
                See Pokedex
                </button>
                <button className='button-right' onClick={() => window.location.href = '/game'}>
                Play Game
                </button>
            </div>
      </div>
  );
};

export default Home;