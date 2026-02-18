import { useState } from 'react'
import './App.css'
import { useReducer } from 'react'

function App() {

  const reducer = (state, action) => {
    switch (action.type) {
      case "INCREMENT": return { count: state.count + 1 }
      case "DECEREMENT": return { count: state.count > 0 ? state.count -1 :0 }
      case "RESET": return { count: 0 }
    }
  }

  const [state, dispatch] = useReducer(reducer, { count: 0 })

  return (
    <>
      <div>
        <h1 className='heading'>useReducer</h1>
        <span>{state.count}</span>
        <button onClick={() => dispatch({ type: "INCREMENT" })}>Increment</button>
        <button onClick={() => dispatch({ type: "DECEREMENT" })}>Decrement</button>
        <button onClick={() => dispatch({ type: "RESET" })}>Reset</button>
      </div>
    </>
  )
}

export default App
