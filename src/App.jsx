import React from 'react'
import NavBar from './components/navbar/NavBar'
import ItemListContainer from './components/itemlistcontainer/ItemListContainer'
import ItemDetailContainer from './components/itemdetailcontainer/ItemDetailContainer'
import CheckOut from './components/checkout/CheckOut'
import Cart from './components/cart/Cart'
import { BrowserRouter,Routes, Route } from 'react-router-dom'
import CartContext from './components/cartcontext/CartContext'
import '../public/css/main.css'

function App() {
  
  return (
    
    <>
      <BrowserRouter>
      <CartContext>
        <NavBar/>
        <Routes>
          <Route exact path ="/" element={<ItemListContainer/>}/>
          <Route exact path ="/categoria/:categoriaId" element={<ItemListContainer/>}/>
          <Route exact path ="/item/:id" element={<ItemDetailContainer/>}/>
          <Route exact path ="/cart" element={<Cart/>}/>
          <Route exact path ="/checkout" element={<CheckOut/>}/>
          <Route exact path ="*" element={<p>404</p>}/>
        </Routes>
        </CartContext>
      </BrowserRouter>
    </>
  )
}
export default App
