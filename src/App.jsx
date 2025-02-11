import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Navbar from './Components/NavBar/Navbar'
import Search from './Components/Search/Search'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     <Navbar/>
     <Search/>
    </>
  )
}

export default App
