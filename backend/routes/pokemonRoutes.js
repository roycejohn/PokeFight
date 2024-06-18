//chnage name if necessary
const {Router} = require( "express") 
const { saveResult } = require("../controllers/json_file_pokemonController.js")
const pokemonRouter =  Router()

const {getAllPokemons, getPokemonById, createOnePokemon, updateOnePokemon, getPokemonInfo, deleteOnePokemon } = require("../controllers/pokemonController.js")
 

pokemonRouter.route("/").get(getAllPokemons) 
.post(createOnePokemon)





{/* 

.post()
pokemonRouter.route("/pokemon/:id").get(getPokemonById).update().delete()
pokemonRouter.route("/pokemon/:id/info").get()

*/} 

module.exports = pokemonRouter;