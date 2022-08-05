import React from 'react'
import ItemCount from '../../components/itemcount/ItemCount'
import { Link } from 'react-router-dom'

const Products = ({producto}) => {
    return(
<<<<<<< HEAD
        <div className="card">
            <img src={"/src/components/products/img/"+producto.imagen} className="card-img-top" alt="..."/>
            <div className="card-body">
                <h5 className="card-title">{producto.nombre}</h5>
                <p className="card-text">{producto.descripcion}</p>
=======
        <div className="col-sm-3" style={{marginTop:10}}>
            <div className="card">
            <img src={"/src/components/products/img/"+producto.imagen} className="card-img-top" alt="..." style={{height:250,width:300}}/>
            <div className="card-body">
                <h5 className="card-title">{producto.nombre}</h5>
>>>>>>> b7bb4ed4c79bbd7170bb4dbc26be4d051808b5a8
                <ItemCount/>
                <Link to={"/item/"+producto.codigo} className="btn btn-info" style={{width:300}} id={producto.codigo}>Detalle</Link>
            </div>
            </div>
        </div>
    )
}

export default Products