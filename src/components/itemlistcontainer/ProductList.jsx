import React from 'react'
import Products from '../products/Products'
const ProductList = ({productData}) => {
    return(
        <>
            {
            productData.map((producto) => {
                return <Products key={producto.código} producto={producto}/>
            })
            }
        </>
    )
}
export default ProductList