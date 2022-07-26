import React, { useState } from 'react';
import { TodoContext } from '../../TodoContext/TodoContext';
import { TodoCounter } from '../TodoCounter/TodoCounter';
import { TodoSearch } from '../TodoSearch/TodoSearch';
import { TodoList } from '../TodoList/TodoList';
import { TodoItem } from '../TodoItem/TodoItem';
import { CreateTodoButton } from '../CreateTodoButton/CreateTodoButton';

function AppUI() {
    return (
        <React.Fragment>
            <TodoCounter />
            <TodoSearch />
            <TodoContext.Consumer>
                {({ 
                    error, 
                    loading, 
                    searchedTodos, 
                    completeTodo, 
                    deleteTodo 
                }) => (
                    <TodoList>
                        {error && <p>Hubo un error...</p>}
                        {loading && <p>Estamos Cagando, no desesperes...</p>}
                        {(!loading && !searchedTodos.lenght) && <p>Crea tu primer ToDo!</p>}
        
                        {searchedTodos.map(todo => (
                        <TodoItem 
                            key={todo.text}
                            text={todo.text} 
                            completed={todo.completed}
                            onComplete={() => completeTodo(todo.text)}
                            onDelete={() => deleteTodo(todo.text)}
                        />
                        ))}
                    </TodoList>
                )}
            </TodoContext.Consumer>

            <CreateTodoButton />
        </React.Fragment>
    );
}

export { AppUI };