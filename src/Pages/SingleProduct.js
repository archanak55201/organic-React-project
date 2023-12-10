import React from 'react'
import { useLocation } from 'react-router-dom';
import { useProductContext } from '../ProductContext';
import './productpage.css';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
function SingleProduct() {
  
    const {product} = useProductContext();
   
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
      
        <div>
            {product.name}
        </div>
        
    </div>
  )
}

export default SingleProduct