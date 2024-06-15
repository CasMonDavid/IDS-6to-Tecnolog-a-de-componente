import React, { useState, useEffect } from "react";
import Spinner from 'react-bootstrap/Spinner';
import "./PokeCard.css";

const Card = ({ url, name }) => {
    const [data, setData] = useState([]);
    const [sprite,setSprite] = useState("");
    const [id,setId] = useState("");
    const [height,setHeight] = useState("");
    const [weight,setWeight] = useState("");
    const [loading, setLoading] = useState(true);

    const fetchData = async () => {
        try {
            const response = await fetch(url);
            const result = await response.json();
            setData(result.sprites);
            setSprite(result.sprites.front_default);
            setId(result.id);
            setHeight(result.height);
            setWeight(result.weight);
            setLoading(false);
        } catch (error) {
            console.error('Error al obtener los datos:', error);
            setLoading(false);
        }
    };

    useEffect(() => {
        setLoading(true);
        fetchData();
    }, [url]);

    if (loading) {
        return (
            <Spinner animation="border" role="status">
                <span className="visually-hidden">Cargando...</span>
            </Spinner>
        )
    }

    return (
        <div className="container-card">
            <div className="image-title">
                <img src={sprite} alt={name} className="imgage" />
                <h3>{name}</h3>
            </div> 
            <div>
                <p>Id: {id}</p>
                <p>Altura: {height*10} centímetros</p>
                <p>Peso: {weight/10} kilogramos</p>
            </div>
        </div>
    )

};

export default Card;