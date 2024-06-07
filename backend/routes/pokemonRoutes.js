//chnage name if necessary
const {Router} = require( "express") 
const pokemonRouter =  Router()

const {getAllPokemons, getPokemonById, createOnePokemon, updateOnePokemon, getPokemonInfo, deleteOnePokemon } = require("../controllers/pokemonController")
 

pokemonRouter.route("/").get(getAllPokemons) 

{/* 

.post()
pokemonRouter.route("/pokemon/:id").get(getPokemonById).update().delete()
pokemonRouter.route("/pokemon/:id/info").get()

*/} 

module.exports = pokemonRouter;