import { useState } from 'react'
// import Button from './components/Button.jsx'

export default function App() {
  const [count, setCount] = useState(0)
  
  function add() {
    if (count > 9) {
      return
    } else {
      setCount(a => a+1);
    }
  }
  
  function sub() {
    if (count < 1) {
      return
    } else {
      setCount(a => a-1);
    }

  }

  return (
    <>
      <div className="flex h-screen justify-center items-center gap-4">
        <button className="px-4 py-0 rounded w-2 bg-blue-600 flex justify-center text-lg" type="button" onClick={() => {sub()}}>-</button>
        <h1 className="text-6xl">{count}</h1>
        <button className="px-4 py-0 rounded w-2 bg-blue-600 flex justify-center text-lg" type="button" onClick={() => {add()}}>+</button>
      </div>
    </>
  )
}