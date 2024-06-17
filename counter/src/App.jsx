import './App.css'
import { useState } from 'react';


function App() {
  let [counter,setCounter] = useState(0);
  // let counter = 0;

  const increasevalue = () =>{
    setCounter(counter + 1)
  }

  const decreasevalue = () =>{
    setCounter(counter - 1)
  }
  return (
    <>
    <h1>Counter Project</h1>
    <h2>Counter Value  : {counter} </h2>
    
    <button id='increase' onClick={increasevalue}>Increase Value </button>
    <button id='decrease' onClick={decreasevalue}> Decrease Value </button>
    </>
  )
}

export default App
