import React from "react";
import { useLocalStorage } from "./useLocalStorage";

const TodoContext = React.createContext();


function TodoProvider({ children }){

    const {
            item: todos, 
            saveItem: saveTodos,
            loading,
            error,
        } = useLocalStorage('TODOS_V1', []);

    const [searchValue, setSearchValue] = React.useState('');

    const [openModal, setOpenModal] = React.useState(false);

    // const completedTodos = todos.filter(todo => !!todo.completed).length;
    const completedTodos = todos.filter(
        todo => !!todo.completed
    ).length;
    
    const totalTodos = todos.length;

    const searchedTodos = todos.filter( (todo) => {
        const todoText = todo.text.toLowerCase();
        const searchTodo = searchValue.toLowerCase()
        return todoText.includes(searchTodo);
    })


    const addTodo = (text) => {
        const newTodos = [...todos];
        
        newTodos.push({
            text,
            completed: false,
        });
        saveTodos(newTodos);
    }

    const completeTodo = (text) => {
        const newItem = [...todos];
        const todoIndex = newItem.findIndex(
        (todo) => 
            todo.text === text
        );
        newItem[todoIndex].completed = true;
        saveTodos(newItem);
    }
    const deleteTodo = (text) => {
        const newItem = [...todos];
        const todoIndex = newItem.findIndex(
        (todo) => 
            todo.text === text
        );
        newItem.splice(todoIndex, 1);
        saveTodos(newItem);
    }


    return(
        <TodoContext.Provider value={
            { loading, error, completedTodos, totalTodos, searchValue, setSearchValue, searchedTodos, addTodo, completeTodo, deleteTodo, openModal, setOpenModal }
        }>
            {
                children
            }
        </TodoContext.Provider>
        
    )
}





export { TodoContext, TodoProvider };