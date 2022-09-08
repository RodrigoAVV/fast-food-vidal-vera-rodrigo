import React,{useState} from 'react'
import './style.css'
import { Link } from 'react-router-dom'
import { useCartContext } from '../cartcontext/CartContext'

const ItemCount = ({product}) => {
  let initial = 1
  let stock = product.stock
  const [cantidad,setCantidad] = useState(initial)
  const [btnAdd,setBtnAdd] = useState('')
  const [btnFinalizar,setBtnFinalizar] = useState('btnOcultar')

  const {addItem} = useCartContext()


  const sumar = () => {
    if(cantidad < stock){
      setCantidad(parseInt(cantidad)+1)
    }
  }

  const restar = () => {
    if(cantidad > 1){
        setCantidad(parseInt(cantidad)-1)
    }
  }

  const onAdd = () => {
    setBtnAdd('btnOcultar')
    setBtnFinalizar('')
    addItem(product,cantidad)
  }
  
  return (
    <div className="detalle">
        <div className={btnAdd}>
          <button onClick={restar} type="button" className="btn btn-secondary btn-cant">-</button>
          <button type="button" className="btn btn-secondary btn-cant">{cantidad}</button>
          <button onClick={sumar} type="button" className="btn btn-secondary btn-cant">+</button>
        </div>
        <button onClick={onAdd} className={"btn btn-info btn-agregar "+btnAdd}>Agregar</button>
        <Link to={'/cart'} className={"btn btn-primary btn-finalizar "+btnFinalizar} >Finalizar</Link>
        <Link to={'/'} className={"btn btn-success btn-mas"}>Más productos</Link>
    </div>
  )
}
export default ItemCount