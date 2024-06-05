
import './App.css'
import { Routes, Route } from 'react-router-dom'
import PokeList from './pages/PokeList'
import PokeDetails from './components/PokeDetails'
import About from './pages/About'
import Game from './pages/Game'



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
