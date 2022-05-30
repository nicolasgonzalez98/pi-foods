import React from "react";
import { useState, useEffect } from "react";
import { useDispatch, useSelector } from 'react-redux';
import { getAllTypes } from '../redux/actions/index';

export function RecipeCreate(){

    const dispatch = useDispatch()

    function validate(input){
        let errors = {}

        if(!input.name){
            errors.name = 'Falta ingresar el nombre de la receta!'
        }

        if(!input.summary){
            errors.summary='No ingresaste el resumen de la receta!'
        }

        if((input.healthScore < 0) || (input.healthScore >100)){
            errors.healthScore = 'Ingresaste un HealthScore invalido.'
        }

        if(!input.steps){
            errors.steps = 'Hace falta agregar el paso a paso de la receta.'
        }

        
        return errors
    }


    const allDiets = useSelector(state => state.types)

    useEffect( () => {
        dispatch(getAllTypes())
    }, [])

    const [input, setInput] = useState({
        name: '',
        summary: '',
        healthScore:0,
        image: '',
        steps: '',
        diets: []
    })

    
    const [errors, setErrors] = useState({});

    function handleDiet(e){
        if(!input.diets.includes(e.target.value)){
            setInput({
                ...input,
                diets: [...input.diets, e.target.value]
            })
        }
    }

    function handleDelete(d){
        setInput({
            ...input,
            diets: input.diets.filter(e => e !== d)
        })
    }

    function handleChange(e){
        setInput({
            ...input,
            [e.target.name]:e.target.value
        })

        setErrors(validate({
            ...input,
            [e.target.name]:e.target.value
          }))
    }
    
    return (
        <div>
            <h1>Crea tu propia receta!</h1>

            <form action=''>
                <div>
                    <label>Name of recipe: </label>
                    <input 
                        type='text' 
                        name='name' 
                        placeholder='Name of recipe...' 
                        value={input.name}
                        onChange={handleChange}
                    >
                    </input>
                </div>

                <div>
                    <label>Summary: </label>
                    <textarea type='text' name='summary' value={input.summary} onChange={handleChange}></textarea>
                </div>

                <div>
                    <label>HealthScore:</label>
                    <input type='number' name='healthScore' value={input.healthScore} onChange={handleChange}></input>
                </div>

                <div>
                    <label>Image: </label>
                    <input type='text' name='image'value={input.image} onChange={handleChange}></input>
                </div>

                <div>
                    <label>Steps: </label>
                    <textarea type='text' name='steps' value={input.steps} onChange={handleChange}></textarea>
                </div>
                
                <div>
                    <label>Tipos de dieta</label>
                    <select onChange={handleDiet} defaultValue='Eligir tipos de dietas' >
                        <option disabled>Eligir tipos de dietas</option>
                        {
                            allDiets.data && allDiets.data?.map(e => {
                                return (
                                    <option key={e.name} value={e.name} name={e.name}>{e.name}</option>
                                )
                            })
                        }
                    </select>
                </div>

                <button type="submit">Enviar Receta</button>
            </form>

            <div className="my-diets">
                <label>Mis dietas</label>
                {input.diets.map(d => {
                    return (
                    <div key={d} className="tipo_dieta">
                        <p>{d}</p>
                        <button onClick={() => handleDelete(d)}>X</button>
                    </div>
                    )
                }
            )}
            </div>
        </div>
    )
}

export default RecipeCreate;