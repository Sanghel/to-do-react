import React, { useContext } from "react";
import { TodoContext } from "../../TodoContext/TodoContext";
import './TodoSearch.css';

function TodoSearch() {
    const { 
        searchValue, 
        setSearchValue 
    } = useContext(TodoContext);

    const onSearchValueChange = (event) => {
        console.log(event.target.value);
        setSearchValue(event.target.value);
    };

    return (
        <input 
            className="TodoSearch"
            type="text" 
            placeholder="Busca un ToDo..." 
            onChange={onSearchValueChange}
        />
    );
}

export { TodoSearch };