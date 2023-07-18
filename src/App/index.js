
import { TodoProvider } from '../TodoContext';
import { AppUI } from './AppUI';
import React from 'react';

// const defaultTodos = [
//   { text: 'start project', completed: false},
//   { text: 'buy groceries', completed: false},
//   { text: 'unpack boxes', completed: false},
//   { text: 'clean room', completed: true},
//   { text: 'code', completed: true}
// ];
// localStorage.getItem('TODOS_V1', JSON.stringify(defaultTodos));



function App() {
  


  return (
    <TodoProvider>
      <AppUI 
      // loading={ loading }
      // error={ error }
      // completedTodos= { completedTodos }
      // totalTodos= { totalTodos }
      // searchValue= { searchValue }
      // setSearchValue = { setSearchValue }
      // searchedTodos = { searchedTodos }
      // completeTodo = { completeTodo }
      // deleteTodo= { deleteTodo }
      />
    </TodoProvider>
  );
}




export default App;
