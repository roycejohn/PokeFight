
import './App.css'
import { Routes, Route } from 'react-router-dom'
import Header from './components/Header'
import Footer from './components/Footer'
import Home from './Pages/Home'
import PokeList from './Pages/PokeList'
import PokeDetails from './components/PokeDetails'
import About from './Pages/About'
import Game from './Pages/Game'




function App() {
  return(
    <>
      <Header />
        <Routes>
          <Route path="/" element={<Home />} /> 
          <Route path="/pokedex" element={<PokeList />} /> 
          <Route path="/pokedex/:id" element={<PokeDetails />} />
          <Route path="/game" element={<Game />} /> 
          <Route path="/about" element={<About />} /> 
        </Routes>
      <Footer />
    </>

  );
 
}

export default App
