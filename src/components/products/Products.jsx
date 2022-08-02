import React from 'react'
import ItemCount from '../../components/itemcount/ItemCount'


const Products = ({producto}) => {
    console.log(producto)
    return(
        <div className="col-sm-3" style={{marginTop:10}}>
            <div className="card">
            <img src={"/src/components/products/img/"+producto.imagen} className="card-img-top" alt="..." style={{height:250,width:300}}/>
            <div className="card-body">
                <h5 className="card-title">{producto.nombre}</h5>
                <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                <ItemCount/>
                <button className="btn btn-info" style={{width:300}} id={producto.codigo}>Detalle</button>
            </div>
            </div>
        </div>
    )
}

export default Products