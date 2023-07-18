import './CreateTodoButtom.css'
// import { TodoContext } from '../TodoContext';
import React from 'react';


function CreateTodoButtom({setOpenModal}){
    // const {
    //     setOpenModal,
    //     openModal,
    // } = React.useContext(TodoContext);
    return(
      <button 
        className="AddTODO"
        onClick={
          () => {
            setOpenModal(state => !state);
          }
        }
        
      > + </button>
    )
  }

  export { CreateTodoButtom };