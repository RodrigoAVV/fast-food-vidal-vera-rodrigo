import React,{useState} from 'react'
import ItemCount from '../../components/itemcount/ItemCount'
import { Link } from 'react-router-dom'


const ItemDetail = ({product}) => {
    return(
        <div className="col-sm-3" style={{marginTop:10}}>
            <div className="card">
            <img src={"/src/components/products/img/"+product.imagen} className="card-img-top" alt="..." style={{height:350,width:380}}/>
            <div className="card-body">
                <h5 className="card-title">{product.nombre}</h5>
                <p className="card-text">{product.descripción}</p>
                <p className="card-text">{product.categoría}</p>
                <p className="card-text">{product.precio}</p>
                <p className="card-text">{product.recomendado ? 'Recomendado' : ''}</p>
                <ItemCount product={product}/>
            </div>
            </div>
        </div>
    )
}
export default ItemDetail