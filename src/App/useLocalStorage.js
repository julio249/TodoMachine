import React from "react";

function useLocalStorage(itemName, initalValue){
  
  // const [item, setItem] = React.useState(initalValue);
  // const [loading, setLoading] = React.useState(true);
  // const [error, setError] = React.useState(false);
  // const [sinchronizedItem, setSinchronizedItem] = React.useState(false);

  const [state, dispatch] = React.useReducer(reducer, initalState({initalValue}));
  const {
    item,
    loading,
    error,
    sinchronizedItem,
  } = state;
  
  const onError = (error) => {dispatch({type: actionTypes.error, payload: error})}
  const onSuccess = (parsedItem) => {dispatch({type: actionTypes.success, payload: parsedItem})}
  const onSave = (item) => { dispatch({type: actionTypes.save, payload: item}) }
  const onSincronize = () => { dispatch({type: actionTypes.sincronize}) }
  
  React.useEffect(() => {
      setTimeout(() => {
        try{
          const localStorageItem = localStorage.getItem(itemName)
        
        let parsedItem;
        
        if(!localStorageItem){
          localStorage.setItem(itemName, JSON.stringify(initalValue))
          parsedItem = initalValue;
        }
        else{
          parsedItem = JSON.parse(localStorageItem);
        }
        
        onSuccess(parsedItem)
        // setItem(parsedItem);
        // setLoading(false);
        // setSinchronizedItem(true);
      }
      catch(error){
        onError(error);
        // setLoading(false);
        // setError(true);
        }
      },
      
      2000);
    }, 
    [ sinchronizedItem ]);
    
    
    
  
    const saveItem = (newItem) => {
      try{
        const stringifyItem = JSON.stringify(newItem);
        localStorage.setItem(itemName, stringifyItem);
        // setItem(newItem);
        onSave(newItem)
      }
      catch(error){
        // dispatch({ type: actionTypes.error, payload: error})
        onError(error)
      }
      
    };

    const sincronizeItem = () => {
      onSincronize()
      // setLoading(true);
      // setSinchronizedItem(false);
    }
  
    return {
          item, 
          saveItem,
          loading,
          error,
          sincronizeItem
        };
  }

  const initalState = ({initalValue}) => ({
    item: initalValue,
    loading: true,
    error: false,
    sinchronizedItem: false,
  });

  const actionTypes = {
    error: 'ERROR',
    success: 'SUCCESS',
    save: 'SAVE',
    sincronize: 'SINCRONIZE'

  }

  const reducerObject = (state, payload) => ({
    [actionTypes.error]: {
      ...state,
      error: true,
    },
    [actionTypes.success]: {
      ...state,
      error: false,
      loading: false,
      sinchronizedItem: true,
      item: payload,
    },
    [actionTypes.save]: {
      ...state,
      item: payload,
    },
    [actionTypes.sincronize]: {
      ...state,
      error: false,
      loading: true,
      sinchronizedItem: false,
    }
  })

  const reducer = (state, action) => {
    return reducerObject(state, action.payload)[action.type] || state;
  }

  export { useLocalStorage };