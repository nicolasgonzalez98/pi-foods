import React from 'react';
import Chefcito from './imagenes/kisspng-chef-cartoon-clip-art-chef-5ab9426af1a5a0.5282250815220906029898.png';
import casa from './imagenes/home.png';
import {Link} from 'react-router-dom';
import './StylesSheets/NavBar.css'

export function NavBar(){
    return(
        <div className='navbar'>
                <div className='left'>
                    <Link className='link-landing' to='/'>
                        <img src={Chefcito} alt='chefcito'></img>
                    </Link>
                    <Link to='/create'><button className='create-recipe'>Crear Receta</button></Link>
                    <Link to='/my-recipes'><button className='create-recipe'>Mis recetas</button></Link>
                    <Link to='/favorites'><button className='create-recipe'>Favoritos</button></Link>
                    <Link to='/random'><button className='create-recipe'>¿Que puedo comer hoy?</button></Link>
                </div>
                    
                <div className='right'>
                    <Link to='/home'><button className='casa'><img src={casa} alt='home'></img></button></Link>
                </div>
        </div>
    )
}