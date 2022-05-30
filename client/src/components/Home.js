import React from 'react';
import { getAllRecipes,  getAllTypes} from '../redux/actions/index';
import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {Link} from 'react-router-dom';
import RecipeCard from './RecipeCard';
import Paginado from './Paginado';
import { FilterSearch } from './FilterSearch';


export function Home(){

    const dispatch = useDispatch()
    const allRecipes = useSelector(state => state.recipes)

    const allDiets = useSelector(state => state.types)

    const [order, setOrder] = useState('')
    const [typeOrder, setTypeOrder] = useState('')

    const [currentPage, setCurrentPage] = useState(1)
    const [recipesPerPage, setRecipesPerPage] = useState(9)
    

    const indexLastRecipe = currentPage * recipesPerPage
    const indexOfFirstRecipe = indexLastRecipe - recipesPerPage
    const currentRecipes = allRecipes.data?.slice(indexOfFirstRecipe,indexLastRecipe)

    const pagination = (pageNumber) => {
        setCurrentPage(pageNumber)
    }

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
            <Link to='/create'><button>Crear Receta</button></Link>
            <h1>CUCINARE</h1>
            
            <button onClick={e => handleClick(e)}>Volver a cargar todos las recetas</button>
            
            <FilterSearch 
                allDiets={allDiets} 
                setCurrentPage={setCurrentPage} 
                setOrder={setOrder}
                typeOrder = {typeOrder}
                setTypeOrder = {setTypeOrder}
                order = {order}
            />
    
            <div>
                {currentRecipes?.map(e => <RecipeCard key={e.id} id={e.id}   name={e.name} image={e.image} type={e.diets}/>)}
            </div>
            <div>
                <Paginado 
                recipesPerPage={recipesPerPage} 
                allRecipes={allRecipes.data?.length} 
                pagination={pagination}
                />
            </div>
        </div>
    )
}

export default Home;