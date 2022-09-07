import React, { useState, useEffect } from 'react'
import { useCartContext } from '../cartcontext/CartContext'
import { Link } from 'react-router-dom'
import { addDoc, collection, getFirestore, updateDoc, doc, query, getDoc } from 'firebase/firestore'


const CheckOut = () => {
    const [mensaje, setMensaje] = useState('')

    const { productList, totalPrecio } = useCartContext()

    const [total, setTotal] = useState(0)


    const [nombre, setNombre] = useState('')
    const [telefono, setTelefono] = useState('')
    const [correo, setCorreo] = useState('')

    const today = new Date()
    let date = today.getDate() + '-' + (today.getMonth() + 1) + '-' + today.getFullYear()
    useEffect(() => {
        setTotal(totalPrecio())
    }, [total])
    const terminarCompra = () => {
        const order = {
            buyer:
            {
                nombre: nombre, teléfono: telefono, correo: correo
            },
            items:
                [...productList],
            total: total,
            fecha: date
        }
        const db = getFirestore()
        const refCollection = collection(db, 'orders')
        addDoc(refCollection, order).then((res) => {
            setMensaje('ID de su pedido ' + res.id)
        })
        actualizarCantidad(order.items)
    }
    const actualizarCantidad = (items) => {
        items.forEach(element => {
            const db = getFirestore()
            const refDoc = doc(db, 'productos', element.id)
            getDoc(refDoc).then((item) => {
                const aux = {
                    ...item.data()
                }
                updateDoc(refDoc, { stock: parseInt(aux.stock) - parseInt(element.quantity)})
            })
        })
    }

    return (
        <>
            <div className="input-group mb-3">
                <input type={'text'} className="form-control" placeholder="Nombre" aria-label="Nombre" value={nombre}
                    onChange={(e) => setNombre(e.target.value)} />
                <span className="input-group-text">@</span>
                <input type={'tel'} className="form-control" placeholder="Teléfono" aria-label="Teléfono" value={telefono}
                    onChange={(e) => setTelefono(e.target.value)} />
                <span className="input-group-text">@</span>
                <input type={'email'} className="form-control" placeholder="Correo" aria-label="Correo" value={correo}
                    onChange={(e) => setCorreo(e.target.value)} />

            </div>
            <button type="button" className="btn btn-success" onClick={() => terminarCompra()}>Realizar pedido</button>
            <h3>{mensaje}</h3>
        </>
    )
}

export default CheckOut