import React from "react";
import './StylesSheets/Paginado.css'

export default function Paginado({recipesPerPage, allRecipes, pagination}){
    const pageNumbers = []

    for(let i = 1; i <= Math.ceil(allRecipes/recipesPerPage);i++){
        pageNumbers.push(i)
    }

    return (
        <div >
            <ul className="paginado">
                {pageNumbers && pageNumbers.map(n => <li className="page" key={n}><a className="numberA" onClick={() => pagination(n)}>{n}</a></li>)}
            </ul>
        </div>
    )
}