import React, { useContext } from 'react'
import {data} from './App'
function ChildC() {

    const myName= useContext(data);
  return (
    <div>
        <h1> my name is {myName}</h1>
    </div>
  )
}

export default ChildC;
