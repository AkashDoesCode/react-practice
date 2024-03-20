import React, { useReducer } from 'react'


const initialState={
    firstCount : 0,
    secondCount : 0
};
function reducer(state, action){
    switch (action.type) {
        case 'increment':
            return {...state,firstCount : state.firstCount+action.value};
        case 'decrement':
            return {...state,firstCount : state.firstCount-action.value};
        case 'increment2':
                return {...state,secondCount : state.secondCount+action.value};
        case 'decrement2':
                return {...state,secondCount : state.secondCount-action.value};
        case 'reset':
            return initialState;
    
        default:
            return state;
    }
}

export default function CountReducerMultiple() {

    const[count, dispatch]=useReducer(reducer, initialState);
  return (
    <div>
        <div>first : {count.firstCount}</div>
        <div>second : {count.secondCount}</div>
        <button onClick={()=>dispatch({type :'increment', value : 1})}>increment</button>
        <button onClick={()=>dispatch({type :'decrement', value : 1})}>decrement</button>
        <button onClick={()=>dispatch({type :'increment', value : 5})}>increment by 5</button>
        <button onClick={()=>dispatch({type :'decrement', value : 5})}>decrement by 5</button>
        <button onClick={()=>dispatch({type :'increment2', value : 1})}>increment second</button>
        <button onClick={()=>dispatch({type :'decrement2', value : 1})}>decrement second</button>
        <button onClick={()=>dispatch({type:'reset'})}>reset</button>
    </div>
  )
}
