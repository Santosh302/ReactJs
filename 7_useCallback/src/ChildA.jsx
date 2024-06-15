import React from 'react'
import {memo} from 'react';
function ChildA(Learning) {
    console.log("Child Compoment")
  return (
    
    <div>
      <h1>hi Santosh </h1>
    </div>
  )
}

export default memo(ChildA);
