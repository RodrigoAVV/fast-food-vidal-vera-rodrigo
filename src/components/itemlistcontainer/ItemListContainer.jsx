import React from 'react'
import carpollo_papas_fritas from './pollo-papas-fritas.jpg'
const ItemListContainer = (props) => {
  //console.log(props)
  return (
    <div className="card">
      <img src={carpollo_papas_fritas} style={{height:300,width:300,marginLeft:15}} className="card-img-top" alt="..."/>
      <div className="card-body">
        <h5 className="card-title" style={{backgroundColor:'#E2E8EA',width:300}}>{props.titulo} </h5>
        <p className="card-text">Some quick example text to build</p>
        <a href="#" className="btn btn-primary">Go somewhere</a>
      </div>
    </div>
  )
}
export default ItemListContainer
