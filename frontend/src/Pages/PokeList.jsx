

// import { useEffect, useState } from "react";
// import { Link } from "react-router-dom";

// const PokeList = () => {
//   const [pokemons, setPokemons] = useState([]);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState(null);
//   const [searchFunction, setSearchFunction] = useState ("");
//   const [searchResults, setSearchResults] = useState ([]);

//   useEffect(() => {
//     fetch('https://raw.githubusercontent.com/fanzeyi/pokemon.json/master/pokedex.json')
//       .then(response => {
//         if (!response.ok) {
//           throw new Error(`HTTP error! status: ${response.status}`);
//         }
//         return response.json();
//       })
//       .then(data => {
//          const limitedData = data.filter(pokemon => pokemon.id >= 1 && pokemon.id <= 28);
         
//          const formattedData = limitedData.map(pokemon => ({
//            id: pokemon.id,
//            name: pokemon.name.english,
//            type: pokemon.type,
//            base: pokemon.base,
//          }));
//         setPokemons(formattedData);
//         setSearchResults(formattedData);
//         setLoading(false);
//       })
//       .catch(err => {
//         console.error(err);
//         setError(err.message);
//         setLoading(false);
//       });
//   }, []);


//   const handleSearchInputChange = (e) => {
//     setSearchFunction(e.target.value)
//   };
//   const handleSearchClick = () => {
//     const filteredPokemons = pokemons.filter(pokemon =>
//       pokemon.name.toLowerCase().includes(searchFunction.toLowerCase()) ||
//       pokemon.id.toString() === searchFunction
//     );
//     setSearchResults(filteredPokemons);
//   }

//   if (loading) {
//     return <div>Loading...</div>;
//   }

//   if (error) {
//     return <div>Error: {error}</div>;
//   }



//   return (
//     <div className="pokedex-page container flex flex-col items-center justify-center">
//       <div className="text-center mb-4">
//         <h1>Web PokéAPI</h1>
//       </div>
//       <div className="flex items-center mb-4">
//         <input
//           type="text"
//           placeholder="Search Pokémon name or number here"
//           value={searchFunction}
//           onChange={handleSearchInputChange}
//           className="px-4 py-2 rounded-md text-white focus:outline-none focus:bg-gray-500"
//         />
//         <button 
//           type="button"
//           onClick={handleSearchClick}
//           className="mx-2 px-4 py-2 border border-gray-500 bg-transparent text-gray-500 hover:bg-gray-700 hover:text-white rounded-md"
//           >
//           <i className="fas fa-search"></i>
//         </button>
//       </div>
//       <div>
//         <ul className="grid grid-cols-4 gap-4">
//           {searchResults.map(pokemon => (
//             <li key={pokemon.id} className="p-2 m-2 bg-gray-100 rounded-md flex flex-col items-center">
           
//               <Link to={`/pokemons/${pokemon.id}`} className="p-2 rounded-md text-center flex flex-col items-center">
//                 <div className="w-40 h-40 flex items-center justify-center bg-gray-200 rounded-md overflow-hidden">
//                   <img
//                     src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${pokemon.id}.svg`}
//                     alt={pokemon.name}
//                     className="object-contain w-full h-full"
//                   />
//                 </div>
//                 <h3 className="text-lg font-semibold mt-2">#{pokemon.id}</h3>
//                 <h3 className="text-lg font-semibold">{pokemon.name}</h3>
//                 <p>Type: {pokemon.type.join(', ')}</p>
//               </Link>
//             </li>
//           ))}
//         </ul>
//       </div>
//     </div>
//   );
// }

// export default PokeList;

import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const PokeList = () => {
  const [pokemons, setPokemons] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [searchTerm, setSearchTerm] = useState("");
  const [searchResults, setSearchResults] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const pageSize = 20;

  useEffect(() => {
    fetch('https://raw.githubusercontent.com/fanzeyi/pokemon.json/master/pokedex.json')
      .then(response => {
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        return response.json();
      })
      .then(data => {
        const formattedData = data.map(pokemon => ({
          id: pokemon.id,
          name: pokemon.name.english,
          type: pokemon.type,
          base: pokemon.base,
        }));

        setPokemons(formattedData);
        setTotalPages(Math.ceil(formattedData.length / pageSize));
        setSearchResults(formattedData.slice(0, pageSize));
        setLoading(false);
      })
      .catch(err => {
        console.error(err);
        setError(err.message);
        setLoading(false);
      });
  }, []);

  const handleSearchInputChange = (e) => {
    setSearchTerm(e.target.value);
  };

  const handleSearchClick = () => {
    const filteredPokemons = pokemons.filter(pokemon =>
      pokemon.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      pokemon.id.toString() === searchTerm
    );
    setSearchResults(filteredPokemons);
  };

  const handlePageChange = (newPage) => {
    if (newPage < 1 || newPage > totalPages) return;
    setCurrentPage(newPage);
    const startIndex = (newPage - 1) * pageSize;
    setSearchResults(pokemons.slice(startIndex, startIndex + pageSize));
  };

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <div className="pokedex-page container flex flex-col items-center justify-center">
      <div className="text-center mb-4">
        <h1>Web PokéAPI</h1>
      </div>
      <div className="flex items-center mb-4">
        <input
          type="text"
          placeholder="Search Pokémon name or number here"
          value={searchTerm}
          onChange={handleSearchInputChange}
          className="px-4 py-2 rounded-md text-white focus:outline-none focus:bg-gray-500"
        />
        <button 
          type="button"
          onClick={handleSearchClick}
          className="mx-2 px-4 py-2 border border-gray-500 bg-transparent text-gray-500 hover:bg-gray-700 hover:text-white rounded-md"
        >
          <i className="fas fa-search"></i>
        </button>
      </div>
      <div>
        <ul className="grid grid-cols-5 gap-4">
          {searchResults.map(pokemon => (
            <li key={pokemon.id} className="p-2 m-2 bg-gray-100 rounded-md flex flex-col items-center">
              <Link to={`/pokemons/${pokemon.id}`} className="p-2 rounded-md text-center flex flex-col items-center">
                <div className="w-40 h-40 flex items-center justify-center bg-gray-200 rounded-md overflow-hidden">
                  <img
                    src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${pokemon.id}.svg`}
                    alt={pokemon.name}
                    className="object-contain w-full h-full"
                  />
                </div>
                <h3 className="text-lg font-semibold mt-2">#{pokemon.id}</h3>
                <h3 className="text-lg font-semibold">{pokemon.name}</h3>
                <p>Type: {pokemon.type.join(', ')}</p>
              </Link>
            </li>
          ))}
        </ul>
      </div>
      <div className="flex justify-center">
        <button 
          onClick={() => handlePageChange(currentPage - 1)}
          className="px-4 py-2 mt-12 mb-16  mx-4 bg-gray-300 rounded-md hover:bg-gray-400"
          disabled={currentPage === 1}
        >
          Back
        </button>
        <button 
          onClick={() => handlePageChange(currentPage + 1)}
          className="px-4 py-2 mt-12 mb-16 mx-4 bg-gray-300 rounded-md hover:bg-gray-400"
          disabled={currentPage === totalPages}
        >
          Next
        </button>
      </div>
    </div>
  );
}

export default PokeList;

