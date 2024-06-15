/* App.jsx

import React from 'react'
import ChildA from './ChildA'
function App() {

  const name ="Santosh"
  return (
    <div>
      <ChildA name={name} />
    </div>
  )
}

export default App
-----------------------------
ChildA.jsx

import React from 'react'
import ChildB from './ChildB'
function ChildA(props) {
  return (
    <div>
      <ChildB  name= {props.name} />
    </div>
  )
}

export default ChildA
---------------------
ChildB.jsx

import React from 'react'
import ChildC from './ChildC'
function ChildB(props) {
  return (
    <div>
      <ChildC  name={props.name} />
    </div>
  )
}

export default ChildB
----------------------
ChildC.jsx
import React from 'react'

function ChildC(props) {
  return (
    <div>
      <h1>Component C is Displaying {props.name}</h1>
    </div>
  )
}

export default ChildC


*/