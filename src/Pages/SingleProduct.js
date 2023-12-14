import React, { useState } from 'react'
import { useLocation } from 'react-router-dom';
import { FaWhatsapp } from "react-icons/fa";
import { useProductContext } from '../ProductContext';
import './productpage.css';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
function SingleProduct() {
    const [count,setCount] = useState(1);
    const [message,setMessage] = useState("");
    const {product} = useProductContext();

    const phoneNumber = '+919407464630';
        
    console.log(product.name+","+count);
   
    console.log(product);
    const url = "./../images/";
    // console.log(url+item.name+'/1'+'.jpg');
    const sr =url+product.name+'/'+product.image[0]+'.jpg';

    const imgarr = product.image.map((val)=>{
        const sr =url+product.name+'/'+val+'.jpg';
        return sr;
    })
    console.log(imgarr);

    const carouselstyle = {
        dots:true,
        infinite:true,
        speed:500,
       
        slideToShow:1,
        slidesToScroll:1,
        
    };
    const imageStyle = {
        maxWidth: '100%',
        height: 'auto',
      };

      const handlePurchase=()=>{
        setMessage(product.name+","+count);
        const encodedMessage = encodeURIComponent(message);
        window.location.href = `whatsapp://send?phone=${phoneNumber}&text=${encodedMessage}`;
      
      }
  return (
    <div className='product-detail' >
       
        <div className='all-image'>
       <Slider {...carouselstyle}>
        {
            imgarr.map((value)=>(
                 <div className='product-img'><img src={value} alt='lkk' style={imageStyle}/></div>
            ))
            
        }  
        </Slider>
        </div>
      
        <div className='product-description'>
            <div className='product-title'>{product.name}</div>
            <div className='product-price'>$49.00</div>
            <div>
                <h3>Key Features</h3>
                <ul>
                    <li>Outer shell - 100% GOTS Certified Organic Cotton</li>
                    <li>Filling - Polyfilling</li>
                    <li>Non Toxi dyes used and hence it is chew friendly</li>
                    <li>Dimensions - </li>
                    <li>Bhakur Plushies teach kids important skills.Children often express emotions and thoughts while playing with plushies.</li>
                    
                </ul>
            </div>
            <div className='quantity'>
                <div>Qunatity</div>
                <div className='quantity-count'>
                <button onClick={()=>{setCount(count-1)}}>-</button>
                <span>{count}</span>
                <button onClick={()=>{setCount(count+1)}}>+</button>
                </div>
            </div>
            <div className='purchase-btn'>
                
                <button onClick={handlePurchase}>
                    <div style={{color:"white",display:"flex",alignItems:"center"}}><FaWhatsapp style={{fontSize:"30px"}}/></div>
                    <a className='btn-name' href={`whatsapp://send?phone=${phoneNumber}&text=${encodeURIComponent(message)}`} >
                    Click to Purchase on Whatsapp
                    </a>
                   
                </button>
            </div>
            
        </div>
        
    </div>
  )
}

export default SingleProduct