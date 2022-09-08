import React, { useState, useContext } from 'react'
const MyContext = React.createContext([])

export const useCartContext = () => useContext(MyContext)

const CartContext = ({ children }) => {
    let carrito = []
    const addItem = (item, quantity) => {
        if(!localStorage.getItem('carrito')){
            localStorage.setItem('carrito','[]')
        }
        let newProductList = []
        carrito = JSON.parse(localStorage.getItem('carrito'))
        let product = carrito.find(product => product.código == item.código)
        if (product) {
            product.quantity += quantity
            newProductList = [...carrito]
        } else {
            product = { ...item, quantity: quantity }
            newProductList = [...carrito, product]
        }
        localStorage.setItem('carrito', JSON.stringify(newProductList))
    }

    const removeItem = (código) => {
        carrito = JSON.parse(localStorage.getItem('carrito'))
        //setProductList(JSON.parse(localStorage.getItem('productList')))
        //setProductList(productList.filter(product => product.código !== código))
        carrito = carrito.filter(product => product.código !== código)
        
        localStorage.setItem('carrito', JSON.stringify(carrito))
        //setProductList(productList)
    }

    const clear = () => {
        localStorage.setItem('carrito','[]')
    }

    const isInCart = (código) => {
        carrito = JSON.parse(localStorage.getItem('carrito'))
        carrito = carrito.find(product => product.código == código) ? true : false
        return carrito
    }
    const totalPrecio = () => {
        carrito = JSON.parse(localStorage.getItem('carrito'))
        return carrito.reduce((prev, act) => prev + act.quantity * act.precio, 0)
    }

    const totalProductos = () => {
        carrito = JSON.parse(localStorage.getItem('carrito'))
        if(carrito){
            return carrito.reduce((acumulador, productoActual) => acumulador + productoActual.quantity, 0)
        }
    }

    return (
        <>
            <MyContext.Provider value={{ carrito, addItem, removeItem, clear, isInCart, totalPrecio, totalProductos }}>
                {children}
            </MyContext.Provider>
        </>
    )
}

export default CartContext