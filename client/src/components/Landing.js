import React from 'react';
import { Link } from 'react-router-dom';
import './Landing.css'

export function Landing(){
    return (
        <div className='landing'>
            <h1>Bienvenidos a CUCINARE</h1>
            <Link to='/home'>
                <button className='ingresar'>Entrar</button>
            </Link>
        </div>
    )
}

export default Landing;