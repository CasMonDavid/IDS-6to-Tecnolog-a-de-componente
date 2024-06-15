import React, { useState, useEffect } from "react";
import { Container, Row, Col, Card } from "react-bootstrap";
import PokeCard from "./PokeCard.jsx";

const PokedexFrame = ({ lookPokemon }) => {
    const [data, setData] = useState([]);
    const [dataFiltered, setDataFiltered] = useState([]);
    const [loading, setLoading] = useState(true);

    //JALA TODO DE LA POKEAPI PRINCIPAL
    const fetchData = async () => {
        try {
            const response = await fetch('https://pokeapi.co/api/v2/pokemon?limit=151&offset=0');
            const result = await response.json();
            setData(result.results);
            setLoading(false);
        } catch (error) {
            console.error('Error al obtener los datos:', error);
            setLoading(false);
        }
    };

    //FILTRA LOS VALORES DESEADOS
    useEffect(() => {
        if (!lookPokemon){
            setDataFiltered(data);
            return;
        }
        
        const filtered = data.filter(pokemon =>
            pokemon.name.includes(lookPokemon.toLowerCase())
        );
        setDataFiltered(filtered);
    }, [lookPokemon, data]);

    useEffect(() => {
        fetchData();
    }, []);

    if (loading) {
        return <div>Cargando...</div>;
    }

    return (
        <Container>
            <Row xs={1} md={2} lg={3} xl={4} className="g-4">
                {dataFiltered.map((pokemon, index) => (
                    <Col>
                        <PokeCard
                            key={index}
                            url={pokemon.url}
                            name={pokemon.name}
                        />
                    </Col>
                ))}
            </Row>
        </Container>
    )
};

export default PokedexFrame;