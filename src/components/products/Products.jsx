import React from 'react'
import ItemCount from '../../components/itemcount/ItemCount'
import pollo_papas_fritas from './pollo-papas-fritas.jpg'

const Products = ({producto}) => {
    console.log(producto)
    return(
        <div className="card">
            <img src={"/src/components/products/img/"+producto.imagen} className="card-img-top" alt="..."/>
            <div className="card-body">
                <h5 className="card-title">{producto.nombre}</h5>
                <p className="card-text">{producto.descripcion}</p>
                <ItemCount/>
            </div>
        </div>
    )
}

export default Products