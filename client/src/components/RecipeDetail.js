import React from "react";
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from "react-router-dom";
import { getRecipeById } from "../redux/actions/index";
import './StylesSheets/RecipeDetail.css'
import { NavBar } from './NavBar';
import  Gorrito  from './imagenes/Gorrito.jpg'
import  Loader  from "./imagenes/rodrigosloader.gif";

export default function RecipeDetail(){
    function capitalize(str){
        const lower = str.toLowerCase()
        return str.charAt(0).toUpperCase()+lower.slice(1)
    }

    const dispatch = useDispatch()

    let { id } = useParams()
    const recipe = useSelector((state) => state.recipe)
    const err = useSelector((state) => state.error)

    useEffect ( () => {
        dispatch(getRecipeById(id))
    },[])
    

    return (
        <div className="detail-page">
            <NavBar />
            <article className="article">
                {!err ?
                <>
                    {
                        recipe.id != id ?
                        <><div><img src={Loader}></img></div></> :
                        <>
                            <h1>{recipe.name}</h1>
                    <img className="foto_recipe" src={recipe.image} alt={recipe.name}></img>

                    {recipe.dishTypes && (
                        <>
                            <h3>Dish Types: </h3>
                            <ul className="dish-types">
                                {recipe.dishTypes?.map(e => <li>{capitalize(e)}</li>)}
                            </ul>
                        </>
                    )}

                    {
                        recipe.diets && (
                            <>
                            <h3>Diets:</h3>
                            <ul className="list-diets">
                                
                                {recipe.diets?.map(e => <li>{capitalize(e)}</li>)}
                            </ul>
                            </>
                        )
                    }

                    {
                        recipe.healthScore && (
                            <>
                                <div >
                                    <h3>HealthScore: </h3>
                                    <div className="score">
                                        <p>{recipe.healthScore}</p>
                                    </div>
                                </div>
                            </>
                        )
                    }

                    {
                        recipe.summary && (
                            <>
                            <div className="summary">
                                <h3>Summary</h3>
                                <p dangerouslySetInnerHTML={{ __html: recipe.summary }}></p>
                            </div>
                            </>
                        )
                    }

                    {
                        recipe.steps && (
                            <>
                            <div className="steps">
                                <h3>Steps</h3>
                                <p>{recipe.steps}</p>
                            </div>
                            </>
                        )
                    }
                        </>
                    }
                </> : 
                <div>
                    <img className="foto_error" src={Gorrito} alt='gorrito'></img>
                    <h1>Recipe not found</h1>
                    <p>The recipe doesn't exist</p>
                </div>    
            }
                

                
            </article>


        </div>
    )
}