import React, { useState } from 'react'

const character_counter = () => {
  const [inputValue, setinputValue] = useState('')
  const maxLength = 100

  const inputChange = (e) => {
    setinputValue(e.target.value)
  }
  return (
    <div>
      <textarea className='texta' value={inputValue} onChange={inputChange} maxLength={100} placeholder='input text here' rows={5} cols={30}></textarea>
      <p>{inputValue.length}/{maxLength}</p>
    </div>
  )
}

export default character_counter
