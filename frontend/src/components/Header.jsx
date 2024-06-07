
import logo from '../assets/react.svg';
import { useState } from 'react';



const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <>
        <header className='relative'>
            <div className="container mx-auto py-8 flex justify-between items-center">
                <div className="flex items-center">
                    <img className="logo absolute" src={logo} alt="Logo"  />
                </div>

                <nav className="hidden md:flex space-x-4">
                    <a href="/" className="hover:text-gray-100">Home</a>
                    <a href="/pokemons" className="hover:text-gray-100">Pokédex</a>
                    <a href="/game" className="hover:text-gray-100">Game</a>
                    <a href="/about" className="hover:text-gray-100">About</a>
                </nav>

                <div className=" hidden md:flex px-5">
                    <button className='text-white bg-gray-500 ml-12 px-4 py-2 rounded-md hover:bg-gray-700'>Sign Up
                    </button>
                    <button className='text-white bg-gray-500 ml-4 px-4 py-2 rounded-md hover:bg-gray-700'>Log In
                    </button>
                </div>
            
                <div className="md:hidden mx-6">
                    <button onClick={toggleMenu} className="text-black focus:outline-none">
                        <svg className="h-9 w-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                        </svg>
                    </button>
                </div>
            </div>

            {isMenuOpen && (
                <div className="md:hidden py-2 px-4">
                    <div className='nav-list'>
                        <a href="/" className="block py-2 px-4 font-bold hover:bg-gray-500">Home</a>
                        <a href="/recipes" className="block py-2 px-4 font-bold hover:bg-gray-500">Pokédex</a>
                        <a href="/recipes" className="block py-2 px-4 font-bold hover:bg-gray-500">Game</a>
                        <a href="/about" className="block py-2 px-4 font-bold hover:bg-gray-500">About</a>
                    </div>
                    <div className='sign-list'>
                        <button className='mx-4 text-white bg-gray-500 px-4 py-2 rounded-md hover:bg-gray-700'>Sign Up</button>
                        <button className='text-white bg-gray-500 px-4 py-2 rounded-md hover:bg-gray-700'>Log In</button> 
                    </div>
                    
                </div>
            )}
        </header>


    </>
    
  );
};

export default Header;
