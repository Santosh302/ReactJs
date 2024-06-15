import React, { createContext } from 'react'
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
