import NavBar from './components/navbar/NavBar'
import ItemListContainer from './components/itemlistcontainer/ItemListContainer'
import ItemDetailContainer from './components/itemdetailcontainer/ItemDetailContainer'
import { BrowserRouter,Routes, Route } from 'react-router-dom'
function App() {
  return (
    <>
    <BrowserRouter>
      <NavBar/>
      <Routes>
        <Route exact path ="/" element={<ItemListContainer/>}/>
        <Route exact path ="/categoria/:categoriaId" element={<ItemListContainer/>}/>
        <Route exact path ="/item/:id" element={<ItemDetailContainer/>}/>
        <Route exact path ="*" element={<p>404</p>}/>
      </Routes>
    </BrowserRouter>
    </>
  )
}
export default App
