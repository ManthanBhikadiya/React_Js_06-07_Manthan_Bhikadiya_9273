import { useState } from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState(0)
  const [name, setName] = useState("")
  const [message, setMessage] = useState("")
  const [hover, setHover] = useState(false)

  const handleClick = () => {
    setCount(count + 1)
  }

  const handleChange = (e) => {
    setName(e.target.value)
  }

  const handlesubmit = (e) => {
    e.preventDefault()
    setMessage(`hello ${name}`)
  }

  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      alert("Enter Key pressed")
    }
  }

  return (
    <div className='container'>
      <h1>Event Handler</h1>
      <button onClick={handleClick}>click event({count})</button>

      <input type="text" placeholder='enter event' value={name} onChange={handleChange} onKeyDown={handleKeyDown} />

      <form action="" onSubmit={handlesubmit}>
        <button type='submit'>submit event</button>
        <p>{message}</p>
      </form>

      <div className='box' onMouseEnter={() => setHover(true)} onMouseLeave={() => setHover(false)}>
        {hover ? "Mouse Inside" : "Hover event"}
      </div>
    </div>
  )
}

export default App
