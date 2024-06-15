import React from 'react'
import {useState , useRef} from 'react';
function App() {
  const refElement =useRef("");
  const [name , setName]= useState("Santosh")

  function Reset(){
    setName("")
  }
  function handleInput(){
    refElement.current.style.color="blue";
  }

  return (
    <div>
      <h1>Learning useRef</h1>
      <input type="text" ref={refElement} value= {name} onChange={(e)=>setName(e.target.value)} />
      <button onClick={Reset}>Reset</button>
      <button onClick={handleInput}>handle input</button>
    </div>
  )
}

export default App
