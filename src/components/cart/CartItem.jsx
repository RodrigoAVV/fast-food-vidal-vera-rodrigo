import React from 'react'
import { useCartContext } from '../cartcontext/CartContext'

const CartItem = ({product}) => {
    const {removeItem} = useCartContext()
   
    return(

        <div className="galeria-products">
            <img src={"/public/img/"+product.imagen} alt={product.nombre} className="img-cart"/>
            <h5 className="titulo">{product.nombre}</h5>
            <p className="desc">{product.descripción}</p>
            <p className="desc">{product.categoría}</p>
            <p className="precio">{product.precio+' X '+product.quantity}</p>
            <p className="desc">{product.recomendado ? 'Recomendado' : ''}</p>
            <button onClick={() => removeItem(product.código)} className="btn btn-primary btn-compra">Eliminar</button>
        </div>
    )
}

export default CartItem