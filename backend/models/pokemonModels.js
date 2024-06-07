
const { Schema, model} = require("mongoose")



const baseSchema = new Schema ({
    HP: {
        type: Number,
        required: true
    },
    Attack:{
        type: Number,
        required: true
    },
    Defense:{
        type: Number,
        required: true
    },
    Speed: {
        type: Number,
        required: true
    }
})

const pokemonSchema = new Schema({

    id: {
        type: Number,
        required: true,
        unique: true
      },

    name: {
        type: String,
        required: true,
        unique: true, 
        default: ""
    },
    type: {
        type: [String],
        required: true
    },
    base: {
        type: baseSchema,
        required:true
    }

}, {collection: "pokemonsCollection" } )

module.exports = model( "pokemonCollection", pokemonSchema )



{/* 

const baseSchema = new Schema({
    HP: { type: Number, required: true },
    Attack: { type: Number, required: true },
    Defense: { type: Number, required: true },
    "Sp. Attack": { type: Number, required: true },
    "Sp. Defense": { type: Number, required: true },
    Speed: { type: Number, required: true }
});

const nameSchema = new Schema({
    english: { type: String, required: true },
    japanese: { type: String, required: true },
    chinese: { type: String, required: true },
    french: { type: String, required: true }
});

const pokemonSchema = new Schema({
    id: { type: Number, required: true, unique: true },
    name: { type: nameSchema, required: true },
    type: { type: [String], required: true },
    base: { type: baseSchema, required: true }
}, { collection: "pokemonsCollection" });

module.exports = model("pokemonCollection", pokemonSchema);

*/}