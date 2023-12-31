import React, { useState } from 'react'
import "./../App.css";
import "./navbar.css";
import logo from "./../images/logo.png";
import { FiSearch } from "react-icons/fi";
import { MdSettingsPhone } from "react-icons/md";
import { HiOutlineMailOpen } from "react-icons/hi";
import { BsInstagram } from "react-icons/bs";
import Navigation from './Navigation';
import MenuList from './MenuList';


function Header() {
  const [isOpen,setIsOpen] = useState(false);
  
  const openingmenu = ()=>{
    
    setIsOpen(!isOpen);
  }
  const closemenu=()=>{
    if(isOpen){
      setIsOpen(!isOpen);
    }
  }
 
  return (
    <div>
      <div className='header-div'>
          <span style={{paddingLeft:"5px"}}><Navigation isOpen={isOpen} closemenu={closemenu} openingmenu={openingmenu}/></span>
          <div> 
            <div className='logo-div'> 
              <img className="logo-image" src={logo} alt='logo'/>
            </div>
            <div>
              <h1 style={{margin:"0px"}} >Bhakur Organics</h1>
              <h4 style={{margin:"0px"}} className='heading'>Eco conscious Plushies for all</h4>
            </div>

            </div>
          <div className='link-menu'>
            <div style={{color:"var(--font-white)",fontSize:"1em"}}>
              <span><BsInstagram />bhakur_organics</span>
              <span><HiOutlineMailOpen />bhakurorganics111@gmail.com</span>
              <span><MdSettingsPhone />7067525001</span>
            </div>
            <div>
              <span style={{ backgroundColor:"white" , borderRadius:"17px",padding:"2px 15px",display:"flex",alignItems:"center",gap:"0.5em"}}>
                <FiSearch style={{color:"black"}}/>
               <input style={{border:"none",outline:"none",fontSize:"15px",padding:"5px" ,width:"15vw"}}type='text'  placeholder='search product' />
              </span>
            </div>
          </div>
          
      </div>
      <div className= {`menubar ${isOpen?'open':'close'}` }>
        <MenuList value={isOpen?'flex':'none'} closemenu={closemenu}/>
       </div>
    </div>
  )
}

export default Header