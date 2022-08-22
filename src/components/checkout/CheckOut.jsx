import React,{useState,useEffect} from 'react'
import { useCartContext } from '../cartcontext/CartContext'
import { Link } from 'react-router-dom'


const CheckOut = () => {

    const {productList,totalPrecio} = useCartContext()
    

    const [nombre,setNombre] = useState('')
    const [telefono,setTelefono] = useState('')
    const [correo,setCorreo] = useState('')

    const terminarCompra = () => {
        const order = {buyer: {nombre,telefono,correo},items:[productList],totalPrecio}
        console.log(order)
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
                <Link to={'/checkout'} type="button" className="btn btn-success" onClick={() => terminarCompra()}>Success</Link>
        </div>                      
    )
}

export default CheckOut