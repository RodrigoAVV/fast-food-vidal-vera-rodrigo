import React from 'react'
import carpollo_papas_fritas from './pollo-papas-fritas.jpg'
import ItemCount from '../itemcount/ItemCount'
import './itemListContainer.css'
const ItemListContainer = (props) => {
  
  return (
    <div className="card">
      <img  src={carpollo_papas_fritas} style={{height:300,width:300,marginLeft:15}} className="card-img-top" alt="..."/>
      
      <div className="card-body">
        <h5 className="card-title" style={{backgroundColor:'#E2E8EA',width:300}}>{props.titulo} </h5>
        <p className="card-text">Some quick example text to build</p>
        <ItemCount stock='15' initial='1'/><br/>
        <button type="button" className="btn btn-success agregar">Agregar al carrito</button>
      </div>
    </div>
  )
}
export default ItemListContainer
