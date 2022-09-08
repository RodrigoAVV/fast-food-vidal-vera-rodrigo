import React, { useState, useContext } from 'react'
const MyContext = React.createContext([])

export const useCartContext = () => useContext(MyContext)

const CartContext = ({ children }) => {
    const [productList, setProductList] = useState([])

    const addItem = (item, quantity) => {
        let newProductList
        let product = productList.find(product => product.código == item.código)
        if (product) {
            product.quantity += quantity
            newProductList = [...productList]
        } else {
            product = { ...item, quantity: quantity }
            newProductList = [...productList, product]
        }
        setProductList(newProductList)
        //localStorage.setItem('productList', JSON.stringify(productList))
    }

    const removeItem = (código) => {
        //setProductList(JSON.parse(localStorage.getItem('productList')))
        //setProductList(productList.filter(product => product.código !== código))
        productList = productList.filter(product => product.código !== código)
        
        //localStorage.setItem('productList', JSON.stringify(productList))
        setProductList(productList)
    }

    const clear = () => setProductList([])

    const isInCart = (código) => {
        productList.find(product => product.código == código) ? true : false
    }
    const totalPrecio = () => {
        //const productList = JSON.parse(localStorage.getItem('productList'))
        return productList.reduce((prev, act) => prev + act.quantity * act.precio, 0)
    }

    const totalProductos = () => {
        //const productList = JSON.parse(localStorage.getItem('productList'));
        return productList.reduce((acumulador, productoActual) => acumulador + productoActual.quantity, 0)
    }

    return (
        <>
            <MyContext.Provider value={{ productList, addItem, removeItem, clear, isInCart, totalPrecio, totalProductos }}>
                {children}
            </MyContext.Provider>
        </>
    )
}

export default CartContext