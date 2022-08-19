import React from 'react'
import { useCartContext } from '../cartcontext/CartContext'
import CartItem from './CartItem'
import { Link } from 'react-router-dom'

const Cart = () => {
    const {productList,totalPrecio} = useCartContext()
    console.log(productList)
    if(productList.length == 0){
        return(
            <>
                <h2>No hay productos en el carrito</h2>
                <Link to={'/'} className="btn btn-success">Hacer compras</Link>
            </>
        )
    }
    return(
        <div className="row">
            {
                productList.map(product => <CartItem key={product.id} product={product}/>)
            }
            <p>total:{totalPrecio()}</p>
        </div>
    )
}

export default Cart