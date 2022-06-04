import React from 'react';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from "react-router-dom";
import { updateRecipe, getRecipeById } from "../redux/actions/index";
import { useNavigate } from 'react-router-dom';

export function UpdateRecipe(){
    const dispatch = useDispatch()
    const history = useNavigate()

    let { id } = useParams()
    
    useEffect ( () => {
        dispatch(getRecipeById(id))
    },[])

    
}

export default UpdateRecipe;