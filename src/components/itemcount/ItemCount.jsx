import React from 'react'
import { useState } from 'react'
import './ItemCount.css'
const ItemCount = ({initial,stock}) => {
  const [cantidad,setCantidad] = useState(initial)

  const sumar = () =>   {
    console.log('sumar')
    if(cantidad < stock){
        setCantidad(parseInt(cantidad)+1)
    }
  }

  const restar = () => {
    console.log('restar'+cantidad)
    if(cantidad > 0){
        setCantidad(cantidad-1)
    }
  }
  return (
    <div className="btn-group grupo" role="group" aria-label="Basic example">
        <button onClick={restar} type="button" className="btn btn-primary">-</button>
        <button type="button" className="btn btn-primary">{cantidad}</button>
        <button onClick={sumar} type="button" className="btn btn-primary">+</button>
    </div>
  )
}
export default ItemCount