import React from 'react'
import ItemCount from '../../components/itemcount/ItemCount'
import { Link } from 'react-router-dom'

const Products = ({producto}) => {
    return(
       
            <div className="col-sm-3" style={{marginTop:10}}>
            <img src={"/public/img/"+producto.imagen} className="card-img-top" alt="..." style={{height:250,width:300}}/>
                <div className="card-body">
                <h5 className="card-title mb-0">{producto.nombre}</h5>
                <p className="card-text mb-0">{producto.descripcion}</p>
                <p className="card-text mb-0">{producto.precio}</p>
                </div>
                <Link to={"/item/"+producto.id} className="btn btn-info" style={{width:300}} id={producto.codigo}>Detalle</Link>
            </div>
        
    )
}

export default Products