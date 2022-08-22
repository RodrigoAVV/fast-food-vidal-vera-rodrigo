import React,{useState,useEffect} from 'react'
import { useCartContext } from '../cartcontext/CartContext'
import { Link } from 'react-router-dom'
import {addDoc,collection,getFirestore} from 'firebase/firestore'


const CheckOut = () => {

    const {productList,totalPrecio} = useCartContext()
    
    const [total,setTotal] = useState(0)
    useEffect(()=>{
        setTotal(totalPrecio())
    },[total])
    
    const [nombre,setNombre] = useState('')
    const [telefono,setTelefono] = useState('')
    const [correo,setCorreo] = useState('')
    const newDate = new Date()
    const date = newDate.getDate()

    const terminarCompra = () => {
        const order = {buyer:
                        {
                            nombre:nombre,teléfono:telefono,correo:correo
                        },
                        items:
                            [...productList],
                        total:total,
                        fecha:new Date()
                    }
        const db = getFirestore()
        const refCollection = collection(db,'orders')
        addDoc(refCollection,order).then((res)=>{
           console.log(res.id)
        })
        
    }

    return(
        <div className="input-group mb-3">
            <input type={'text'} className="form-control" placeholder="Nombre" aria-label="Nombre" value={nombre}
                onChange={(e)=>setNombre(e.target.value)}/>
            <span className="input-group-text">@</span>
            <input type={'tel'} className="form-control" placeholder="Teléfono" aria-label="Teléfono" value={telefono}
                onChange={(e)=>setTelefono(e.target.value)}/>
            <span className="input-group-text">@</span>
            <input type={'email'} className="form-control" placeholder="Correo" aria-label="Correo" value={correo}
                onChange={(e)=>setCorreo(e.target.value)}/>
                <button type="button" className="btn btn-success" onClick={() => terminarCompra()}>Success</button>
        </div>                      
    )
}

export default CheckOut