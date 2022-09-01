import React from 'react'
import ItemCount from '../../components/itemcount/ItemCount'
import { Link } from 'react-router-dom'

const Products = ({producto}) => {
    return(
       
            <div className="galeria-products">
                <img src={"/public/img/"+producto.imagen} alt="..."/>
                <h5 className="titulo">{producto.nombre}</h5>
                <p className="desc">{producto.descripción}</p>
                <p className="precio">{producto.precio}</p>
                <Link to={"/item/"+producto.id} className="btn btn-info btn-compra" id={producto.código}>Detalle</Link>
            </div>
        
    )
}

export default Products