import React, { useState } from 'react'
import './Header.css'
import {Link} from 'react-router-dom'

const Navbar = () => {

  
   const [MobileMenu , setMobileMenu] = useState(false)

  return (
    <>
    <header className='header'>
    <div className='container d_flex'>
      
      <div className='navlink'>
        <ul className={MobileMenu ? 'nav-links-MobileMenu' : 'link f_flex capitalize'} onClick = {() => setMobileMenu(false)}>
          <li>
            <Link to='/'>Shop</Link>
          </li>
          <li>
            <Link to='/promo'>Promo</Link>
          </li>
          <li>
            <Link to='/about'>About</Link>
          </li>
          <li>
            <Link to='/blog'>Blog</Link>
          </li>
          
        </ul>
          <button className='toggle' onClick={() => setMobileMenu(!MobileMenu)}>
            {MobileMenu? <i className='fas fa-times close home-bth'></i>:
            
              <i className='fas fa-bars open'></i>}
          </button>
      </div>
   
      <div className='search-box f_flex'>
              <i className='fa fa-search'></i>
              <input type='text' placeholder='Search what you need'/>
              
      </div>
      <div className="icon f_flex width">
              <i className='fa fa-user icon_circle'></i>
           
              <div className='cart'>
                <Link to='/cart'>
                  <i className='fa fa-shopping-bag icon-circle'></i>
                  <span>0</span>
                </Link>
                
              </div>
      </div>
    </div>
    
    </header>
    </>
  )
}

export default Navbar
