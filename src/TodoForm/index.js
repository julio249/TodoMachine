import React from "react";
import './TodoForm.css'
import { TodoContext } from "../TodoContext";

function TodoForm(){
    const {
        addTodo,
        setOpenModal,
    } = React.useContext(TodoContext);

    const [newTodoValue, setNewTodoValue] = React.useState('');

    const onSubmit = (event) => {
        event.preventDefault(); //to avoid reload page
        addTodo(newTodoValue);
        setOpenModal(false);
    } 

    const onCancel = () => {
        setOpenModal(false);
    }

    const onChange = (event) =>{
        setNewTodoValue(event.target.value)
    }


    return(
        <form onSubmit={ onSubmit }>
            <label> Type a new TODO </label>
            <textarea 
                value={ newTodoValue }
                onChange={ onChange }
                placeholder="buy groceries"
            />
            <div className="TodoForm-buttonContainer">
                <button 
                    onClick={ onCancel }
                    type="button"
                    className="TodoForm-button TodoForm-button--cancel">
                    Cancel
                </button>
                <button 
                    type="submit"
                    className="TodoForm-button TodoForm-button--add">
                    Add
                </button>
            </div>
        </form>
    );
}

export { TodoForm };