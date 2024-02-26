/* eslint-disable no-unused-vars */
import { useState } from 'react'

import './App.css'
import UseImage from './component/hooks/UseImage'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     <UseImage/>
    </>
  )
}

export default App
