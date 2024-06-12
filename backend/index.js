// require
require("dotenv").config();
const express = require("express")
const app = express()
const cors = require('cors');


require("dotenv").config(); 
const connectionToDB = require("./db/dbConnection")
const sanitize = require ("express-mongo-sanitize")

// 
const pokemonRouter = require("./routes/pokemonRoutes")
// connection to Mongo DB
connectionToDB()

// Defining  PORT
const PORT = process.env.PORT || 3000;

// Middlewares
app.use(sanitize({replaceWith: '_', allowDots: true}))
app.use( express.json())

// add cors
app.use(cors());

// importing controllers made with json Data file
const { getAllPokemons, getPokemonById, getPokemonInfo } = require ("./controllers/json_file_pokemonController")

//  Hello CODE
app.get("/", (req,res) => {
    res.send( 
        "<h1>Hello Pokedex</h1> <p> Good morning: Royce & Rabia</p> <p>Take your morning coffee :) and dont forget to choose your Pokemon !!</p>")
})


// Get all Pokemons : /pokemon
app.get( "/json/pokemon", getAllPokemons)

// Route to get a specific Pokémon by ID
app.get('/json/pokemon/:id', getPokemonById);

// Optional route to get specific information about a Pokémon
app.get('/json/pokemon/:id/:info', getPokemonInfo);




{/*    MONGO DB
// Pokeomon Routes
app.use("/pokemons", pokemonRouter ); 
*/}


app.listen ( PORT, () => console.log(`Server is live on: http://localhost:${PORT}`))


 



