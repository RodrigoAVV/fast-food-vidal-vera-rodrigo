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
    <div className="btn-group grupo" role="group" aria-label="Basic example">
        <div className={btnAdd+' btn-cont'}>
          <button onClick={restar} type="button" className="btn btn-primary">-</button>
          <button type="button" className="btn btn-primary">{cantidad}</button>
          <button onClick={sumar} type="button" className="btn btn-primary">+</button>
        </div>
        <button onClick={onAdd} className={"btn btn-secondary btn-item"+btnAdd}>Agregar al carrito</button>
        <Link to={'/cart'} className={"btn btn-info btn-fin"+btnFinalizar} >Finalizar compra</Link>
        <Link to={'/'} className={"btn btn-secondary btn-item"}>Agregar mas productos</Link>
    </div>
  )
}
export default ItemCount