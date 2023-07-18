import './TodosLoading.css';
import React from 'react';

function TodosLoading(){
  

    return(
      
    <div className="loading-skeleton">
        <div className="spinner"></div>
        <p className="text">Loading...</p>
    </div>
      
    );
  }

  export { TodosLoading };