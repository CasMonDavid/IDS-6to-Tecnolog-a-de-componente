import logo from './LogoPokemon.png';
import './App.css';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import Card from 'react-bootstrap/Card';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { useEffect, useState } from "react";
import Finder from "./Components/Finder.js";
import PokedexFrame from './Components/PokedexFrame.js';

function App() {

  const [pokemonList, setPokemonList] = useState([]);

  const [nombre, setNombre] = useState("Nombre");
  const [name, setName] = useState("Nombre");
  const [pokemon, setPokemon] = useState("");

  const URL = "https://pokeapi.co/api/v2/pokemon?limit=150&offset=0";

  useEffect(() => {
    fetch(URL)
      .then((response) => response.json())
      .then((data) => {
        setPokemonList(data.results);
      });
  }, []);

  return (
    <div>
      <div className='banner'>
        <img src={logo} alt='Logo' className='logo' />
        <h1>Buscador Pokemon: Primera Generación</h1>
      </div>
      <div className='barra-busqueda'>
        <Container>
          <Finder texto={"Buscar Pokemon"} foundPokemon={setPokemon} />
        </Container>
      </div>
      <div>
        <Container>
          <Row>
            {pokemonList.map((pokemon, index) => (
              <PokedexFrame key={index} name={pokemon.name} url={pokemonList.url} />
            ))} 
          </Row>
        </Container>
      </div>
    </div>
  );
}

export default App;
