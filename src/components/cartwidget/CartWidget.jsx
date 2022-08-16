import React from 'react'
import carrito from './carrito-de-compras.png'
import './style.css'
import { useCartContext } from '../cartcontext/CartContext'
import { useState,useEffect } from 'react'
import { Link } from 'react-router-dom'

const CartWidget = () => {

  const {totalProductos} = useCartContext()

  const [ocultar,setOcultar] = useState('')

  useEffect(()=>{
    if(totalProductos()==0){
      setOcultar('ocultar')
    }else{
      setOcultar('')
    }
  })

  return (
    
    <Link to={'/cart'} type="button" className={"btn btn-primary btn-witget "+ocultar}>
      <img id="carrito" src={carrito}/>
        <span className="badge bg-secondary">{totalProductos()}</span>
    </Link>
  )
}
export default CartWidget