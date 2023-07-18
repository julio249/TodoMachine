import './TodoCounter.css';
import React from 'react';
import { TodoContext } from '../TodoContext';

function TodoCounter(){
    const {
        completedTodos, 
        totalTodos,
    } = React.useContext(TodoContext);
    return(
        totalTodos === completedTodos ?

        <h1 className='TodoCounter'> 
            Congrats you completed all tasks
        </h1>
        :
        <h1 className='TodoCounter'>
            Has completado <span> {completedTodos} </span> de <span>{totalTodos}</span> TODOS
        </h1>
    );
  }

  export { TodoCounter };