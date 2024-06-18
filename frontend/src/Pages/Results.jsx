
{/*import React, { useEffect, useState } from "react";
import axios from "axios";

const Results = () => {
    const [results, setResults] = useState([]);

    useEffect(() => {
        // Fetch the battle results from the backend
        const fetchResults = async () => {
            try {
                const response = await axios.get("http://localhost:3000/game/results");
                console.log(response);
                setResults(response.data);
            } catch (error) {
                console.error("Error fetching battle results:", error);
            }
        };

        fetchResults();
    }, []);

    return (
        <div className="max-w-4xl mx-auto p-4 bg-white shadow-md rounded-lg">
            <h2 className="text-2xl font-bold mb-4 text-center">Battle Results</h2>
            <ul className="space-y-4">
                {results.map((result) => (
                    <li key={result._id} className="p-4 border border-gray-200 rounded-md shadow-sm">
                        <p className="font-semibold">Winner: <span className="font-normal">{result.winner}</span></p>
                        <p className="font-semibold">Selected Pokémon: <span className="font-normal">{result.selectedPokemon}</span></p>
                        <p className="font-semibold">Opponent Pokémon: <span className="font-normal">{result.opponentPokemon}</span></p>
                        <p className="font-semibold">Timestamp: <span className="font-normal">{new Date(result.timestamp).toLocaleString()}</span></p>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default Results;
 */}


import { useEffect, useState } from "react";
import axios from "axios";

const Results = () => {
    const [results, setResults] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);
    const RESULTS_PER_PAGE = 5;

    useEffect(() => {
        // Fetch the battle results from the backend
        const fetchResults = async () => {
            try {
                const response = await axios.get("http://localhost:3000/game/results");
                console.log(response);
                setResults(response.data);
            } catch (error) {
                console.error("Error fetching battle results:", error);
            }
        };

        fetchResults();
    }, []);

    const indexOfLastResult = currentPage * RESULTS_PER_PAGE;
    const indexOfFirstResult = indexOfLastResult - RESULTS_PER_PAGE;
    const currentResults = results.slice(indexOfFirstResult, indexOfLastResult);

    const paginate = (pageNumber) => setCurrentPage(pageNumber);

    return (
        <div className="max-w-4xl mx-auto p-4 bg-yellow-200 shadow-md rounded-lg">
            <h2 className="text-2xl font-bold  text-blue-700 mb-4 text-center ">Battle Results</h2>
            <ul className="space-y-4">
                {currentResults.map((result) => (
                    <li key={result._id} className="p-4 border text-red-700 border-blue-400 rounded-md shadow-sm bg-stone-100">
                        <p className="font-semibold text-lg text-blue-700">Winner: <span className="font-normal text-gray-700">{result.winner}</span></p>
                        <p className="font-semibold text-lg">Selected Pokémon: <span className="font-normal text-gray-700">{result.selectedPokemon}</span></p>
                        <p className="font-semibold text-lg">Opponent Pokémon: <span className="font-normal text-gray-700">{result.opponentPokemon}</span></p>
                        <p className="font-semibold text-lg text-green-700">Timestamp: <span className="font-normal text-gray-700">{new Date(result.timestamp).toLocaleString()}</span></p>
                    </li>
                ))}
            </ul>
            <div className="flex justify-center mt-4 space-x-2">
                {Array.from({ length: Math.ceil(results.length / RESULTS_PER_PAGE) }, (_, index) => (
                    <button
                        key={index}
                        onClick={() => paginate(index + 1)}
                        className={`px-4 py-2 mx-1 border rounded ${
                            currentPage === index + 1 ? 'bg-blue-500 text-white' : 'bg-white text-blue-500 hover:bg-blue-100'
                        }`}
                    >
                        {index + 1}
                    </button>
                ))}
            </div>
        </div>
    );
};

export default Results;
