

function PokeList() {
  return (
    <>
      <div className="pokedex-page container flex flex-col items-center justify center">
        <div className="">
          <div className="tex-center m-4">
            <h1>Web PokéAPI</h1>
          </div>
          <div className="flex items-center">
            <input
                type="text"
                placeholder="Search Pokémon name or number here"
                className="px-20 h-12 rounded-md text-white focus:outline-none focus:bg-gray-500"
            />
            <button type="submit" className="mx-1 h-12 border border-gray-500 bg-transparent text-gray-500 hover:bg-gray-700 hover:text-white rounded-md px-3">
                <i className="fas fa-search"></i>
            </button>
          </div>
        </div>
      </div>
    </>
  )
}

export default PokeList