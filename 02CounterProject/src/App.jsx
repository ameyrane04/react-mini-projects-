import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  let [count, setCount] = useState(4) //Using this hook c=to change counter value instead of updating variable through js then accessing and displaying that.
  //hooks array me response dete hai, first element is the value and 2nd element is the method to change the value.
  // ye hooks apne ko directly UI pe changes show karne me help karte hai
  //JS ke through apne ko baar baar document.get.. vale methods se harr ek element ko access karke change karna padta tha

  //let counter = 5;

  const addValue = ()=>{
    setCount(count+1);
  }
  let decValue = ()=>{
    if(count > 0){
      setCount(count-1);
    }
  }

  return (
    <>
      <h1>Hello World!</h1>
      <h2>Counter: {count}</h2>
      <button onClick={addValue}>Increase Value</button>
      <button onClick={decValue}>Decrease Value</button>
    </>
  )
}

export default App
