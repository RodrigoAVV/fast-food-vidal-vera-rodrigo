import React, {useEffect, useState} from 'react'
import { useParams } from 'react-router-dom'
import ProductList from '../itemlistcontainer/ProductList'
import Loader from '../loader/Loader'
import {collection,getDocs,getFirestore,query,where} from 'firebase/firestore'

const ItemListContainer = () => {
  const [productData,setProductData] = useState([])
  const [loading,setLoading]=useState(true)
  const {categoriaId} = useParams()

  useEffect(() => {
    const db = getFirestore()
    let miCollection
    if(categoriaId==undefined){
      miCollection = collection(db,'productos')
    }else{
      miCollection = query(collection(db,'productos'),
      where('categoría','==',categoriaId))
    }

    getDocs(miCollection).then((data) => {
      const auxProducts = data.docs.map((product) => ({
        ...product.data(),
        id: product.id,
      }))
      setLoading(false)
      setProductData(auxProducts)
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
