import React from "react";
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from "react-router-dom";
import { getRecipeById } from "../redux/actions/index"

export default function RecipeDetail(){
    const dispatch = useDispatch()

    let { id } = useParams()
    const recipe = useSelector((state) => state.recipe)

    useEffect ( () => {
        dispatch(getRecipeById(id))
    },[])
    

    return (
        <div>
            <h1>{recipe.name}</h1>
            <img src={recipe.image} alt={recipe.name}></img>

            <ul>
                {recipe.dishTypes?.map(e => <li>{e}</li>)}
            </ul>

            <ul>
                {recipe.diet?.map(e => <li>{e}</li>)}
            </ul>

            <p dangerouslySetInnerHTML={{ __html: recipe.summary }}></p>

            <div className="score">
                <p>HealthScore: {recipe.healthScore}</p>
            </div>

            <div className="steps">
                <h3>Steps</h3>
                <p>{recipe.steps}</p>
            </div>

            
        </div>
    )
}