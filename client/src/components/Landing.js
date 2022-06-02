import React from 'react';
import { Link } from 'react-router-dom';
import './StylesSheets/Landing.css'
import Chefcito from './imagenes/kisspng-chef-cartoon-clip-art-chef-5ab9426af1a5a0.5282250815220906029898.png'

export function Landing(){
    return (
        <div className='landing'>
            <img className='logo' src={Chefcito} alt='chefcito'></img>
            <h1 className='titulo_pagina'>NICO CUCINARE</h1>
            <Link to='/home'>
                <button className='ingresar'>Entrar</button>
            </Link>
        </div>
    )
}

export default Landing;