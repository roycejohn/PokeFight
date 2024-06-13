const mongoose = require("mongoose")

const pokefightSchema = new mongoose.Schema({
    playerPokemon: {
        id: Number,
        name: String,
        type: [ String],
        base: {
            HP: Number,
            Attack: Number,
            Defense: Number
        }
    },
    opponentPokemon: {
        id: Number,
        name: String,
        type: [ String],
        base: {
            HP: Number,
            Attack: Number,
            Defense: Number
        }

    },
    winner: {
        winner: String,
        battleLog: [String],
        turns: Number,
        date: {
            type: Date,
            default: Date.now
        }

    }

})

const FightGame = mongoose.model("BattleGame", pokefightSchema);

module.exports = FightGame; 
