import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Navbar from './components/Navbar';

function App() {
  const [count, setCount] = useState(0)

  return (
   // <h1 className=' text-blue-600'>hfkfkfk </h1>
      <Navbar/>
    
  )
  }

export default App