import React from "react";
import {SafeAreaView, StyleSheet, TextInput, View} from 'react-native';
import Button from "react-bootstrap/Button";

const SearchBar = () => {
    const [text, onChangeText] = React.useState('charmander');

    return (
        <View>
            <TextInput
                placeholder="Buscar pokemon"
                value={text}
                onChangeText={onChangeText}
            />
            <Button variant='light'>Hola</Button>
        </View>
    );
};

const styles = StyleSheet.create({

})

export default SearchBar;