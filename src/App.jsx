import NavBar from './components/navbar/NavBar'
import ItemListContainer from './components/itemlistcontainer/ItemListContainer'

function App() {
  return (
    <>
      <NavBar/>
      <h3>Ofertas de la semana</h3>
      <ItemListContainer titulo="Card title"/>
    </>
  )
}
export default App
