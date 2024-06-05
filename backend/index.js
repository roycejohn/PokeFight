const express = require("express")
const app = express()

const PORT = process.env.PORT || 3000;

// Import the JSON file
let jsonData = require('./pokedex.json');



app.get("/", (req,res) => {
    res.send( 
        "<h1>Hello Pokedex</h1> <p> Good morning: Royce & Rabia</p> <p>Take your morning coffee :) and dont forget to choose your Pokemon !!</p>")
})

app.get( "/pokemon", (req,res) => {
    res.json(jsonData);
})

// Route to get a specific Pokémon by ID
app.get('/pokemon/:id', (req, res) => {
    const id = req.params.id;
    const pokemon = jsonData.find(p => p.id === parseInt(id));
    if (!pokemon) {
        res.status(404).json({ error: 'Pokémon not found' });
    } else {
        res.json(pokemon);
    }
});

// Optional route to get specific information about a Pokémon
app.get('/pokemon/:id/:info', (req, res) => {
    const id = req.params.id;
    const info = req.params.info;
    const pokemon = jsonData.find(p => p.id === parseInt(id));
    if (!pokemon) {
        res.status(404).json({ error: 'Pokémon not found' });
    } else {
        const selectedInfo = pokemon[info];
        if (selectedInfo) {
            res.json({ [info]: selectedInfo });
        } else {
            res.status(400).json({ error: 'Invalid info parameter' });
        }
    }
});




app.listen ( PORT, () => console.log(`Server is live on: http://localhost:${PORT}`))