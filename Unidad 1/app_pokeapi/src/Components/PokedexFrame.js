import { useEffect, useState, React } from "react";
import axios from "axios";
import { InputGroup,Form, Button, Container, Col, Card } from "react-bootstrap";
function PokedexFrame ({name, url}){

    useEffect(() => {
        const fetchPokemonData = async () => {
          try {
            const response = await axios.get(url);
            setPokemonData(response.data);
          } catch (error) {
            console.error('Error fetching Pokemon data:', error);
          }
        };
        fetchPokemonData();
        }, [pokemonName]);

        if (!pokemonData) {
            return <div>Cargando...</div>;
    }

    return(
        <Col>
            <Card className='text-center' style={{ width: '18rem' }}>
                <Card.Img variant="top" src={getSprite()} />
                <Card.Body>
                <Card.Title>{name}</Card.Title>
                <Card.Text>
                    cuerpo
                </Card.Text>
                </Card.Body>
            </Card>
        </Col>
    );
}

export default PokedexFrame;