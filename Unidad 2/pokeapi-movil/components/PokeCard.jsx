import React, { useState, useEffect } from "react";
import { View, Text, Image, StyleSheet } from "react-native";

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
            <Text className="visually-hidden">Cargando...</Text>
        )
    }

    return (
        <View style={styles.containerCard}>
            <View style={styles.imageTitle}>
                <Image source={{ uri:sprite }} style={styles.imageSprite}/>
                <Text style={styles.containerCardH3}>{name}</Text>
            </View> 
            <View>
                <Text style={styles.containerCardP}>Id: {id}</Text>
                <Text style={styles.containerCardP}>Altura: {height*10} centímetros</Text>
                <Text style={styles.containerCardP}>Peso: {weight/10} kilogramos</Text>
            </View>
        </View>
    )

};

const styles = StyleSheet.create({
    containerCard: {
        flexDirection: 'row',
        justifyContent: 'space-evenly',
        alignItems: 'center',
        backgroundColor: 'lightgray',
        border: 1,
        borderRadius: 10,
        boxShadow: 2,
        margin: 10,
        paddingTop: 5,
        paddingBottom: 5
    },
    containerCardH3: {
        fontSize: 'large',
        fontWeight: 700
    },
    containerCardP: {
        border: 1,
        borderRadius: 5,
        padding: 4,
        fontSize: 'large',
        fontWeight: 400
    },
    imageTitle: {
        flexDirection: 'column',
        alignItems: 'center'
    },
    imageSprite: {
        width:100,
        height:100
    }
});

export default Card;