/* First simple programm. */
/* import React from 'react'

const App=() =>{
  return(
    <>
    <h1>Hello Santosh Welcome to React application</h1>
    </>
  )
}

export default App;

 */
/* 
Props stands for Properties.
Props are used to transter data from one component to another.
Props are read only.
Props are just like a function in javascript.
*/
import React from 'react';
import Hello from './Hello.jsx';

const App =()=>{
   let a=10
   let b=20;
   
   
return(
  <div>
    
    <Hello c = {a+b}/>

   {/*  <Hello username="Santosh kumar yadav"/> */}
  </div>
)
}

export default App
