import { TodoCounter } from '../TodoCounter';
import { TodoFilter } from '../TodoFilter';
import { TodoList } from '../TodoList';
import { TodoItem } from '../TodoItem';
import { CreateTodoButtom } from '../CreateTodoButtom';
import { TodosLoading } from '../TodosLoading';
import { TodosError } from '../TodosError';
import { EmptyTodos } from '../EmptyTodos';
import { Modal } from '../Modal';
import React from 'react';
import { TodoForm } from '../TodoForm'
import { TodoContext } from '../TodoContext';

function AppUI(){
  const {
    openModal,
    setOpenModal,
  } = React.useContext(TodoContext);

    return(
        <>
          <TodoCounter/>
          <TodoFilter/>
    
          <TodoContext.Consumer>
            {({
              loading, 
              error, 
              searchedTodos, 
              completeTodo, 
              deleteTodo,
              
            }) => (
                <TodoList >
                  {loading && <TodosLoading />}
                  {error && <TodosError />}
                  {(!loading && searchedTodos.length === 0)  && <EmptyTodos />}


                  {searchedTodos.map(todo => (
                    <TodoItem
                        key={todo.text}
                        text = {todo.text}
                        completed = {todo.completed}
                        onComplete = { () => completeTodo(todo.text) }
                        onDelete = { () => deleteTodo(todo.text) }
                      />
                  ))}
                </TodoList>
              )}
          </TodoContext.Consumer>
          
          <CreateTodoButtom setOpenModal={setOpenModal} />

          {openModal && (
            <Modal>
              <TodoForm />
            </Modal>
          )}
          
        </> 
        );
}
export {AppUI};