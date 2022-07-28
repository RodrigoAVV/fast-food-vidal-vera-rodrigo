import React, { useEffect, useState } from 'react'
import carpollo_papas_fritas from './pollo-papas-fritas.jpg'
import ItemCount from '../itemcount/ItemCount'
import './itemListContainer.css'
import ProductList from '../productlist/ProductList'
const ItemListContainer = (props) => {
  const [aux,setAux] = useState([])
  useEffect(() => {
    let productos = [
      {"codigo":120,"nombre":"Papas surtido","descripcion":"Papas fritas con carne de pollo y salsa a elección","precio":6800,"imagen":"papas-surtido.jpg","recomendado":true},
      {"codigo":121,"nombre":"Papas, pollo y asado","descripcion":"Papas fritas con pollo asado","precio":7900,"imagen":"papas-pollo-asado.jpg","recomendado":false},
      {"codigo":122,"nombre":"Papas con cebolla","descripcion":"Papas fritas con cebolla frita","precio":4600,"imagen":"papas-cebolla.jpg","recomendado":false},
      {"codigo":123,"nombre":"Papas con crema","descripcion":"Papas fritas con crema","precio":3800,"imagen":"papas-crema.jpg","recomendado":false},
      {"codigo":124,"nombre":"Papas fritas con tocino","descripcion":"Papas fritas con tocino y mostaza","precio":3900,"imagen":"papas-tocino.png","recomendado":false},
      {"codigo":125,"nombre":"Completo italiano","descripcion":"Completo tomate, palta y mayo","precio":1600,"imagen":"completo-italiano.png","recomendado":false},
      {"codigo":126,"nombre":"Hamburguesa de pollo","descripcion":"Hamburguesa pollo, tomate y cebolla","precio":3200,"imagen":"hamburguesa-pollo.jpg","recomendado":true},
      {"codigo":127,"nombre":"Nuggets de pollo","descripcion":"Nuggets de pollo mas salsa a elección","precio":3800,"imagen":"nuggets-pollo.jpg","recomendado":false},
      {"codigo":128,"nombre":"Pizza casera","descripcion":"Pizza con queso, aceituna, tomate y albahaca","precio":5600,"imagen":"pizza-casera.jpg","recomendado":true},
      {"codigo":129,"nombre":"Sándwich campestre","descripcion":"Sándwich queso, cebolla, tomate y mayo","precio":5800,"imagen":"sándwich-campestre.jpg","recomendado":true},
      {"codigo":130,"nombre":"Sándwich de pollo","descripcion":"Sándwich de pollo, palta, tomate y salsa","precio":6300,"imagen":"sándwich-pollo.jpg","recomendado":false},
      {"codigo":131,"nombre":"Sándwich simple","descripcion":"Sándwich queso y jamón","precio":2000,"imagen":"sándwich-simple.jpg","recomendado":false}
    ]
    const promesProductos = new Promise((res,rej) => {
      setTimeout(() => {
        res(productos)
      },2000)
    })

    promesProductos.then((items) => {
      setAux(items);
    })
},[])

  return (
    <div className="card">
      <img  src={carpollo_papas_fritas} style={{height:300,width:300,marginLeft:15}} className="card-img-top" alt="..."/>
      
      <div className="card-body">
        <h5 className="card-title" style={{backgroundColor:'#E2E8EA',width:300}}>{props.titulo} </h5>
        <p className="card-text">Some quick example text to build</p>
        <ItemCount stock='15' initial='1'/><br/>
        <ProductList products = {aux}/>
        <button type="button" className="btn btn-success agregar">Agregar al carrito</button>
      </div>
    </div>
  )
}
export default ItemListContainer
