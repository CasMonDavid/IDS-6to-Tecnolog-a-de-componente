import logo from './logo.svg';
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
        console.log(data.results);
        setPokemonList(data.results);
      });
  }, []);

  return (
    <div>
      <div className='banner'>
        <img src={logo} alt='Logo' className='logo' />
        <h1>Recetas de cocina</h1>
      </div>
      <div className='barra-busqueda'>
        <div className='inputBusqueda'>
          <InputGroup className="mb-3 inputBusqueda">
            <Form.Control
              placeholder="Nombre de la receta"
              aria-label="Nombre de la receta"
              aria-describedby="basic-addon2"
            />
            <Button variant="outline-secondary" id="button-addon2">
              Buscar
            </Button>
          </InputGroup>
        </div>
      </div>
      <div>
        <Container>
          {/* <Encabezado logo={logo} titulo={"Juegos"} /> */}
          <Finder texto={"Buscar Pokemon"} foundPokemon={setPokemon} />

          {pokemon && (
            <PokemonCard
              name={pokemon.name}
              image={pokemon.sprites.front_default}
            />
          )}

          {/*       
            {pokemonList.map((pokemon, num) => (
              <PokemonCard name={pokemon.name} image={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/${num+1}.png`} />
            ))} */}
        </Container>
      </div>
    </div>
  );
}

export default App;
