import React from 'react'
import { LuMenu } from "react-icons/lu";
import './navbar.css';

function Navigation({isOpen,openingmenu,closemenu}) {
  return (
    <div>
       <button onClick={()=>{openingmenu()}} 
       style={{backgroundColor:"transparent",color:"var(--font-white)",border:"none",fontSize:"25px"}}><LuMenu/></button>
      
    </div>
  )
}

export default Navigation