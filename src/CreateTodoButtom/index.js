import './CreateTodoButtom.css'
// import { TodoContext } from '../TodoContext';
import React from 'react';


// const {
//     setOpenModal,
//     openModal,
// } = React.useContext(TodoContext);
function CreateTodoButtom({setOpenModal}){
    return(
      <button 
        className="AddTODO"
        onClick={
        () => {
          setOpenModal(state => !state);
        }
      }
        
      > 
        <div className="icon-container">
          <span>+</span>
        </div>
      </button>
    )
  }

  export { CreateTodoButtom };