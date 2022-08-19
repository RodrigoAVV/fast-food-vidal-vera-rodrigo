import React, { useEffect, useState } from 'react'
import ItemDetail from './ItemDetail'
import Loader from '../loader/Loader'
import { useParams } from 'react-router-dom'
import { getDoc,getFirestore,doc } from 'firebase/firestore'

const ItemDetailContainer = () => {

  const [product,setProduct] = useState([])

  const {id} = useParams()

  const [loading,setLoading]=useState(true)

  useEffect(() => {
    const db = getFirestore()
    const refDoc = doc(db,'productos',id)
    
    getDoc(refDoc).then((item)=>{
      const aux = {
        ...item.data(),
        id:item.id
      }
      setProduct(aux)
      setLoading(false)
    })
   
    return () => {
      setLoading(true)
    }
  },[id])
  
  return(
          <div className="row">
            {
              loading ? <Loader/>: <ItemDetail product={product}/> 
            }
            
          </div>
        )
}
export default ItemDetailContainer
