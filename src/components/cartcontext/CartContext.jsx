import React, { useState,useContext} from 'react'
const MyContext = React.createContext([])

export const useCartContext = () => useContext(MyContext)

const CartContext = ({children}) => {
    const [productList,setProductList] = useState([])

    const addItem = (item,quantity) => {
       let newProductList
       let product = productList.find(product => product.código == item.código)
      
       if(product){
            product.quantity += quantity
            newProductList = [...productList]
            
       }else{
            product = {...item, quantity: quantity }
            newProductList = [...productList,product]
       }
       setProductList(newProductList)
    }

    const removeItem = (código) => setProductList(productList.filter(product => product.código !== código))

    const clear = () => setProductList([])

    const isInCart = (código) => productList.find(product => product.código == código) ? true : false

    const totalPrecio = () => productList.reduce((prev,act) => prev+act.quantity * act.precio,0)

    const totalProductos = () => productList.reduce((acumulador, productoActual) => acumulador + productoActual.quantity,0)

    return(
        <>
            <MyContext.Provider value={{productList,setProductList,addItem,removeItem,clear,isInCart,totalPrecio,totalProductos}}>
                {children}
            </MyContext.Provider>
        </>
    )
}

export default CartContext