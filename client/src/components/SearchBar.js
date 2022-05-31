import React, { useState } from "react";
import { useDispatch } from 'react-redux';
import { searchByName } from "../redux/actions";

export function SearchBar(){
    const [search, setSearch] = useState('')
    const dispatch = useDispatch()

    function handleOnChange(e){
        e.preventDefault()
        setSearch(e.target.value)
    }

    function handleSubmit(e){
        e.preventDefault()
        dispatch(searchByName(search))
    }

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <input type="text" onChange={handleOnChange} value={search} />
                <input type="submit" value="Buscar" />
            </form>
        </div>
    )
}