import React from 'react';
import {useState} from 'react';
import { useCallback } from 'react';
import ChildA from './ChildA'

function App() {

  const [add , setAdd]= useState(0);

  const Learning =useCallback(()=>{
    //some operation
  }, [])
  return (
    <div className='App'>
      <h1>Learning useCallback</h1>
      <ChildA Learning={Learning} />
      <h1>{add}</h1>
      <button onClick={()=>setAdd(add+1)}>Addition</button>
    </div>
  )
}

export default App
