import React, { useState } from "react";
import './TodoSearch.css';

function TodoSearch({ searchValue, setSearchValue }) {
    const onSearchValueChange = (event) => {
        console.log(event.target.value);
        setSearchValue(event.target.value);
    };

    return (
        <input 
            className="TodoSearch"
            type="text" 
            placeholder="Escribe un ToDo..." 
            onChange={onSearchValueChange}
        />
    );
}

export { TodoSearch };