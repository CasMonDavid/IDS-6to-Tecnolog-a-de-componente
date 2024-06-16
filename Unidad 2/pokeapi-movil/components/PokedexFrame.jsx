import React, { useState, useEffect } from "react";
import { Text, View } from "react-native";
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
        return <Text>Cargando...</Text>;
    }

    return (
        <View>
            <View>
                {dataFiltered.map((pokemon) => (
                    <View key={pokemon.name}>
                        <PokeCard
                            url={pokemon.url}
                            name={pokemon.name}
                        />
                    </View>
                ))}
            </View>
        </View>
    )
};

export default PokedexFrame;