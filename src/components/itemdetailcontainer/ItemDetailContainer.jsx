import React, { useEffect, useState } from 'react'
import ItemDetail from './ItemDetail'
const ItemDetailContainer = () => {

  const [product,setProduct] = useState([])

  useEffect(() => {
    const producto = [
      {"codigo":120,"nombre":"Papas surtido","descripcion":"Papas fritas con carne de pollo y salsa a elección","precio":6800,"imagen":"papas-surtido.jpg","recomendado":true}
    ]
    
    const promesProducts = new Promise((res,rej) => {
      setTimeout(() => {
        res(producto)
      },2000)
    })
    
    promesProducts.then((res) => {
      setProduct(res);
    })
  },[])
  
  return(
          <div className="row">
            {
            product.map((product) => {
                return <ItemDetail key={product.codigo} product={product}/>
            })
            }
            
          </div>
        )
}
export default ItemDetailContainer
