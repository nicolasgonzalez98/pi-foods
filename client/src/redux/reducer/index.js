import {GET_ALL_RECIPES, GET_ALL_TYPES, GET_RECIPE_BY_ID,
        FILTER_BY_DIETS, FILTER_ALPHA_SCORE,
        POST_RECIPE, GET_RECIPE_BY_NAME} 
from '../actions/index'

function sortAsc(x, y){
    if (x.name < y.name) {return -1;}
    if (x.name > y.name) {return 1;}
    return 0;
}

function sortDesc(x,y){
    if (x.name > y.name) {return -1;}
    if (x.name < y.name) {return 1;}
    return 0;
}

const initialState = {
    recipes:[],
    all_recipes:[],
    recipe:{},
    types:[]
};

const rootReducer = (state = initialState, action) => {
    switch(action.type){
        case GET_ALL_RECIPES:
            
            return{
                ...state,
                recipes: action.payload,
                all_recipes:action.payload
            }
        case GET_ALL_TYPES:
            
            return{
                ...state,
                types:action.payload
            }
        case GET_RECIPE_BY_ID:

            return {
                ...state,
                recipe:action.payload.data
            }
        case GET_RECIPE_BY_NAME:
            return{
                ...state,
                recipes:action.payload
            }
        case POST_RECIPE:
            console.log(action.payload)
            return {
                ...state
            }
        case FILTER_BY_DIETS:
            let all_recipes = state.all_recipes.data;
            const diet_type = action.payload
            let total  = {data : all_recipes.filter(e => e.diets.includes(diet_type))}

            return{
                ...state,
                recipes: total
            }
        case FILTER_ALPHA_SCORE:
            const [ord, type] =action.payload
            let r, rf;

            if(ord && type){
                let all_recipes = state.all_recipes.data;
                let filter_recets = state.recipes.data
                if(type === 'alph'){
                    if(ord === 'asc'){
                        r = all_recipes.sort(sortAsc)
                        rf = filter_recets.sort(sortAsc)
                    }else{
                        r = all_recipes.sort(sortDesc)
                        rf = filter_recets.sort(sortDesc)
                    }
                }else{
                    if(ord === 'asc'){
                        r = all_recipes.sort((a,b) => a.healthScore - b.healthScore)
                        rf = filter_recets.sort((a,b) => a.healthScore - b.healthScore)
                    }else{
                        r = all_recipes.sort((a,b) => b.healthScore - a.healthScore)
                        rf = filter_recets.sort((a,b) => b.healthScore - a.healthScore)
                    }
                }
            }else{
                return {...state} 
            }
            let t = {data:r}
            let tf = {data:rf}
            return {
                ...state,
                all_recipes: t,
                recipes: tf
            } 
        default:
            return state
    }
}

export default rootReducer;