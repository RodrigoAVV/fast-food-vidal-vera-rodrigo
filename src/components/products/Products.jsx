import React from 'react'
import ItemCount from '../../components/itemcount/ItemCount'
import { Link } from 'react-router-dom'

const Products = ({producto}) => {
    return(
        <div className="col-sm-3" style={{marginTop:10}}>
            <div className="card">
            <img src={"/src/components/products/img/"+producto.imagen} className="card-img-top" alt="..." style={{height:250,width:300}}/>
            <div className="card-body">
                <h5 className="card-title">{producto.nombre}</h5>
                <ItemCount/>
                <Link to={"/item/"+producto.codigo} className="btn btn-info" style={{width:300}} id={producto.codigo}>Detalle</Link>
            </div>
            </div>
        </div>
    )
}

export default Products