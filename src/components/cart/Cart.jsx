import React from 'react'
import { useCartContext } from '../cartcontext/CartContext'
import CartItem from './CartItem'
import { Link } from 'react-router-dom'

const Cart = () => {
    //const {productList,totalPrecio} = useCartContext()
    const {totalPrecio} = useCartContext()
    const productList = JSON.parse(localStorage.getItem('productList'));

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
            <h3>Total: {totalPrecio()}</h3>
            <Link to={'/checkout'} className="btn btn-primary btn-witget" style={{width:200}}>Confirmar compra</Link>
            <Link to={'/'} className={"btn btn-info "} style={{width:200}}>Agregar mas productos</Link>
        </div>
    )
}

export default Cart