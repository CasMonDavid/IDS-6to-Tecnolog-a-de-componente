import React, { useState, useEffect } from "react";
import { Container, Row, Col, Card } from "react-bootstrap";
import PokeCard from "./PokeCard.jsx";

const PokedexFrame = () => {
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(true);

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

    useEffect(() => {
        fetchData();
    }, []);

    if (loading) {
        return <div>Cargando...</div>;
    }

    return (
        <Container>
            <Row xs={1} md={2} lg={3} xl={4} className="g-4">
                {data.map((pokemon, index) => (
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