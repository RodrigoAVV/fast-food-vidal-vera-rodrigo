import React from 'react'
import { createContext,useState } from 'react'
export const myContext = createContext()


const CartContext = ({children}) => {
    const [productList,setproductList] = useState([])

    const addItem = (item,quantity) => {
       productList.push(item)
        console.log(productList)
    }

    const removeItem = (itemId) => {
    
    }
    const clear = () => {
    
    }
    const isInCart = (id) => {
    
    }
    return(
        <>
            <myContext.Provider value={{productList,setproductList,addItem,removeItem,clear,isInCart}}>
                {children}
            </myContext.Provider>
        </>
    )
}

export default CartContext