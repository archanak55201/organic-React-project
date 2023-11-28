import React from 'react'
import { LuMenu } from "react-icons/lu";
import './navbar.css';

function Navigation({isOpen,openingmenu}) {
  return (
    <div>
       <button onClick={()=>{openingmenu()}}
       style={{backgroundColor:"transparent",border:"none",fontSize:"25px"}}><LuMenu/></button>
      
    </div>
  )
}

export default Navigation