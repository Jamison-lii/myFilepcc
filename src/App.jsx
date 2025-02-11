import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Navbar from './Components/NavBar/Navbar'
import Search from './Components/Search/Search'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Update from './Pages/Update'
import HomePage from './Pages/HomePage'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <BrowserRouter>
    <Navbar/>
     <Routes>
      <Route path='/'  element={<HomePage/>}/> 
      <Route path='/update'  element={<Update/>}/> 
     </Routes>
     </BrowserRouter>
    </>
  )
}

export default App
