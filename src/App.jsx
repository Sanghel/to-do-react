import React from 'react';
import { TodoCounter } from './componentes/TodoCounter/TodoCounter';
import { TodoSearch } from './componentes/TodoSearch/TodoSearch';
import { TodoList } from './componentes/TodoList/TodoList';
import { TodoItem } from './componentes/TodoItem/TodoItem';
import { CreateTodoButton } from './componentes/CreateTodoButton/CreateTodoButton';

const todos=[
  {text:'Cortar cebolla', completed:false},
  {text:'Tormar el curso de intro a react', completed:false},
  {text:'Llorar con la llorona', completed:false}
];

function App() {
  return (
    <React.Fragment>
      <TodoCounter />
      <TodoSearch />
      <TodoList>
        {todos.map(todo => (
          <TodoItem 
            key={todo.text}
            text={todo.text} 
            completed={todo.completed}
          />
        ))}
      </TodoList>
      <CreateTodoButton />
    </React.Fragment>
  );

}

export default App;
