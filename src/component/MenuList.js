import React from 'react'
import './navbar.css';
import { NavLink} from 'react-router-dom';
const MenuList=({value})=> {
    
  return (
    <div style={{display:`${value}`}} className='menu'>
          <div className='menu-name'><NavLink to={'/home'}>Home</NavLink></div>
          <div className='menu-name'><NavLink to={'/inquiry'}>Bulk Inquires</NavLink></div>
          <div className='menu-name'><NavLink to={'/ourStory'}>Our Stories</NavLink></div>
          <div className='menu-name'><NavLink to={'/policies'}>Return Policies</NavLink></div>
          <div className='menu-name'><NavLink to={'/chat-with-us'}>Chat With Us</NavLink></div>
    </div>
  )
}

export default MenuList;