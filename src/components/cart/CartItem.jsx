import React from 'react'
import { useCartContext } from '../cartcontext/CartContext'

const CartItem = ({product}) => {
    const {removeItem} = useCartContext()
   
    return(
        <div className="col-sm-3" style={{marginTop:10}}>
        <div className="card">
        <img src={"/public/img/"+product.imagen} className="card-img-top" alt={product.nombre} style={{height:350,width:380}}/>
        <div className="card-body">
            <h5 className="card-title">{product.nombre}</h5>
            <p className="card-text">{product.descripcion}</p>
            <p className="card-text">{product.categoria}</p>
            <p className="card-text">{product.precio+' X '+product.quantity}</p>
            <p className="card-text">{product.recomendado ? 'Recomendado' : ''}</p>
            <button onClick={() => removeItem(product.código)} className="btn btn-primary btn-witget">Eliminar</button>
        </div>
        </div>
    </div>
    )
}

export default CartItem