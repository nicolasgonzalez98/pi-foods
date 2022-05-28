import React from "react";

export default function Paginado({recipesPerPage, allRecipes, pagination}){
    const pageNumbers = []

    for(let i = 1; i <= Math.ceil(allRecipes/recipesPerPage);i++){
        pageNumbers.push(i)
    }

    return (
        <nav>
            <ul className="paginado">
                {pageNumbers && pageNumbers.map(n => <li key={n}><a onClick={() => pagination(n)}>{n}</a></li>)}
            </ul>
        </nav>
    )
}