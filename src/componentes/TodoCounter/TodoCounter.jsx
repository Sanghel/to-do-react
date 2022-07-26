import React, { useContext } from "react";
import { TodoContext } from "../../TodoContext/TodoContext";
import './TodoCounter.css';

function TodoCounter() {
    const {
        totalTodos,
        completedTodos
    } = useContext(TodoContext);
    
    return (
        <h2 className="TodoCounter">Has completado {completedTodos} de {totalTodos} ToDo's</h2>
    );
}

export { TodoCounter };