const express = require("express")
const app = express()

const PORT = process.env.PORT || 3000;

app.get("/", (req,res) => {
    res.send( 
        "<h1>Hello Pokedex</h1> <p> Good morning: Royce & Rabia</p> <p>Take your morning coffee :) and dont forget to choose your Pokemon !!</p>")
})

app.listen ( PORT, () => console.log(`Server is live on: http://localhost:${PORT}`))