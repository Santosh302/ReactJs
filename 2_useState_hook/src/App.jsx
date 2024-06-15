/* Rules of Hooks:-
1. Must be written inside function component.
2. Must be import in component.
3. must be call at top level of component
4. cannot be conditional.
*/

import React from 'react';
import {useState} from 'react';
const App =()=>{
  const [data , setData]= useState(0);
 function handleClick()
{
  setData(data+1);
 
}
function decrement(){
  setData(data-1);
}

  return (
    <>
      <button onClick= {handleClick} >+</button>
      <input type="number" value={data} />
      <button onClick= {decrement}>-</button>
    </>
  )
}

export default App

/* 
The State in a build-in  React object that is used to contain data or information about the component
A State can be modified based on user acton or network changes. 
Everytime when the state of an object changes, React re-render the component to the brower.
*/