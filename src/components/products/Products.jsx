import React from 'react'
import ItemCount from '../../components/itemcount/ItemCount'
import pollo_papas_fritas from './pollo-papas-fritas.jpg'

const Products = ({producto}) => {
    
    return(
        <div className="card" style="width: 18rem;">
            <img src={pollo_papas_fritas} className="card-img-top" alt="..."/>
            <div className="card-body">
            <h5 className="card-title">{producto.nombre}</h5>
            <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
            <ItemCount/>
        </div>
    </div>
        
    )
    
}

export default Products