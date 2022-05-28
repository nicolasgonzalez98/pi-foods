import axios from 'axios'

export const GET_ALL_RECIPES = 'GET_ALL_RECIPES';
export const GET_ALL_TYPES = 'GET_ALL_TYPES';
export const FILTER_BY_DIETS = 'FILTER_BY_DIETS';
export const FILTER_BY_ORDER = 'FILTER_BY_ORDER';
export const FILTER_ALPHA_SCORE = 'FILTER_ALPHA_SCORE'


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
        .catch(err => console.log(err))
    }
}

export function filterByDiets(payload){
    return {
        type: FILTER_BY_DIETS,
        payload
    }
}

export function filterByOrder(payload){
    return {
        type: FILTER_BY_ORDER,
        payload
    }
}

export function filterAlphaScore(payload){
    return {
        type: FILTER_ALPHA_SCORE,
        payload
    }
}