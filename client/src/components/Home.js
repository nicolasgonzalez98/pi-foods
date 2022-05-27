import React from 'react';
import { getAllRecipes,  getAllTypes} from '../redux/actions/index';
import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {Link} from 'react-router-dom';
import RecipeCard from './RecipeCard';


export function Home(){

    const dispatch = useDispatch()
    const allRecipes = useSelector(state => state.recipes)

    const allDiets = useSelector(state => state.types)

    useEffect ( () => {
        dispatch(getAllRecipes())
    },[])

    useEffect( () => {
        dispatch(getAllTypes())
    }, [])


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
                <select defaultValue='Filtrar por orden'>
                    <option disabled>Filtrar por orden</option>
                    <option value='asc'>Orden ascendente</option>
                    <option value='desc'>Orden descendente</option>
                </select>

                <select  defaultValue='Filtrar por tipo de dieta'>
                    <option disabled>Filtrar por tipo de dieta</option>
                    {allDiets.data?.map(e => (
                        <option value={e.name}>{e.name}</option>
                    ))}
                </select>

                <select defaultValue='Tipo de orden'>
                    <option disabled>Tipo de orden</option>
                    <option value='alph'>Ordenar alfabeticamente</option>
                    <option value='score'>Ordenar por HealthScore</option>
                </select>
                
            </div>

            <div>
                {allRecipes.data?.map(e => <RecipeCard id={e.id}   name={e.name} image={e.image} type={e.diet[0]}/>)}
            </div>
        </div>
    )
}

export default Home;