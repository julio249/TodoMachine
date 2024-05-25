import './TodoList.css';

function TodoList(props){
  const renderFunct = props.children || props.render;
    return(
      <section className='TodoList'>
        {props.error && props.onError()}
        
        {props.loading && props.onLoading()}

        {(!props.loading && !props.totalTodos) && props.onEmptyTodos()}
        {/* use double negation to not show any content if not used then shows '0' */}
        {(!!props.totalTodos && !props.searchedTodos.length) && props.onEmptySearchedTodos(props.searchedText)}

        {(!props.loading && !props.error ) && props.searchedTodos.map(renderFunct)}

        {/* {props.searchedTodos.map( renderFunct)} */}
        


      </section>
    );
  }

  export { TodoList };