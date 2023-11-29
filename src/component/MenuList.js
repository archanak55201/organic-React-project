import React from 'react'
import './navbar.css';
import { NavLink} from 'react-router-dom';
const MenuList=({value,closemenu})=> {
    
  return (
    <div style={{display:`${value}`}} className='menu'>
          <div className='menu-name'><NavLink to={'/home'} onClick={()=>{closemenu()}}>Home</NavLink></div>
          <div className='menu-name'><NavLink to={'/inquiry'} onClick={()=>{closemenu()}}>Bulk Inquires</NavLink></div>
          <div className='menu-name'><NavLink to={'/ourStory'} onClick={()=>{closemenu()}}>Our Stories</NavLink></div>
          <div className='menu-name'><NavLink to={'/policies'} onClick={()=>{closemenu()}}>Return Policies</NavLink></div>
          <div className='menu-name'><NavLink to={'/chat-with-us'} onClick={()=>{closemenu()}}>Chat With Us</NavLink></div>
    </div>
  )
}

export default MenuList;