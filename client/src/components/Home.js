import React from 'react';
import { getAllRecipes,  getAllTypes} from '../redux/actions/index';
import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import RecipeCard from './RecipeCard';
import Paginado from './Paginado';
import { FilterSearch } from './FilterSearch';
import { SearchBar } from './SearchBar';
import './StylesSheets/Home.css';
import { NavBar } from './NavBar';
import Gorrito from './imagenes/Gorrito.jpg'
import  Loader  from "./imagenes/rodrigosloader.gif";



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

    const err = useSelector((state) => state.error)

    

    return(
        <div className='home'>

            {console.log(currentRecipes)}
            <NavBar></NavBar>
            {/* <button onClick={e => handleClick(e)}>Volver a cargar todos las recetas</button> */}
            
            <div className='filtros'>
                <FilterSearch 
                    allDiets={allDiets} 
                    setCurrentPage={setCurrentPage} 
                    setOrder={setOrder}
                    typeOrder = {typeOrder}
                    setTypeOrder = {setTypeOrder}
                    order = {order}
                />

                <SearchBar />
            </div>
    
            {
                !err ? 
                <>
                    {
                        (!currentRecipes) ?
                        <><div className='allrecetas-error'><img src={Loader}></img></div> </> :
                        <>
                            <div className='recetas'>
                                {currentRecipes?.map(e => 
                                <RecipeCard 
                                    key={e.id} 
                                    id={e.id}   
                                    name={e.name} 
                                    image={e.image} 
                                    type={e.diets}
                                />)}
                            </div>
                            <div className='pages'>
                                <Paginado 
                                recipesPerPage={recipesPerPage} 
                                allRecipes={allRecipes.data?.length} 
                                pagination={pagination}
                                />
                            </div>
                        </>
                    }
                </> :
                <>
                    <div className='allrecetas-error'>
                        <div>
                            <img className="foto_error" src={Gorrito} alt='gorrito'></img>
                            <h1>No se pudieron cargar las recetas</h1>
                        </div>
                    </div>
                </>
            }
        </div>
    )
}

export default Home;