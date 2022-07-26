import React, { useState, useEffect } from 'react';
import { TodoProvider  } from './TodoContext/TodoContext';
import { AppUI } from './componentes/AppUI/AppUI';

// const defaultTodos=[
//   {text:'Cortar cebolla', completed:false},
//   {text:'Tormar el curso de intro a react', completed:false},
//   {text:'Llorar con la llorona', completed:false}
// ];



function App() {

  return (
    <TodoProvider>
      <AppUI />
    </TodoProvider>
  );

}

export default App;
