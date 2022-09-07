import React,{useState} from 'react'
import ItemCount from '../../components/itemcount/ItemCount'
import { Link } from 'react-router-dom'


const ItemDetail = ({product}) => {
    return(
        <div className="galeria-products">
            <img src={"/public/img/"+product.imagen} alt="..."/>
            <h5 className="titulo">{product.nombre}</h5>
            <p className="desc">{product.descripción}</p>
            <p className="desc">{product.categoría}</p>
            <p className="precio">{product.precio}</p>
            <p className="desc">{product.recomendado ? 'Recomendado' : ''}</p>
            <ItemCount product={product}/>
        </div>
    )
}
export default ItemDetail