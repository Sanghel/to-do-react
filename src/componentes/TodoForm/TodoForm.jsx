import React from "react";
import { useState } from "react";
import { useContext } from "react";
import { TodoContext } from "../../TodoContext/TodoContext";

function TodoForm() {
    const [newTodoValue, setNewTodoValue] = useState('');
    const {
        addTodo,
    } = useContext(TodoContext)

    const onChange = (event) => {
        setNewTodoValue(event.target.value);
    }
    
    const onCancel = () => {

    };

    const onSubmit = (event) => {
        event.preventDefault();
        addTodo(newTodoValue);
    };

    return (
        <form onSubmit={onSubmit}>
            <label htmlFor=""></label>
            <textarea 
                placeholder="Escribe Un nuevo Todo..."
                value={newTodoValue}
                onChange={onChange}
            />
            <div>
                <button
                    type="button"
                    onClick={onCancel}
                >
                    Cancelar
                </button>
                <button
                    type="submit"
                >
                    Añadir
                </button>
            </div>
        </form>
    );
}

export { TodoForm };