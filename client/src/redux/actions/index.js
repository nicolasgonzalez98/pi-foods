import axios from 'axios'
export const GET_ALL_RECIPES = 'GET_ALL_RECIPES';
export const GET_ALL_TYPES = 'GET_ALL_TYPES'

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