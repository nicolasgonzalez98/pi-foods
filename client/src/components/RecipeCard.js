import React from "react";
import { Link } from "react-router-dom";

export default function RecipeCard({id, name, image, type}){
    return (
        <div>
            <Link to={`/${id}`}>
                <h3>{name}</h3>
            </Link>
            <h5>{type}</h5>
            <img src={image} alt='foto_receta'></img>
        </div>
    )
}