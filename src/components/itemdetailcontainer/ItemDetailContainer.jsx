import React, { useEffect, useState } from 'react'
import ItemDetail from './ItemDetail'
import Loader from '../loader/Loader'
import { useParams } from 'react-router-dom'

const ItemDetailContainer = () => {

  const [product,setProduct] = useState([])

  const {id} = useParams()

  const [loading,setLoading]=useState(true)

  useEffect(() => {
    const productos = [
      {"codigo":120,"nombre":"Papas surtido","descripcion":"Papas fritas con carne de pollo y salsa a elección","precio":6800,"imagen":"papas-surtido.jpg","recomendado":true,"categoria":"papas","cantidad":10,"cant":0},
      {"codigo":121,"nombre":"Papas y pollo asado","descripcion":"Papas fritas con pollo asado","precio":7900,"imagen":"papas-pollo-asado.jpg","recomendado":false,"categoria":"papas","cantidad":10,"cant":0},
      {"codigo":122,"nombre":"Papas con cebolla","descripcion":"Papas fritas con cebolla frita","precio":4600,"imagen":"papas-cebolla.jpg","recomendado":false,"categoria":"papas","cantidad":10,"cant":0},
      {"codigo":123,"nombre":"Papas con crema","descripcion":"Papas fritas con crema","precio":3800,"imagen":"papas-crema.jpg","recomendado":false,"categoria":"papas","cantidad":10,"cant":0},
      {"codigo":124,"nombre":"Papas fritas con tocino","descripcion":"Papas fritas con tocino y mostaza","precio":3900,"imagen":"papas-tocino.png","recomendado":false,"categoria":"papas","cantidad":10,"cant":0},
      {"codigo":125,"nombre":"Completo italiano","descripcion":"Completo tomate, palta y mayo","precio":1600,"imagen":"completo-italiano.png","recomendado":false,"categoria":"completo","cantidad":10,"cant":0},
      {"codigo":126,"nombre":"Hamburguesa de pollo","descripcion":"Hamburguesa pollo, tomate y cebolla","precio":3200,"imagen":"hamburguesa-pollo.jpg","recomendado":true,"categoria":"hamburguesa","cantidad":10,"cant":0},
      {"codigo":127,"nombre":"Nuggets de pollo","descripcion":"Nuggets de pollo mas salsa a elección","precio":3800,"imagen":"nuggets-pollo.jpg","recomendado":false,"categoria":"nuggets","cantidad":10,"cant":0},
      {"codigo":128,"nombre":"Pizza casera","descripcion":"Pizza con queso, aceituna, tomate y albahaca","precio":5600,"imagen":"pizza-casera.jpg","recomendado":true,"categoria":"pizza","cantidad":10,"cant":0},
      {"codigo":129,"nombre":"Sándwich campestre","descripcion":"Sándwich queso, cebolla, tomate y mayo","precio":5800,"imagen":"sándwich-campestre.jpg","recomendado":true,"categoria":"sándwich","cantidad":10,"cant":0},
      {"codigo":130,"nombre":"Sándwich de pollo","descripcion":"Sándwich de pollo, palta, tomate y salsa","precio":6300,"imagen":"sándwich-pollo.jpg","recomendado":false,"categoria":"sándwich","cantidad":10,"cant":0},
      {"codigo":131,"nombre":"Sándwich simple","descripcion":"Sándwich queso y jamón","precio":2000,"imagen":"sándwich-simple.jpg","recomendado":false,"categoria":"sándwich","cantidad":10,"cant":0}
    ]
    
    const promesProducts = new Promise((res,rej) => {
      setTimeout(() => {
        setLoading(false)
        if(id){
          res(productos.filter((producto) => producto.codigo == id))
        }
      },2000)
    })
    
    promesProducts.then((res) => {
      setProduct(res);
    })
    return () => {
      setLoading(true)
    }
  },[id])
  
  return(
          <div className="row">
            {
              loading ? <Loader/> : product.map((prod) => {
                return <ItemDetail key={prod.codigo} product={prod}/>
              })
            }
            
          </div>
        )
}
export default ItemDetailContainer
