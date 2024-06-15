import React, { useState, useEffect } from 'react';
import Logo from "./LogoPokemon.png";
import PokedexFrame from './PokedexFrame.jsx';
import "./Finder.css"

const Finder = () => {
    return(
        <div>
            <div className="bar">
                <div className="title">
                    <img src={Logo} alt="Logo Pokemon" className="image" />
                    <h1>Pokemon de la primera generación</h1>
                </div>
                <div className="finder">
                    <label>Buscar Pokemon:</label>
                    <input placeholder="charizard"></input>
                    <button>Buscar</button>
                </div>
            </div>
            <div className='body'>
                <PokedexFrame/>
            </div>
        </div>
    )
};

export default Finder;