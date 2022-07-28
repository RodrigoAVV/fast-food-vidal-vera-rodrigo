import React from 'react'
import Products from '../products/Products'

const ProductList = ({productData}) => {

    return(
        <>
            {
                productData.map((producto) => {
                    <Products key={producto.codigo} producto={producto}/>
                })
                
            }
        </>
    )
    
}

export default ProductList