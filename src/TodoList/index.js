import './TodoList.css';

function TodoList(props){
  const renderFunct = props.children || props.render;
    return(
      <section className='TodoList'>
        {props.error && props.onError()}
        {props.loading && props.onLoading()}

        {(!props.loading && !props.searchedTodos) && props.onEmptyTodos()}


        {(props.totalTodos && !props.searchedTodos.length) && props.onEmptySearchedTodos(props.searchedText)}
        {(!props.loading && !props.error ) && props.searchedTodos.map(renderFunct)}

        {/* {props.searchedTodos.map( renderFunct)} */}
        
        <ul >
          {props.children}
        </ul>

      </section>
    );
  }

  export { TodoList };