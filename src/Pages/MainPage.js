import React from 'react'
import { FiSearch } from 'react-icons/fi'
import "./allpart.css";
function MainPage() {
  return (
    <div style={{textAlign:"center"}}>MainPage
        <div className='search-div' >
              <span style={{ backgroundColor:"white" ,border:"2px solid var(--basic-color)", borderRadius:"10px",margin:"10px",padding:"2px 15px",display:"flex",alignItems:"center",}}>
                  <FiSearch style={{color:"var(--basic-color)"}}/>
                  <input style={{border:"none",outline:"none",color:"green",fontSize:"15px",padding:"5px" ,width:"100%"}}type='text'  placeholder='search product' />
              </span>
        </div>
    
    
    </div>
  )
}

export default MainPage