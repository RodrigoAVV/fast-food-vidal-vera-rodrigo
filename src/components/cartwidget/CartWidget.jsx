import React from 'react'
import carrito from './carrito-de-compras.png'
import './style.css'

const CartWidget = () => {
  return (
    
    <button type="button" className="btn btn-primary btn-witget">
      <img id="carrito" src={carrito}/>
       <span className="badge bg-secondary">5</span>
    </button>
  )
}
export default CartWidget