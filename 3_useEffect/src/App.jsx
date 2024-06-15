 import React, {useState, useEffect} from 'react';

function App(){

  const [count ,setcounter]= useState(0);
  const [data, setData]= useState("Ram");

useEffect( ()=>{
  console.log("component mounted")
}, [data])

function updateCount(){
  setcounter(count+1);
}
function updateData(){
  setData("Seeta");
}
  return(
    <>
    <h1>Button clicked {count} times</h1>
    <button onClick={updateCount}>Click</button>
    <button onClick={updateData}>Update Data</button>
    <h1>{data}</h1>
    </>
  )

}
export default App
