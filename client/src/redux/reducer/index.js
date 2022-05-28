import {GET_ALL_RECIPES, GET_ALL_TYPES,
        FILTER_BY_DIETS, FILTER_BY_ORDER, FILTER_ALPHA_SCORE} 
from '../actions/index'

const initialState = {
    recipes:[],
    all_recipes:[],
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
        case FILTER_BY_DIETS:
            let all_recipes = state.all_recipes.data;
            const diet_type = action.payload
            let total  = {data : all_recipes.filter(e => e.diet.includes(diet_type))}

            return{
                ...state,
                recipes: total
            }
        default:
            return state
    }
}

export default rootReducer;