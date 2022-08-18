import React, {useEffect, useState} from 'react'
import { useParams } from 'react-router-dom'
import ProductList from '../itemlistcontainer/ProductList'
import Loader from '../loader/Loader'
import {collection,getDocs,getFirestore} from 'firebase/firestore'

const ItemListContainer = () => {
  const [productData,setProductData] = useState([])
  const [loading,setLoading]=useState(true)
  const {categoriaId} = useParams()

  useEffect(() => {
    const db = getFirestore()
    
    const miCollection = collection(db,'productos')

    getDocs(miCollection).then((data) => {
      const auxProducts = data.docs.map((product) => ({
        ...product.data(),
        id: product.id,
      }))
      setLoading(false)
      setProductData(auxProducts)
      console.log(auxProducts)
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
