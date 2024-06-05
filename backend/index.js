// require
const express = require("express")
const app = express()
const connectionToDB = require("./db/dbConnection")
require("dotenv").config(); 

// connection to Mongo DB
connectionToDB()

// Defining  PORT
const PORT = process.env.PORT || 3000;

// importing controllers made with json Data file
const { getAllPokemons, getPokemonById, getPokemonInfo } = require ("./controllers/json_file_pokemonController")


//  Hello CODE
app.get("/", (req,res) => {
    res.send( 
        "<h1>Hello Pokedex</h1> <p> Good morning: Royce & Rabia</p> <p>Take your morning coffee :) and dont forget to choose your Pokemon !!</p>")
})

// Get all Pokemons : /pokemon
app.get( "/pokemon", getAllPokemons)

// Route to get a specific Pokémon by ID
app.get('/pokemon/:id', getPokemonById);

// Optional route to get specific information about a Pokémon
app.get('/pokemon/:id/:info', getPokemonInfo);




app.listen ( PORT, () => console.log(`Server is live on: http://localhost:${PORT}`))