import {GET_ALL_RECIPES, GET_ALL_TYPES} from '../actions/index'

const initialState = {
    recipes:[],
    recipe:{},
    types:[]
};

const rootReducer = (state = initialState, action) => {
    switch(action.type){
        case GET_ALL_RECIPES:
            return{
                ...state,
                recipes: action.payload
            }
        case GET_ALL_TYPES:
            return{
                ...state,
                types:action.payload
            }
        default:
            return state
    }
}

export default rootReducer;