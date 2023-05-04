import React, { useState } from 'react'
import './Navbar.css';
import {SiYourtraveldottv} from 'react-icons/si';
import {AiFillCloseCircle} from 'react-icons/ai';
import {TbGridDots} from 'react-icons/tb';



const Navbar = () => {

  const [active,setActive]=useState('navbar')
const shownav=()=>{
 setActive('navbar activeNavbar') 
}
const removeNav=()=>{
  setActive("navbar")
}
const [transparent,setTransparent]=useState('header')
const addBg=()=>{
  if(window.scrollY>=10){
    setTransparent('header activeHeader')
  }
  else {
    setTransparent('header')
  }
}
window.addEventListener('scroll',addBg)
  return (
    <section className='navBarSection'>
      <div className={transparent}>
        <div className="logoDiv">
          <a href="#" className="logo">
             <h1><SiYourtraveldottv className="icon"/>
Dot
</h1>
          </a>
        </div>
        <div className={active}>
          <div className="navLists flex">
            <div className='navItem'>
              <a href='#' className='navLink'>Home</a>
            </div>
            <div className='navItem'>
              <a href='#' className='navLink'>Products</a>
            </div>
            <div className='navItem'>
              <a href='#' className='navLink'>Resources</a>
            </div>
            <div className='navItem'>
              <a href='#' className='navLink'>Contact</a>
            </div>
            <div className='navItem'>
              <a href='#' className='navLink'>Blog</a>
            </div>
            <div className="headerBtns">
              <button className='loginBtn'>
                <a href='#'>Login</a> 
              </button>
            </div>
            <div className="headerBtns">
              <button className='signup'>
                <a href='#'>Sign Up</a> 
              </button>
            </div>
          </div>
          <div className="closeNavbar" onClick={removeNav}>
            <AiFillCloseCircle className="icon"/>
          </div>
        </div>
        <div className="toggleNavbar" onClick={shownav}>
           <TbGridDots className="icon"/>
        </div>
      </div>
    </section>
  )
}

export default Navbar
