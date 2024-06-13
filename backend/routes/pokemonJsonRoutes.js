//chnage name if necessary
const {Router} = require( "express") 
const { saveResult } = require("../controllers/json_file_pokemonController.js")
const gameJsonRouter =  Router()

 
gameJsonRouter.post("/save", saveResult)






module.exports = gameJsonRouter;