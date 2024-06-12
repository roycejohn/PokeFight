import './App.css'
import { Routes, Route } from 'react-router-dom'
import Header from './components/Header'
import Footer from './components/Footer'
import Home from './Pages/Home'
import PokeList from './Pages/PokeList'
import PokeDetails from './components/PokeDetails'
import About from './Pages/About'
import Game from './Pages/Game'
import PokeBoard from './Pages/PokeBoard'
import PokeFight from './Pages/PokeFight'



function App() {
  return(
    <div className="app-container">
        <Header />
        <div className="content">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/pokemons" element={<PokeList />} />
            <Route path="/pokemons/:id" element={<PokeDetails />} />
            <Route path="/game" element={<Game />} />
            <Route path='/game/pokeboard' element={<PokeBoard />} />
            <Route path='/game/pokefight' element={<PokeFight />} />
            <Route path="/about" element={<About />} />
          </Routes>
        </div>
        <Footer />
      </div>
  );
 
}

export default App
