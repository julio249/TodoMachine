import './TodoCounter.css';
import React, { useState, useEffect } from 'react';

function TodoCounter({totalTodos, completedTodos, loading}){
    // const onFirstLoad = () => { dispatchEvent()}
    const [firstLoad, setFirstLoad] = useState(true)
    const [message, setMessage] = useState('')
    

    useEffect(() => {
        
        if( !!firstLoad ){
            setMessage('welcome');
            setFirstLoad(false)
        }
        else if(totalTodos === completedTodos){
            setMessage('Congrats you completed all tasks')
        }
        else{
            setMessage((
                <>
                  You have completed <span>{completedTodos}</span> out of <span>{totalTodos}</span> TODOS
                </>
              ))
        }

    }, [totalTodos, completedTodos])

    return(
        <h1 className={`TodoCounter ${loading ? "TodoCounter--loading" : ""}`}>
            {message}
        </h1>
        // (totalTodos === completedTodos &&  fisrtLoad) ?

        // <h1 className={`TodoCounter ${loading && "TodoCounter--loading"}`}> 
        //     Create a Todo
        // </h1>
        // :
        // (totalTodos === completedTodos &&  !fisrtLoad) ?
        
        // <h1 className={`TodoCounter ${loading && "TodoCounter--loading"}`}> 
            
        //     Congrats you completed all tasks
        // </h1>
        
        // :
        // <h1 className='TodoCounter'>
        //     You have completed <span> {completedTodos} </span> de <span>{totalTodos}</span> TODOS
        // </h1>
    );
  }

  export { TodoCounter };