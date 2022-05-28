import React from "react";
import { Link } from "react-router-dom";

export default function RecipeCard({id, name, image, type}){
    return (
        <div>
            <Link to={`/${id}`}>
                <h3>{name}</h3>
            </Link>
            <ul>
                {type.map(e => (<li>{e}</li>))}
            </ul>
            <img src={image} alt='foto_receta'></img>
        </div>
    )
}