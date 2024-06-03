import React from 'react'
import { NavLink } from 'react-router-dom'
import { Link } from 'react-router-dom'

function Navbar() {

  return (

    <>
        <nav>
            <ul>
                <li><NavLink to="/">Home</NavLink></li>
                <li><Link to={"https://raw.githubusercontent.com/fanzeyi/pokemon.json/master/pokedex.json"} target='_blank'>Pokedex</Link></li>
            </ul>
        </nav>
    </>
  )
}

export default Navbar