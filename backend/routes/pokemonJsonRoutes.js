//chnage name if necessary
const {Router} = require( "express") 
//const { saveResult } = require("../controllers/json_file_pokemonController.js")
const gameJsonRouter =  Router()
const BattleResult = require("../models/BattleResults")

 
//gameJsonRouter.post("/save", saveResult)
gameJsonRouter.post("/saveResult", async (req, res) => {
    const { winner, selectedPokemon, opponentPokemon } = req.body;

    // Basic validation
    if (!winner || !selectedPokemon || !opponentPokemon) {
        return res.status(400).json({ message: 'Missing required fields' });
    }

    try {
        const newResult = new BattleResult({
            winner,
            selectedPokemon: selectedPokemon.name,  // Save the name of the selected Pokémon
            opponentPokemon: opponentPokemon.name  // Save the name of the opponent Pokémon
        });
        await newResult.save();
        res.status(201).json({ message: 'Battle result saved successfully' });
    } catch (err) {
        console.error(err);
        res.status(500).json({ message: 'Failed to save battle result' });
    }
});


//  route to get all battle results
gameJsonRouter.get("/results", async (req, res) => {
    try {
        const results = await BattleResult.find();
        res.status(200).json(results);
    } catch (err) {
        console.error(err);
        res.status(500).json({ message: 'Failed to fetch battle results' });
    }
});

module.exports = gameJsonRouter;


module.exports = gameJsonRouter;