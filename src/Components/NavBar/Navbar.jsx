import React from 'react'
import './Navbar.css'
import logo from '../Assets/logo_2.png'
import menu from '../Assets/icon-menu.svg'
import close from '../Assets/icon-menu-close.svg'
import { useState } from 'react'

const Navbar = () => {

  const [noshowMenu, setNoShowMenu] = useState(true);

  function toggleMenu(){
    setNoShowMenu(!noshowMenu);
   
  }
  
  return (
    
      <div className="Navbar">
        <div className="logo">
            <img src= {logo} ></img>
            <p> SongFile</p>
        </div>
        
      
        
        <div className="menu-items">
    
    { noshowMenu ? noshowMenu && (
      <>
          <ul className='list-items '>
            <li>Home</li>
            <li>New</li>
            <li>Popular</li>
            <li>Trending</li>
            <li>Categories</li>
            
          </ul>
          </>

   ) : <>
   <div className='side-bar-container'>
    <img src ={close} className='close' onClick={toggleMenu} ></img>
       <ul className='side-bar '>
             <hr />
            <li>Upload</li>
            <hr />
            <li>MyUploads</li>
            <hr />
            <li>Profile</li>
            <hr />
            
            
          </ul>
          </div> 
   </> }

 

          <img src={menu} className='menu' onClick={toggleMenu}></img>
        </div>
        
    </div>
  )
}

export default Navbar