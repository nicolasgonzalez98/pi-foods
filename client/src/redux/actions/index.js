import axios from 'axios'


export const GET_ALL_RECIPES = 'GET_ALL_RECIPES';
export const GET_ALL_TYPES = 'GET_ALL_TYPES';
export const FILTER_BY_DIETS = 'FILTER_BY_DIETS';
export const FILTER_ALPHA_SCORE = 'FILTER_ALPHA_SCORE';
export const GET_RECIPE_BY_ID = 'GET_RECIPE_BY_ID';


export function getAllRecipes(){
    return function(dispatch){
        return axios.get('http://localhost:3001/recipes')
        .then(json => {
            dispatch({
                type: GET_ALL_RECIPES,
                payload:json
            })
        })
        .catch(err => {
            console.log(err)
        })
    }
}

export function getAllTypes(){
    return function(dispatch){
        return axios.get('http://localhost:3001/types')
        .then(json => {
            dispatch({
                type: GET_ALL_TYPES,
                payload:json
            })
        })
        
    }
}

export function getRecipeById(id){
    return function(dispatch){
        return axios.get(`http://localhost:3001/recipes/${id}`)
        .then(json => {
            dispatch({
                type: GET_RECIPE_BY_ID,
                payload: json
            })
        })
    }
}




export function filterByDiets(payload){
    return {
        type: FILTER_BY_DIETS,
        payload
    }
}


export function filterAlphaScore(payload){
    return {
        type: FILTER_ALPHA_SCORE,
        payload
    }
}