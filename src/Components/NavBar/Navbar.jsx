import React from 'react'
import './Navbar.css'
import logo from '../Assets/logo_final1.png'
import menu from '../Assets/icon-menu.svg'
import close from '../Assets/icon-menu-close.svg'
import { useState } from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {

  const [noshowMenu, setNoShowMenu] = useState(true);

  function toggleMenu(){
    setNoShowMenu(!noshowMenu);
   
  }
  
  return (
    
      <div className="Navbar">
        <div className="logo">
            <img src= {logo} ></img>
            <p> myFilepcc</p>
        </div>
        
      
        
        <div className="menu-items">
    
    { noshowMenu ? noshowMenu && (
      <>
          <ul className='list-items '>
            <li><Link style={{textDecoration: 'none' , color: 'inherit'}} to='/'>Home</Link></li>
            <li><Link style={{textDecoration: 'none', color: 'inherit'}} to='/upload'>Upload</Link></li>
            <li><Link style={{textDecoration: 'none', color: 'inherit'}} to='/myUploads'> MyUploads </Link></li>
            <li>Profile</li>
            
            
          </ul>
          </>

   ) : <>
   <div className='side-bar-container'>
    <img src ={close} className='close' onClick={toggleMenu} ></img>
       <ul className='side-bar '>
       <hr />
       <li><Link style={{textDecoration: 'none', color: 'inherit'}} to='/'>HomePage</Link></li>
             <hr />
            <li><Link style={{textDecoration: 'none', color: 'inherit'}} to='/upload'>Upload</Link></li>
            <hr />
            <li><Link style={{textDecoration: 'none', color: 'inherit'}} to='/myUploads'> MyUploads </Link></li>
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