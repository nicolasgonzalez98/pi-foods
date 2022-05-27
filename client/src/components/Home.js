import React from 'react';
import { connect } from 'react-redux';
import { getAllRecipes } from '../redux/actions/index';
import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {Link} from 'react-router-dom'


export function Home(){

    const dispatch = useDispatch()
    const allRecipes = useSelector(state => state.recipes)

    useEffect ( () => {
        dispatch(getAllRecipes())
    },[])


    function handleClick(e){
        e.preventDefault()
        dispatch(getAllRecipes())
    }

    return(
        <div>
            <Link to='/recipe'>Crear Receta</Link>
            <h1>CUCINARE</h1>
            
            <button onClick={e => handleClick(e)}>Volver a cargar todos las recetas</button>
            <div>
                <select>
                    <option value='asc'>Orden ascendente</option>
                    <option value='desc'>Orden descendente</option>
                </select>

                
            </div>
        </div>
    )
}

export default Home;