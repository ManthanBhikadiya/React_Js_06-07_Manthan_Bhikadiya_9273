import { useState } from 'react'
import './App.css'
import Comment_review from './components/comment_review'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     <Comment_review/>
    </>
  )
}

export default App
