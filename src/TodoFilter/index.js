import './TodoFilter.css';
import React from 'react';
import { TodoContext } from '../TodoContext';

function TodoFilter(){
  const {
    searchValue,
    setSearchValue,
  } = React.useContext(TodoContext);


    return(
      <input 
        className="TodoFilter"
        placeholder="search"
        value = {searchValue}
        onChange={ (event) => {
          setSearchValue(event.target.value);
        }}
        
      />
    );
  }

  export { TodoFilter };