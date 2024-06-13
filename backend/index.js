// require
require("dotenv").config();
const express = require("express")
const app = express()
const gameJsonRouter = require("./routes/pokemonJsonRoutes")  // route for game results
const mongoose = require('mongoose'); // testing for results
const BattleResult = require("./models/BattleResults")



const connectionToDB = require("./db/dbConnection")
const sanitize = require ("express-mongo-sanitize")

// adding cors middleware
const cors = require ('cors');
 

//  Router for MongoDB Pokemon
{/*  const pokemonRouter = require("./routes/pokemonRoutes")  */}

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

// route for game results
app.use("/game", gameJsonRouter)

// Get all Pokemons : /pokemon
app.get( "/json/pokemon", getAllPokemons)

// Route to get a specific Pokémon by ID
app.get('/json/pokemon/:id', getPokemonById);

// Optional route to get specific information about a Pokémon
app.get('/json/pokemon/:id/:info', getPokemonInfo);

// Endpoint to save battle results
app.post('/game/saveResult', async (req, res) => {
    const { winner } = req.body;
  
    try {
      const newResult = new BattleResult({ winner });
      await newResult.save();
      res.status(201).json({ message: 'Battle result saved successfully' });
    } catch (err) {
      console.error(err);
      res.status(500).json({ message: 'Failed to save battle result' });
    }
  });


{/*    MONGO DB
// Pokeomon Routes
app.use("/pokemons", pokemonRouter ); 
*/}


app.listen ( PORT, () => console.log(`Server is live on: http://localhost:${PORT}`))


 



