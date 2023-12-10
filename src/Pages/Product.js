import React from 'react'
import sdd from './../images/Crocs/1.jpg'
import './allpart.css';
import { useNavigate } from 'react-router-dom';
import { useProductContext } from '../ProductContext';
function Product({item}) {
    const navigate = useNavigate();
    const url = "./../images/";
    // console.log(url+item.name+'/1'+'.jpg');
    const sr =url+item.name+'/'+item.image[0]+'.jpg';
    const {updateProduct} = useProductContext();


    function openProduct(){
      console.log(item);
      updateProduct(item);
      navigate('/singleProduct'); 
    }

    
    return (
    <div  className='product' onClick={()=>openProduct()}>
        <div className='product-img-div'>
          <img  className='img-size' src={sr} />
          </div>
        
        <p>{item.name} </p>
        <div className='price-div'>Rs.200</div>
    </div>
  )
}

export default Product