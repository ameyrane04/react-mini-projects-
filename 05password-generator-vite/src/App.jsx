import { useCallback, useEffect, useState, useRef } from 'react'
import './App.css'

function App() {
  const [length, setLength] = useState(8);
  const [characterAllowed, setCharAllowed] = useState(false);
  const [numberAllowed, setNumAllowed] = useState(false);
  const [password, setPassword] = useState("");

  // useRef hook
  const passwordRef = useRef(null);

  const passwordGenerator = useCallback(() => {
    let pass = "";
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
    if (numberAllowed) str += "0123456789";
    if (characterAllowed) str += "!@#$%^&*()+`~/.,<>?=-_";

    for (let i = 1; i <= length; i++) {
      let char = Math.floor(Math.random() * str.length + 1);
      pass += str.charAt(char);

    }
    setPassword(pass)

  }, [length, characterAllowed, numberAllowed, setPassword])

  const copyToClipBoard = useCallback(()=>{
    passwordRef.current?.select();
    window.navigator.clipboard.writeText(password);
  },[password])

  useEffect(()=>{
    passwordGenerator();
  },[length, numberAllowed, characterAllowed, passwordGenerator])

  return (
    <>
      <div className="w-100 mx-auto shadow-md rounded-lg px-4 py-3 my-8 bg-gray-800 text-orange-500">
        <h1 className='text-yellow text-center my-3'>Password Generator</h1>
        <div className="flex shadow rounded-lg overflow-hidden mb-4"></div>
        <input className='outline-none w-80 py-1 px-3 rounded-lg'
          value={password}
          placeholder='password'
          readOnly
          ref={passwordRef}
        ></input>
        <button className='bg-blue-700 text-white outline-none px-3 py-0.5 shrink-0'
        onClick={copyToClipBoard}>Copy</button>

        <br/>
        <div className='flex text-sm gap-x-3 py-3'>
          <div className='flex items-center gap-x-1'>
            <input type='range'
              min={6}
              max={20}
              value={length}
              onChange={(e) => { setLength(e.target.value) }}
              className='cursor-pointer'></input>
            <label>length: {length} </label>
          </div>
          <div className="flex items-center gap-x-1">
            <input type='checkbox'
              defaultChecked={numberAllowed}
              id='numberInput'
              onChange={() => {
                setNumAllowed((prev) => !prev)
              }} />
            <label htmlFor="numberInput">Numbers</label>
          </div>
          <div className="flex items-center gap-x-1">
            <input
              type="checkbox"
              defaultChecked={characterAllowed}
              id="characterInput"
              onChange={() => {
                setCharAllowed((prev) => !prev)
              }}
            />
            <label htmlFor="characterInput">Characters</label>
          </div>
        </div>
      </div>
    </>
  )
}

export default App
