import React, { useState } from 'react'
import "./../App.css";
import "./navbar.css";
import { FiSearch } from "react-icons/fi";

import Navigation from './Navigation';
import MenuList from './MenuList';


function Header() {
  const [isOpen,setIsOpen] = useState(false);
  const [searchIcon,setSearchIcon] = useState(false);
  const openingmenu = ()=>{
    setIsOpen(!isOpen);
  }
  const openInput=()=>{
    setSearchIcon(!searchIcon);
    
  }
  return (
    <div>
    <div className='header-div'>
        <span style={{paddingLeft:"5px"}}><Navigation isOpen={isOpen} openingmenu={openingmenu}/></span>
        <h1> Organics Product</h1>
        <div style={{color:"wheat"}}>
          {
              searchIcon && <input type='text' onDoubleClick={openInput} placeholder='search product' /> 
          }
          {
            (!searchIcon) && <FiSearch onClick={openInput}/>
          }
         
        </div>
        
    </div>
    <div className= {`menubar ${isOpen?'open':'close'}` }>
        <MenuList value={isOpen?'flex':'none'}/>
       </div>
    </div>
  )
}

export default Header