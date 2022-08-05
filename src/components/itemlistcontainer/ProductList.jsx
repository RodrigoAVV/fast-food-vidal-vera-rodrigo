import React, { lazy } from 'react'
import Products from '../products/Products'
const ProductList = ({productData}) => {
    return(
        <>
            {
            productData.map((producto) => {
                return <Products key={producto.codigo} producto={producto}/>
            })
            }
        </>
    )
}
export default ProductList