import axios from 'axios'


export const GET_ALL_RECIPES = 'GET_ALL_RECIPES';
export const GET_ALL_TYPES = 'GET_ALL_TYPES';
export const FILTER_BY_DIETS = 'FILTER_BY_DIETS';
export const FILTER_ALPHA_SCORE = 'FILTER_ALPHA_SCORE';
export const GET_RECIPE_BY_ID = 'GET_RECIPE_BY_ID';
export const POST_RECIPE = 'POST_RECIPE';
export const GET_RECIPE_BY_NAME = 'GET_RECIPE_BY_NAME'
export const DELETE_RECIPE = 'DELETE_RECIPE'
export const UPDATE_RECIPE = 'UPDATE_RECIPE'
export const ADD_FAVORITE = 'ADD_FAVORITE'
export const DELETE_FAVORITE = 'DELETE_FAVORITE'

export function getAllRecipes(){
    return function(dispatch){
        return axios.get('/recipes')
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
        return axios.get('/types')
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
        return axios.get(`/recipes/${id}`)
        .then(json => {
            dispatch({
                type: GET_RECIPE_BY_ID,
                payload: json
            })
        })
    }
}

export function postRecipe(payload){
    return function(dispatch){
        return axios.post('/recipe', payload)
        .then(data => {
            dispatch({
                type: POST_RECIPE,
                payload:data
            })
        })
    }
}

export function searchByName(name){
    return function(dispatch){
        return axios.get(`/recipes?name=${name}`)
        .then(data => {
            dispatch({
                type:GET_RECIPE_BY_NAME,
                payload:data
            })
        })
        .catch(err => {
            alert(err)
        })
    }
}

export function deleteRecipe(id){
    return function(dispatch){
        return axios.delete(`/recipe/clear/${id}`)
        .then(data => {
            dispatch({
                type:DELETE_RECIPE,
                payload:data
            })
        })
    }
}

export function updateRecipe(id, payload){
    return function(dispatch){
        return axios.put(`/recipe/update/${id}`, payload)
        .then(data => {
            dispatch({
                type:UPDATE_RECIPE,
                payload:data
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

export function addFavorite(payload){
    return {
        type: ADD_FAVORITE,
        payload
    }
}

export function deleteFavorite(payload){
    return {
        type: DELETE_FAVORITE,
        payload
    }
}