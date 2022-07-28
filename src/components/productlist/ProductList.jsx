import React, { useState } from 'react'
import Product from '../product/Product'

const ProductList = ({productos}) => {
    //console.log(productos)
    return(
        <>
            {
                productos.map((producto) => {
                    <Product product={producto}/>
                })
                
            }
        </>
    )
}

export default ProductList