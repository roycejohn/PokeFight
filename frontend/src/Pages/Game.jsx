
import { Link } from 'react-router-dom';



function Game() {
  

  return (
    <div className="text-center">
      <header className="my-8">
        <h1 className='text-4xl font-bold mb-4'>Pokemon Games</h1>
        <div className='space-x-4'>
          <Link to="/game/pokeboard">
            <button className="bg-gray-600 text-white py-2 px-4 rounded hover:bg-blue-700 transition">Poke Board</button>
          </Link>
          <Link to="/game/pokefight">
            <button className="bg-gray-600 text-white py-2 px-4 rounded hover:bg-green-700 transition">Poke Fight</button>
          </Link>
        </div>
      </header>
      
    </div>
  );
}

export default Game;
