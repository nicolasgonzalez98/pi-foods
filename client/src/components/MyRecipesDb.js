import React from "react";
import { getAllRecipes } from "../redux/actions";
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { NavBar } from "./NavBar";
import RecipeCard from "./RecipeCard";

export function MyRecipesDb(){
    const dispatch = useDispatch()

    const recipes = useSelector(state => state.recipes)
    const myRecipes = recipes.data?.filter(e => e.createdInDb)
    
    useEffect(() => {
        dispatch(getAllRecipes())
    // eslint-disable-next-line react-hooks/exhaustive-deps
    },[])

    //const err = useSelector((state) => state.error)

    return (
        
        <div>
            <NavBar />    
            {myRecipes?.map(e => (<RecipeCard id={e.id} name={e.name} image={e.image} type={e.diets}/>))}
        </div>
    )
}

export default MyRecipesDb;