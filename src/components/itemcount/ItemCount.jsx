import React,{useState,useEffect,useContext} from 'react'
import './style.css'
import { Link } from 'react-router-dom'
import Cart from '../cart/Cart'
import {myContext} from '../cartcontext/CartContext'

const ItemCount = ({product}) => {
  let initial = 1
  let stock = 15
  const [cantidad,setCantidad] = useState(initial)
  const [btnAdd,setbtnAdd] = useState('')
  const [btnFinalizar,setbtnFinalizar] = useState('btnOcultar')

  const {productList,setProductList} = useContext(myContext)
  const {addItem} = useContext(myContext)

  const sumar = () => {
    if(cantidad < stock){
      setCantidad(parseInt(cantidad)+1)
    }
  }

  const restar = () => {
    if(cantidad > 0){
        setCantidad(parseInt(cantidad)-1)
    }
  }

  const onAdd = (e) => {
    setbtnAdd('btnOcultar')
    setbtnFinalizar('')
  }
  
  return (
    <div className="btn-group grupo" role="group" aria-label="Basic example">
        <div className={btnAdd}>
          <button onClick={restar} type="button" className="btn btn-primary">-</button>
          <button type="button" className="btn btn-primary">{cantidad}</button>
          <button onClick={sumar} type="button" className="btn btn-primary">+</button>
        </div>
        <button onClick={onAdd} className={"btn btn-secondary "+btnAdd}>Agregar al carrito</button>
        <a href="#" onClick={addItem(product,cantidad)} className={"btn btn-info "+btnFinalizar} >Finalizar compra</a>
    </div>
  )
}
export default ItemCount