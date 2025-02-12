import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Navbar from './Components/NavBar/Navbar'
import Search from './Components/Search/Search'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Upload from './Pages/Upload'
import HomePage from './Pages/HomePage'
import MyUploads from './Pages/MyUploads'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <BrowserRouter>
    <Navbar/>
     <Routes>
      <Route path='/'  element={<HomePage/>}/> 
      <Route path='/upload'  element={<Upload/>}/> 
      <Route path='/myUploads' element={<MyUploads/>}/> 
     </Routes>
     </BrowserRouter>
    </>
  )
}

export default App
