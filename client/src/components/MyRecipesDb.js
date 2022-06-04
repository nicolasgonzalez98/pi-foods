import React from "react";
import { getAllRecipes } from "../redux/actions";
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { NavBar } from "./NavBar";
import RecipeCard from "./RecipeCard";
import Loader from './imagenes/rodrigosloader.gif'
import Gorrito from './imagenes/Gorrito.jpg'
import { Link } from "react-router-dom";
import './StylesSheets/MyRecipesDb.css'

export function MyRecipesDb(){
    const dispatch = useDispatch()

    const recipes = useSelector(state => state.recipes)
    const myRecipes = recipes.data?.filter(e => e.createdInDb)
    
    useEffect(() => {
        dispatch(getAllRecipes())
    // eslint-disable-next-line react-hooks/exhaustive-deps
    },[])

    

    return (
        
        <div className="recipesDb">
            <NavBar /> 
            {
            (myRecipes?.length !== 0) ?
            <>
            {
                (!myRecipes) ?
                <><div className='recetas-error'><img src={Loader} alt='Loader'></img></div> </> :
                <>
                    <div className='recetas'>
                        {myRecipes?.map(e => 
                        <RecipeCard 
                            key={e.id} 
                            id={e.id}   
                            name={e.name} 
                            image={e.image} 
                            type={e.diets}
                        />)}
                    </div>
                </>
            }
            </> :

            <>
                <div className='allrecetaserror'>
                    <img className="foto_error" src={Gorrito} alt='gorrito'></img>
                    <h1>Todavia no has creado recetas</h1>
                    <p>Pero no te preocupes... podes crear la primera!</p>
                    <Link to='/create'><button className="first-recipe">Crear mi primera receta</button></Link>
                </div>
            </>

            }
        </div>
    )
}

export default MyRecipesDb;