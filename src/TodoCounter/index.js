import './TodoCounter.css';
import React from 'react';

function TodoCounter({totalTodos, completedTodos, loading}){
    return(
        totalTodos === completedTodos ?

        <h1 className={`TodoCounter ${!!loading && "TodoCounter--loading"}`}> 
            Congrats you completed all tasks
        </h1>
        :
        <h1 className='TodoCounter'>
            Has completado <span> {completedTodos} </span> de <span>{totalTodos}</span> TODOS
        </h1>
    );
  }

  export { TodoCounter };