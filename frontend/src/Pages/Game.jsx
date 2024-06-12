import { Link } from 'react-router-dom';

function Game() {
  return (
    <div className="text-center py-8">
      <div className="my-8 max-w-4xl mx-auto">
        <h1 className='text-5xl font-bold mb-4 text-gray-800'>
          Pokemon Games
        </h1>
        <div className='flex justify-center space-x-10 m-10'>
          <Link to="/game/pokeboard">
            <button className="bg-yellow-500 text-gray-800 py-3 px-10 hover:bg-red-600 hover:text-white transform transition duration-300 ease-in-out hover:scale-105">Poke Board</button>
          </Link>
          <Link to="/game/pokefight">
          <button className="bg-blue-600 text-gray-800 py-3 px-10 hover:bg-red-600 hover:text-white transform transition duration-300 ease-in-out hover:scale-105">Poke Fight</button>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Game;
