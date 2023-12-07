import React from 'react'
import sdd from './../images/Crocs/1.jpg'
import './allpart.css';
function Product({item}) {
    console.log(item.image[0],sdd);
    console.log(process.env.PUBLIC_IMAGE);
    const url = "./../images/";
    console.log(url+item.name+'/1'+'.jpg');
    const sr =url+item.name+'/'+item.image[0]+'.jpg';
  return (
    <div  className='product'>
        
          <img  className='img-size' src={sr} />
        
        
        <p>{item.name} </p>
        <div>Rs.200</div>
    </div>
  )
}

export default Product