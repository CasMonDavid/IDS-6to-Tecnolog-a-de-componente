import React, { useState, useEffect } from 'react';
import { Image, ScrollView, Text, View, Button, TextInput, StyleSheet } from "react-native";
import PokedexFrame from './PokedexFrame.jsx';

const Finder = () => {

    const [lookPokemon, setLookPokemon] = useState("");

    const searchChange = (e) => {
        setLookPokemon(e.target.value);
    }

    return(
        <ScrollView>
            <View style={styles.bar}>
                <View style={styles.title}>
                    <Image source={{ uri:'./assets/images/LogoPokemon.png' }} style={styles.image}/>
                    <Text style={styles.finderText}>Pokemon de la primera generación</Text>
                </View>
                <View style={styles.finder}>
                    <TextInput
                        style={styles.finderInput}
                        placeholder="Buscar Pokemon"
                        value={lookPokemon}
                        onChange={searchChange}
                    />
                    <Button style={styles.finderButton} onClick={() => setLookPokemon(lookPokemon)} title="Buscar"/>
                </View>
            </View>
            <View style={styles.body}>
                <PokedexFrame
                lookPokemon={lookPokemon}
                />
            </View>
        </ScrollView>
    )
};

const styles = StyleSheet.create({
    bar: {
        flex:1,
        flexDirection: 'column',
        alignItems: 'center'
    },
    title: {
        flex:1,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center'
    },
    image: {
        width: 50,
        height: 50
    },
    finder: {
        flex:1,
        flexDirection: 'row',
        width: 100,
        justifyContent: 'center'
    },
    finderText: {
        fontSize: 20,
    },
    finderInput: {
        flex:1,
        borderRadius: 10,
        border: 1,
        boxShadow: 3,
        paddingLeft: 5,
        marginLeft: 10,
        marginRight: 10,
    },
    finderButton: {
        borderRadius: 10,
        border: 0,
        boxShadow: 3,
        marginLeft: 20,
        width: 70,
        height: 30
    },
    body: {
        marginTop: 20,
        marginBottom: 30
    }
});

export default Finder;