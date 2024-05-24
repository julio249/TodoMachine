import './TodoFilter.css';
import React from 'react';

function TodoFilter({searchValue, setSearchValue, loading}){
  
    return(
      <input 
        className="TodoFilter"
        placeholder="search"
        value = {searchValue}
        onChange={ (event) => {
          setSearchValue(event.target.value);
        }}
        disabled={loading}//input is disabled when loading is true
        
      />
    );
  }

  export { TodoFilter };