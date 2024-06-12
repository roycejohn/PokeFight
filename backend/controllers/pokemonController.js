//  THIS CONTROLLERS ARE  FOR MONGO DB

const PokemonModel = require("../models/pokemonModels.js")

// console.log(pokemonCollection)


const getAllPokemons = async (req, res) => {
    try {
        const pokemons = await PokemonModel.find();
        return res.status(200).json(pokemons)
    } catch (error){
        throw error; 
    }
};

const getPokemonById = async (req, res) => {
    try {
        const {id} = request.params;
        const pokemonById = await PokemonModel.findById(id);
        return res.status(200).json(pokemonById)
    } catch (error){
        throw error; 
    }
};

const createOnePokemon= async (req, res) => {
    try {
        const {name, type, base} = req.body

        const newPokemon = await PokemonModel.create({name, type, base});

        return res.status(201).json(newPokemon)

    } catch (error){
         console.error(error); 
    }
};

const updateOnePokemon = async (req, res) => {
    try {

    } catch (error){
        throw error; 
    }
};

const getPokemonInfo= async (req, res) => {
    try {

    } catch (error){
        throw error; 
    }
};

const deleteOnePokemon = async (req, res) => {
    try {

    } catch (error){
        throw error; 
    }
};


module.exports = {getAllPokemons, getPokemonById, createOnePokemon, updateOnePokemon, getPokemonInfo, deleteOnePokemon }
