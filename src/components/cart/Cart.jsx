import React from 'react'
import { useCartContext } from '../cartcontext/CartContext'
import CartItem from './CartItem'
import { Link } from 'react-router-dom'

const Cart = () => {
    const {productList,totalPrecio} = useCartContext()
    if(productList.length == 0){
        return(
            <>
                <h2>No hay productos en el carrito</h2>
                <Link to={'/'} className="btn btn-success">Hacer compras</Link>
            </>
        )
    }
    return(
        <div className="galeria">
            <div className="galeria-products">
                <h3>Total: {totalPrecio()}</h3>
                <Link to={'/checkout'} className="btn btn-primary">Confirmar compra</Link>
            </div>
            {
                productList.map(product => <CartItem key={product.id} product={product}/>)
            }
        </div>
    )
}

export default Cart