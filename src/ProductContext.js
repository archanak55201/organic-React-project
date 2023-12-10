import React, { Children, createContext, useContext, useState } from 'react'

const ProductContext = createContext();

export const ProductProvider =({children})=>{
    const [product,setProduct] = useState(null);
    const updateProduct = (e)=>{
        setProduct(e);
    }
    
    return(
        <ProductContext.Provider 
            value={{product,updateProduct}}
        >
            {children}
        </ProductContext.Provider>
    );
}

export const useProductContext =()=>{
    return useContext(ProductContext);
}