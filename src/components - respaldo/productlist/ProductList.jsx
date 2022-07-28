import React, { useState } from 'react'
import Product from '../product/Product'

const ProductList = ({products}) => {
    console.log(products)
    return(
        <>
            {
                products.map((item) => {
                    <Product codigo={item.codigo} nombre={item.nombre}/>
                })
                
            }
        </>
    )
}

export default ProductList