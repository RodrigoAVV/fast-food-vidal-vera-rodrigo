import React, {useEffect, useState} from 'react'
import { useParams } from 'react-router-dom'
import ProductList from '../itemlistcontainer/ProductList'
import Loader from '../loader/Loader'

const ItemListContainer = () => {
  const [productData,setProductData] = useState([])
  const [loading,setLoading]=useState(true)
  const {categoriaId} = useParams()

  useEffect(() => {
    const productos = [
      {"codigo":120,"nombre":"Papas surtido","descripcion":"Papas fritas con carne de pollo y salsa a elección","precio":6800,"imagen":"papas-surtido.jpg","recomendado":true,"categoria":"papas"},
      {"codigo":121,"nombre":"Papas y pollo asado","descripcion":"Papas fritas con pollo asado","precio":7900,"imagen":"papas-pollo-asado.jpg","recomendado":false,"categoria":"papas"},
      {"codigo":122,"nombre":"Papas con cebolla","descripcion":"Papas fritas con cebolla frita","precio":4600,"imagen":"papas-cebolla.jpg","recomendado":false,"categoria":"papas"},
      {"codigo":123,"nombre":"Papas con crema","descripcion":"Papas fritas con crema","precio":3800,"imagen":"papas-crema.jpg","recomendado":false,"categoria":"papas"},
      {"codigo":124,"nombre":"Papas fritas con tocino","descripcion":"Papas fritas con tocino y mostaza","precio":3900,"imagen":"papas-tocino.png","recomendado":false,"categoria":"papas"},
      {"codigo":125,"nombre":"Completo italiano","descripcion":"Completo tomate, palta y mayo","precio":1600,"imagen":"completo-italiano.png","recomendado":false,"categoria":"completo"},
      {"codigo":126,"nombre":"Hamburguesa de pollo","descripcion":"Hamburguesa pollo, tomate y cebolla","precio":3200,"imagen":"hamburguesa-pollo.jpg","recomendado":true,"categoria":"hamburguesa"},
      {"codigo":127,"nombre":"Nuggets de pollo","descripcion":"Nuggets de pollo mas salsa a elección","precio":3800,"imagen":"nuggets-pollo.jpg","recomendado":false,"categoria":"nuggets"},
      {"codigo":128,"nombre":"Pizza casera","descripcion":"Pizza con queso, aceituna, tomate y albahaca","precio":5600,"imagen":"pizza-casera.jpg","recomendado":true,"categoria":"pizza"},
      {"codigo":129,"nombre":"Sándwich campestre","descripcion":"Sándwich queso, cebolla, tomate y mayo","precio":5800,"imagen":"sándwich-campestre.jpg","recomendado":true,"categoria":"sándwich"},
      {"codigo":130,"nombre":"Sándwich de pollo","descripcion":"Sándwich de pollo, palta, tomate y salsa","precio":6300,"imagen":"sándwich-pollo.jpg","recomendado":false,"categoria":"sándwich"},
      {"codigo":131,"nombre":"Sándwich simple","descripcion":"Sándwich queso y jamón","precio":2000,"imagen":"sándwich-simple.jpg","recomendado":false,"categoria":"sándwich"}
    ]
    
    const promesProductos = new Promise((res,rej) => {
      setTimeout(() => {
        setLoading(false)
        if(!categoriaId){
          res(productos)
        }else{
          res(productos.filter((producto) => producto.categoria == categoriaId))
        }
      },2000)
    })
    
    promesProductos.then((res) => {
      setProductData(res);
    })
    return () => {
      setLoading(true)
    }
  },[categoriaId])
  
  return(
          <div className="row">
              { loading ? <Loader/>: <ProductList productData={productData}/> }
          </div>
        )
}
export default ItemListContainer
