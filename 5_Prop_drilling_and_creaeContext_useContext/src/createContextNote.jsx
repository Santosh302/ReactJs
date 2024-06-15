/* 
App.jsx

----------
1. import React, { createContext } from 'react'
import ChildC from './ChildC'

const data= createContext();
function App() {
//context api
//create , provider, consumer
  const name ="Santosh"
  return (
    <div>
      <data.Provider value={name}>
      <ChildC  />
      </data.Provider>
    </div>
  );
}
export default App;
export {data};
-----------------

2. ChildC.jsx


import React from 'react'
import {data} from './App'
function ChildC() {
  return (
    <div>
        <data.Consumer>{
             (name)=>{
                return(
                    <h1>My name is {name}</h1>
                )
            }
            }
           
      </data.Consumer>
    </div>
  )
}

export default ChildC;

*/