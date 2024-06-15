import React, { useState, useEffect } from 'react';
import Logo from "./LogoPokemon.png";
import PokedexFrame from './PokedexFrame.jsx';
import "./Finder.css"

const Finder = () => {

    const [lookPokemon, setLookPokemon] = useState("");

    const searchChange = (e) => {
        setLookPokemon(e.target.value);
    }

    return(
        <div>
            <div className="bar">
                <div className="title">
                    <img src={Logo} alt="Logo Pokemon" className="image" />
                    <h1>Pokemon de la primera generación</h1>
                </div>
                <div className="finder">
                    <label>Buscar Pokemon:</label>
                    <input
                        placeholder="charizard"
                        value={lookPokemon}
                        onChange={searchChange}
                    />
                    <button onClick={() => setLookPokemon(lookPokemon)}>Buscar</button>
                </div>
            </div>
            <div className='body'>
                <PokedexFrame
                lookPokemon={lookPokemon}
                />
            </div>
        </div>
    )
};

export default Finder;