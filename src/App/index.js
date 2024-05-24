
import { useTodos } from './useTodos';
import { TodoItem } from '../TodoItem';
import React from 'react';
import { TodoCounter } from '../TodoCounter';
import { TodoFilter } from '../TodoFilter';
import { TodoList } from '../TodoList';
import { CreateTodoButtom } from '../CreateTodoButtom';
import { TodosLoading } from '../TodosLoading';
import { TodosError } from '../TodosError';
import { EmptyTodos } from '../EmptyTodos';
import { Modal } from '../Modal';
import { TodoForm } from '../TodoForm'
import { ChangeAlert } from '../ChangeAlert';

import { TodoHeader } from '../TodoHeader';



function App() {
  
  const {
    states,
    setters,
  } = useTodos();

  const {
    loading, 
    error, 
    completedTodos, 
    totalTodos, 
    searchValue,
    openModal,
    searchedTodos, 
  } = states;

  const {
    setSearchValue, 
    addTodo, 
    completeTodo, 
    deleteTodo, 
    setOpenModal,
    sincronizeTodos,
  } = setters;

  return(
    <React.Fragment>
      <TodoHeader loading={loading}>
        <TodoCounter
          completedTodos={completedTodos}
          totalTodos={totalTodos}
          // loading={loading}
          />
        <TodoFilter
          searchValue={searchValue}
          setSearchValue={setSearchValue}
          // loading={loading}
          
        />
      </TodoHeader>

      <TodoList
        error={error}
        loading={loading}
        searchedTodos={searchedTodos}
        totalTodos={totalTodos}
        searchedText={searchValue}

        onError={() => <TodosError/>}
        onLoading={() => <TodosLoading/>}
        onEmptyTodos={() => <EmptyTodos/>}
        onEmptySearchedTodos={(searchedValue) => 
          <p>no results for {searchedValue}</p>
        }
        //render Prop:
        // render={todo => (
        //   <TodoItem
        //       key={todo.text}
        //       text = {todo.text}
        //       completed = {todo.completed}
        //       onComplete = { () => completeTodo(todo.text) }
        //       onDelete = { () => deleteTodo(todo.text) }
              
        //     />
        // )}
      >
        {/* render function */}
        {
          todo => (
            <TodoItem
                key={todo.text}
                text = {todo.text}
                completed = {todo.completed}
                onComplete = { () => completeTodo(todo.text) }
                onDelete = { () => deleteTodo(todo.text) }
                
              />
          )
        }
      </TodoList>

      {/* <TodoList >
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
      </TodoList> */}
    
    
      <CreateTodoButtom setOpenModal={setOpenModal} />

      {openModal && (
        <Modal>
          <TodoForm 
            addTodo={addTodo}
            setOpenModal={setOpenModal}
          />
        </Modal>
      )}

      <ChangeAlert 
        sincronize={sincronizeTodos}
      />
      
    </React.Fragment> 
    );
}

export default App;
